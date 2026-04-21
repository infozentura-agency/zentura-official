"use server";

import SendEmail from "@/utils/send-email";
import { headers } from "next/headers";

export interface ContactState {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}

/**
 * GLOBAL STORE (persists per server instance)
 */
const rateLimitStore = new Map<
  string,
  { count: number; firstRequest: number }
>();

const WINDOW_MS = 60 * 1000; // 1 min
const MAX_REQ = 1;

/**
 * CLEANUP (prevents memory leak)
 */
function cleanupStore(now: number) {
  for (const [ip, data] of rateLimitStore.entries()) {
    if (now - data.firstRequest > WINDOW_MS) {
      rateLimitStore.delete(ip);
    }
  }
}

/**
 * GET CLIENT IP (proxy-safe)
 */
async function getClientIP() {
  const h = await headers();

  const forwarded = h.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return "unknown";
}

export async function submitContactAction(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const now = Date.now();

  // cleanup old entries (cheap)
  cleanupStore(now);

  // rate limit
  const ip = await getClientIP();

  const entry = rateLimitStore.get(ip);

  if (!entry) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
  } else {
    if (now - entry.firstRequest > WINDOW_MS) {
      rateLimitStore.set(ip, { count: 1, firstRequest: now });
    } else {
      entry.count++;

      if (entry.count > MAX_REQ) {
        return {
          success: false,
          message: "Too many requests. Try again later.",
        };
      }
    }
  }

  try {
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const company = formData.get("company")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // validation
    const errors: Record<string, string> = {};

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!message) errors.message = "Message is required";

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Validation failed",
        fieldErrors: errors,
      };
    }

    // Build email contents
    const subject = `New Contact Form Submission from ${name} ${company ? `- (${company})` : ""}`;
    const text = `
    Name: ${name}
    Email: ${email}
    Company: ${company}
    Message: ${message}
    `;

    const html = `
    <div style="font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; background-color: #f6f7f8; padding: 30px 15px;">
      <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 3px 10px rgba(0,0,0,0.08);">
        <div style="background: #0a2b4e; padding: 20px; text-align: left;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; letter-spacing: 0.3px;">
            Contact Form Submission
          </h2>
        </div>
        <div style="padding: 25px 20px;">
          <p style="font-size: 15px; color: #1a202c; margin: 0 0 12px; line-height: 1.6; font-weight: 400;">
            <strong style="color: #111827; font-weight: 600;">Name:</strong> ${name}
          </p>
          <p style="font-size: 15px; color: #1a202c; margin: 0 0 12px; line-height: 1.6; font-weight: 400;">
            <strong style="color: #111827; font-weight: 600;">Email:</strong>
            <a href="mailto:${email}" style="color: #1e40af; text-decoration: none; font-weight: 500;">${email}</a>
          </p>
          <p style="font-size: 15px; color: #1a202c; margin: 0 0 12px; line-height: 1.6; font-weight: 400;">
            <strong style="color: #111827; font-weight: 600;">Message:</strong>
          </p>
          ${
            company
              ? `<p style="font-size: 15px; color: #1a202c; margin: 0 0 12px; line-height: 1.6; font-weight: 400;">
            <strong style="color: #111827; font-weight: 600;">Company:</strong> ${company}
          </p>`
              : ""
          }
          <div style="padding: 14px; border-left: 3px solid #e2e8f0; background: #fafafa; font-size: 14px; color: #1a202c; line-height: 1.65;">
            ${message}
          </div>
        </div>
        <div style="background: #f9fafb; padding: 12px 20px; text-align: center; font-size: 12px; color: #4b5563; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; font-weight: 400;">Received via website contact form</p>
          <p style="margin: 4px 0 0;">
            <a href="${process.env.WEBSITE_URL}" style="color: #1e40af; text-decoration: none; font-weight: 500;">${process.env.WEBSITE_URL}</a>
          </p>
        </div>
      </div>
    </div>
    `;

    const sent = await SendEmail({
      to: process.env.EMAIL_USER as string,
      subject,
      text,
      html,
    });

    if (!sent) {
      return {
        success: false,
        message: "Failed to send email",
      };
    }

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (err) {
    return {
      success: false,
      message: "Server error",
    };
  }
}
