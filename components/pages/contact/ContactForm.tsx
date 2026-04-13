"use client";

import { MagneticButton } from "@/components/shared/motion";

export default function ContactForm() {
  return (
    <form className='space-y-5' onSubmit={(e) => e.preventDefault()}>
      {[
        { label: "Name", type: "text", placeholder: "Your name" },
        { label: "Email", type: "email", placeholder: "you@company.com" },
        {
          label: "Company",
          type: "text",
          placeholder: "Your company (optional)",
        },
      ].map((f) => (
        <div key={f.label}>
          <label className='text-[13px] font-medium block mb-2 text-foreground'>
            {f.label}
          </label>
          <input
            type={f.type}
            placeholder={f.placeholder}
            className='w-full px-4 py-3 border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow'
          />
        </div>
      ))}
      <div>
        <label className='text-[13px] font-medium block mb-2 text-foreground'>
          Tell us about your project
        </label>
        <textarea
          rows={5}
          placeholder='What are you building? What stage are you at?'
          className='w-full px-4 py-3 border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-shadow'
        />
      </div>
      <MagneticButton className='w-full md:w-auto'>
        <button
          type='submit'
          className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors w-full md:w-auto'>
          Send message →
        </button>
      </MagneticButton>
    </form>
  );
}
