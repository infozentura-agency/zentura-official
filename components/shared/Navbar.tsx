"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background backdrop-blur-xl border-border"
            : "bg-background border-border"
        }`}>
        <div className='mx-auto px-12.5 h-[72px] flex items-center justify-between'>
          <Link href='/' className='flex items-center gap-2.5'>
            <div className='w-8 h-8 rounded-full bg-foreground flex items-center justify-center'>
              <span className='text-[11px] font-bold text-primary-foreground'>
                H
              </span>
            </div>
            <span className='text-[15px] font-semibold text-foreground tracking-tight'>
              Zentura
            </span>
          </Link>

          <div className='hidden md:flex items-center gap-0.5 border border-border rounded-full px-1 py-0.5'>
            {navLinks.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <Link
                  key={l.label}
                  href={l.href}
                  className={`text-[13px] px-4 py-1.5 rounded-full transition-all duration-200 ${
                    active
                      ? "bg-foreground text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}>
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className='hidden md:flex items-center gap-4'>
            <Link
              href='/contact'
              className='text-[13px] text-muted-foreground hover:text-foreground transition-colors'>
              Log in
            </Link>
            <Link
              href='/contact'
              className='text-[12px] font-semibold bg-foreground text-primary-foreground px-5 py-2 rounded-full hover:bg-foreground/90 transition-colors'>
              Talk to us
            </Link>
          </div>

          <button
            className='md:hidden p-2 text-foreground'
            aria-label='Open menu'
            onClick={() => setMenuOpen(true)}>
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'>
              <line x1='3' y1='7' x2='19' y2='7' />
              <line x1='3' y1='15' x2='19' y2='15' />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-background transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}>
        <div className='flex items-center justify-between px-12.5 h-[72px] border-b border-border'>
          <Link href='/' className='flex items-center gap-2.5'>
            <div className='w-8 h-8 rounded-full bg-foreground flex items-center justify-center'>
              <span className='text-[11px] font-bold text-primary-foreground'>
                H
              </span>
            </div>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label='Close menu'
            className='p-2 text-foreground'>
            <svg
              width='22'
              height='22'
              viewBox='0 0 22 22'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'>
              <line x1='5' y1='5' x2='17' y2='17' />
              <line x1='17' y1='5' x2='5' y2='17' />
            </svg>
          </button>
        </div>
        <div className='flex flex-col px-12.5 pt-8'>
          {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              className='text-[28px] font-serif text-foreground py-4 border-b border-border hover:text-muted-foreground transition-colors animate-slide-in'
              style={{ animationDelay: `${i * 50}ms` }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
