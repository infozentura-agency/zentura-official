import Link from "next/link";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const classes = "inline-flex min-h-7 shrink-0 items-center justify-center gap-1 rounded-control bg-inverse px-3 py-1 font-mono text-[10px] leading-4 text-ink-inverse transition-[transform,opacity] duration-200 ease-out motion-safe:hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong active:translate-y-0 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-50";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(classes, className)} {...props} />;
}

export function ButtonLink({ to = "/careers", children, className }: { to?: string; children: ReactNode; className?: string }) {
  return <Link href={to} className={cn(classes, className)}>{children}</Link>;
}

export function EmailButton({ children = "GET A QUOTE", className }: { children?: ReactNode; className?: string }) {
  return <a href="mailto:official@zentura.agency?subject=Project%20quote%20request" className={cn(classes, className)}>{children}</a>;
}
