"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Command } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { footerItems, navItems, projects, articles, team } from "@/content/site";
import { Button, EmailButton } from "./Button";
import { MetaTable } from "./blocks";

function DhakaTime() {
  const [time, setTime] = useState("GMT+6");
  useEffect(() => {
    const update = () => setTime(`${new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date())} GMT+6`);
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return <span suppressHydrationWarning>{time}</span>;
}

function Socials({ inverse = false }: { inverse?: boolean }) {
  const style = inverse ? "text-ink-inverse/70 hover:text-ink-inverse" : "text-ink-secondary hover:text-ink";
  return <div className="flex items-center gap-1"><a href="https://www.linkedin.com/company/zentura-agency" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`grid size-7 place-items-center ${style}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a><a href="https://www.facebook.com/share/19cohfTBNb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`grid size-7 place-items-center ${style}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a><a href="https://wa.me/8801537688437" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`grid size-7 place-items-center ${style}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a></div>;
}

function CommandMenu({ open, close }: { open: boolean; close: () => void }) {
  const menuItems = [...navItems, ...footerItems];
  const reduce = useReducedMotion();
  return <AnimatePresence>{open && <motion.div role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-50 flex flex-col bg-inverse p-5 text-ink-inverse" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : .2, ease: [0.22, 1, .36, 1] }}><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center"><p className="font-mono text-label">NAVIGATION</p><Button className="bg-background text-ink" onClick={close}>CLOSE</Button></div><motion.div className="my-auto ml-auto w-full max-w-[850px]" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : .28, delay: reduce ? 0 : .04, ease: [0.22, 1, .36, 1] }}><nav aria-label="Command navigation"><ul className="grid grid-cols-2 gap-x-8 max-sm:grid-cols-1">{menuItems.map((item, index) => <li key={item.to} className="border-b border-ink-inverse/20"><Link href={item.to} onClick={close} className="grid min-h-14 grid-cols-[28px_minmax(0,1fr)] items-center font-mono text-small uppercase"><span className="text-ink-inverse/40">0{index + 1}</span><span>{item.label}</span></Link></li>)}</ul></nav><div className="mt-8 flex items-center justify-between"><Socials inverse /><EmailButton className="bg-background text-ink">GET A QUOTE</EmailButton></div></motion.div></motion.div>}</AnimatePresence>;
}

function ProjectRail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;
  return <><Link href="/work" className="mb-8 inline-block font-mono text-label uppercase text-ink underline underline-offset-3">Back to Work</Link><p className="font-mono text-label text-ink-muted">ROLE</p><p className="mt-1 text-small text-ink">Product design<br />Engineering</p><p className="mt-6 font-mono text-label text-ink-muted">SCOPE</p><p className="mt-1 text-small text-ink">Strategy<br />Product<br />Systems</p><p className="mt-6 font-mono text-label text-ink-muted">PROJECT</p><p className="mt-1 text-small text-ink">{project.title}<br />{project.year}</p></>;
}

function ArticleRail({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;
  return <><Link href="/blog" className="mb-8 inline-block font-mono text-label uppercase text-ink underline underline-offset-3">Back to Blog</Link><p className="font-mono text-label text-ink-muted">SUMMARY</p><p className="mt-1 max-w-[28ch] text-small text-ink">{article.summary}</p><p className="mt-6 font-mono text-label text-ink-muted">PUBLISHED</p><p className="mt-1 text-small text-ink">{article.date}</p><p className="mt-6 font-mono text-label text-ink-muted">TOPICS</p><p className="mt-1 text-small text-ink">{article.topics.map((topic) => <span key={topic} className="block">{topic}</span>)}</p><p className="mt-6 font-mono text-label text-ink-muted">IN THIS ARTICLE</p><nav className="mt-1 space-y-1">{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`} className="block text-small text-ink-secondary hover:text-ink">{section.heading}</a>)}</nav></>;
}

