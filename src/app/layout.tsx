import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/zentura/Shell";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Zentura — Product design and engineering",
  description: "Zentura is a product design and engineering studio in Dhaka, working as a strategic operating partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">SKIP TO CONTENT</a>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
