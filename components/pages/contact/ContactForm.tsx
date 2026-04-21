"use client";

import { submitContactAction, type ContactState } from "@/app/actions/contact";
import { MagneticButton } from "@/components/shared/motion";
import { useToast } from "@/hooks/use-toast";
import { useActionState, useEffect } from "react";

const initialState: ContactState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }
  }, [state.message, state.success, toast]);

  return (
    <form className='space-y-5' action={formAction}>
      {[
        { label: "Name", type: "text", placeholder: "Your name", name: "name" },
        {
          label: "Email",
          type: "email",
          placeholder: "you@company.com",
          name: "email",
        },
        {
          label: "Company",
          type: "text",
          placeholder: "Your company (optional)",
          name: "company",
        },
      ].map((f) => (
        <div key={f.label}>
          <label className='text-[13px] font-medium block mb-2 text-foreground'>
            {f.label}
          </label>
          <input
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            className='w-full px-4 py-3 border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow'
          />
          {state.fieldErrors?.[f.name] && (
            <p className='text-[12px] text-red-500 mt-1'>
              {state.fieldErrors[f.name]}
            </p>
          )}
        </div>
      ))}
      <div>
        <label className='text-[13px] font-medium block mb-2 text-foreground'>
          Tell us about your project
        </label>
        <textarea
          name='message'
          rows={5}
          placeholder='What are you building? What stage are you at?'
          className='w-full px-4 py-3 border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow'
        />
        {state.fieldErrors?.message && (
          <p className='text-[12px] text-red-500 mt-1'>
            {state.fieldErrors.message}
          </p>
        )}
      </div>
      <MagneticButton className='w-full md:w-auto'>
        <button
          type='submit'
          className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
          Send message →
        </button>
      </MagneticButton>
    </form>
  );
}