function TeamRail({ slug }: { slug: string }) {
  const member = team.find((item) => item.slug === slug);
  if (!member) return null;
  return <><Image src={member.image.src} sizes="(min-width: 1180px) 330px, 260px" alt={member.image.alt} width={member.image.width} height={member.image.height} priority className="aspect-4/5 w-full rounded-media object-cover" /><div className="mt-8"><p className="font-mono text-label text-ink-muted">ROLE</p><p className="mt-1 text-small text-ink">{member.role}</p><p className="mt-6 font-mono text-label text-ink-muted">BASE</p><p className="mt-1 text-small text-ink">Dhaka, Bangladesh</p><p className="mt-6 font-mono text-label text-ink-muted">SKILLS &amp; SPECIALISATIONS</p><p className="mt-1 text-small text-ink">{member.focus}<br />Integrated product delivery<br />Cross-functional collaboration</p></div></>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const projectMatch = pathname.match(/^\/work\/([^/]+)$/);
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  const teamMatch = pathname.match(/^\/studio\/([^/]+)$/);
  const isDetail = Boolean(projectMatch || blogMatch || teamMatch);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setMenuOpen((value) => !value); }
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); setMenuOpen(false); }, [pathname]);

  return <div className="site-frame mx-auto min-h-screen border-x border-dashed border-border px-5">
    <header className="site-header fixed top-0 z-40 grid h-[52px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 min-[720px]:grid-cols-[280px_minmax(0,1fr)] min-[1180px]:grid-cols-[350px_minmax(0,1026px)]">
      <Link href="/" className="inline-flex min-h-8 items-center gap-2 font-mono text-label text-ink"><span className="text-ink-max">■</span> ZENTURA</Link>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><nav aria-label="Primary" className="min-w-0 max-[719px]:hidden"><ul className="flex justify-start gap-5 px-3">{navItems.map((item) => <li key={item.to}><Link href={item.to} aria-current={pathname === item.to ? "page" : undefined} className="font-mono text-label uppercase text-ink-secondary transition-colors duration-150 hover:text-ink aria-[current=page]:text-ink">{item.label}</Link></li>)}</ul></nav><Button aria-label="Open command menu" className="ml-auto" onClick={() => setMenuOpen(true)}><span>MENU</span><Command aria-hidden="true" size={11} strokeWidth={2} /></Button></div>
    </header>

    <div className="grid gap-5 pt-[52px] min-[720px]:grid-cols-[280px_minmax(0,1fr)] min-[1180px]:grid-cols-[350px_minmax(0,1026px)]">
      <aside className={`pb-5 min-[720px]:relative min-[720px]:min-h-[calc(100vh-52px)] min-[720px]:pr-5 ${isDetail ? "max-[719px]:hidden" : ""}`}>
        <div className="flex flex-col min-[720px]:fixed min-[720px]:bottom-5 min-[720px]:top-[72px] min-[720px]:w-[260px] min-[1180px]:w-[330px]">
          <div>{projectMatch ? <ProjectRail slug={projectMatch[1] ?? ""} /> : blogMatch ? <ArticleRail slug={blogMatch[1] ?? ""} /> : teamMatch ? <TeamRail slug={teamMatch[1] ?? ""} /> : <><p className="max-w-[360px] text-body text-ink">Product design and engineering studio in Bangladesh. We join product teams, design and build in one loop, and stay through what ships.</p><EmailButton className="mt-4">GET A QUOTE</EmailButton></>}</div>
          {!isDetail && <div className="mt-12 min-[720px]:mt-auto"><Socials /><MetaTable compact className="mt-3 border-t border-border" rows={[{ label: "LOCAL TIME", value: <DhakaTime /> }, { label: "AREA", value: "Dhaka, Bangladesh" }, { label: "E-MAIL", value: "official@zentura.agency" }]} /><p className="mt-4 text-small text-ink-muted">© 2026 Zentura</p></div>}
        </div>
      </aside>
      <main id="main-content" className="min-w-0 max-w-[1026px] pt-5">{children}</main>
    </div>
    <CommandMenu open={menuOpen} close={() => setMenuOpen(false)} />
  </div>;
}
