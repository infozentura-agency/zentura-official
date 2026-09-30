"use client";
import Link from "next/link";
import Image from "next/image";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";
import type { Project } from "@/content/site";

export function Section({ children, className, labelledBy }: { children: ReactNode; className?: string; labelledBy?: string }) {
  return <section aria-labelledby={labelledBy} className={cn("border-t border-border py-16", className)}>{children}</section>;
}

const motionEase = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("text-reveal", className)}>{children}</div>;
}

export function HeroStatement({ label, title, children, cta }: { label: string; title: string; children?: ReactNode; cta?: string }) {
  return <Section className="grid gap-8 pt-0 md:grid-cols-[220px_minmax(0,1fr)]"><p className="text-label text-ink-muted">{label}</p><div className="max-w-[68ch]"><h1 className="text-display text-ink">{title}</h1>{children && <div className="mt-6 text-body text-ink-secondary">{children}</div>}{cta && <ButtonLink className="mt-6">{cta}</ButtonLink>}</div></Section>;
}

export function MediaFrame({ src, sizes = "(min-width: 1180px) 506px, (min-width: 768px) 50vw, 100vw", alt, aspect = "product", width, height, eager = false, className }: { src: string; sizes?: string; alt: string; aspect?: "product" | "device" | "video" | "natural"; width: number; height: number; eager?: boolean; className?: string }) {
  return <div className={cn("w-full overflow-hidden rounded-media bg-surface-soft", aspect === "product" && "aspect-4/3", aspect === "device" && "aspect-4/5", aspect === "video" && "aspect-video", className)}><Image src={src} sizes={sizes} alt={alt} width={width} height={height} priority={eager} className={cn("h-full w-full object-cover", aspect === "natural" && "h-auto")} /></div>;
}

export function WorkCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  const disclosure = project.status === "concept" ? "Self-initiated" : project.imageKind === "editorial" ? "Editorial image" : null;
  const [mode, setMode] = useState<"hidden" | "pointer" | "focus">("hidden");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 240, damping: 22, mass: .45 });
  const smoothY = useSpring(y, { stiffness: 240, damping: 22, mass: .45 });
  const followPointer = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left + 18);
    y.set(event.clientY - bounds.top - 18);
    setMode("pointer");
  };
  return <article className="group min-w-0"><Link href={`/work/${project.slug}`} onFocus={() => setMode("focus")} onBlur={() => setMode("hidden")} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong active:scale-[.995]"><div className="relative overflow-hidden" onMouseEnter={followPointer} onMouseMove={followPointer} onMouseLeave={() => setMode("hidden")}><MediaFrame src={project.image} alt={project.imageAlt} width={project.width} height={project.height} aspect={project.aspect === "device" ? "device" : "product"} eager={eager} className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.008]" /><motion.span aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-10 rounded-control bg-tooltip px-3 py-1.5 text-small text-ink-inverse backdrop-blur-md" style={mode === "pointer" ? { x: smoothX, y: smoothY } : { left: "50%", top: "50%", x: "-50%", y: "-50%" }} initial={false} animate={{ opacity: mode === "hidden" ? 0 : 1, scale: mode === "hidden" ? .92 : 1 }} transition={{ duration: .2, ease: motionEase }}>View Details</motion.span></div><div className="mt-[10px] space-y-0.5"><h2 className="text-card text-ink">{project.title}</h2><p className="text-meta text-ink-secondary">{project.category}, {project.year}{disclosure && <> · {disclosure}</>}</p></div></Link></article>;
}

export function WorkGrid({ projects, firstImageEager = false }: { projects: Project[]; firstImageEager?: boolean }) {
  const columns = [projects.filter((_, index) => index % 2 === 0), projects.filter((_, index) => index % 2 === 1)];
  return <><div className="flex flex-col gap-6 min-[720px]:hidden">{projects.map((project, index) => <WorkCard key={project.slug} project={project} eager={firstImageEager && index === 0} />)}</div><div className="hidden grid-cols-2 gap-x-4 min-[720px]:grid">{columns.map((column, columnIndex) => <div key={columnIndex} className="flex min-w-0 flex-col gap-6">{column.map((project, index) => <WorkCard key={project.slug} project={project} eager={firstImageEager && index === 0} />)}</div>)}</div></>;
}

export function ImageReveal({ children, className, immediate = false }: { children: ReactNode; className?: string; immediate?: boolean }) {
  return <div className={cn("overflow-hidden", !immediate && "image-reveal", className)}>{children}</div>;
}

export function EditorialText({ heading, children, primary = false }: { heading: string; children: ReactNode; primary?: boolean }) {
  const Heading = primary ? "h1" : "h2";
  return <section className="grid gap-6 py-10 md:grid-cols-2 md:gap-4"><Heading className="max-w-[28ch] text-editorial text-ink">{heading}</Heading><div className="max-w-[60ch] space-y-4 text-body text-ink-secondary">{children}</div></section>;
}

export function MetaTable({ rows, className, compact = false }: { rows: { label: string; value: ReactNode }[]; className?: string; compact?: boolean }) {
  return <dl className={cn("w-full", className)}>{rows.map((row) => <div key={row.label} className={cn("grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border", compact ? "py-2.5" : "py-3")}><dt className="text-label text-ink-muted">{row.label}</dt><dd className="max-w-[28ch] text-right text-small text-ink">{row.value}</dd></div>)}</dl>;
}

export function ProseBlock({ title, children }: { title?: string; children: ReactNode }) {
  return <Reveal className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)]">{title ? <h2 className="text-card text-ink">{title}</h2> : <span aria-hidden="true" />}<div className="max-w-[58ch] space-y-5 text-body [&_h3]:text-card [&_h3]:text-ink [&_strong]:font-normal [&_ul]:list-inside [&_ul]:list-square">{children}</div></Reveal>;
}

export function ListRows({ rows, empty = "NO ENTRIES YET" }: { rows: { label: string; value: ReactNode; detail?: string }[]; empty?: string }) {
  if (rows.length === 0) return <p className="text-label text-ink-secondary">{empty}</p>;
  return <div>{rows.map((row) => <div key={row.label} className="grid gap-2 border-b border-border py-5 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"><p className="text-label text-ink-muted">{row.label}</p><div><div className="text-body text-ink">{row.value}</div>{row.detail && <p className="mt-2 max-w-[58ch] text-small text-ink-secondary">{row.detail}</p>}</div></div>)}</div>;
}
