"use client";

import Link from "next/link";

const footerLinks = {
  Studio: [
    { label: "Homepage", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
  ],
  Services: [
    { label: "Product Design", href: "/work" },
    { label: "Development", href: "/work" },
    { label: "Strategy", href: "/work" },
  ],
  Connect: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};

const Footer = () => (
  <footer className='section-dark'>
    <div className='mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 border-b border-white/10'>
        <div className='px-12.5 py-16 md:py-20'>
          <h2 className='font-serif text-[32px] md:text-[40px] text-white leading-[1.1]'>
            Ready to build something <span className='italic'>great?</span>
          </h2>
          <Link
            href='/contact'
            className='inline-flex mt-6 text-[12px] font-semibold uppercase tracking-wider bg-white text-foreground px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors'>
            Talk to us →
          </Link>
        </div>
        <div className='border-l border-white/10 hidden md:flex items-end justify-end px-12.5 pb-10'>
          <div className='text-right'>
            <p className='text-[11px] font-mono text-white/30 uppercase tracking-wider'>
              Est.
            </p>
            <p className='text-[48px] font-serif text-white/20 italic'>
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='mx-auto border-b border-white/10'>
      <div className='grid grid-cols-2 md:grid-cols-5 px-12.5 py-12 gap-8'>
        <div className='flex items-start'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className='text-[12px] font-mono text-white/40 hover:text-white transition-colors uppercase tracking-wider'>
            Back to top ↑
          </button>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className='text-[12px] font-mono text-white/30 uppercase tracking-wider mb-4'>
              {title}
            </p>
            <div className='flex flex-col gap-2.5'>
              {links.map((l) => {
                const isExternal = l.href.startsWith("http");
                return isExternal ? (
                  <a
                    key={l.label}
                    href={l.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[13px] text-white/50 hover:text-white hover:underline hover:underline-offset-4 transition-colors'>
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className='text-[13px] text-white/50 hover:text-white hover:underline hover:underline-offset-4 transition-colors'>
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className='md:text-right'>
          <Link
            href='/contact'
            className='text-[12px] font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors font-mono'>
            Talk to us →
          </Link>
        </div>
      </div>
    </div>

    <div className='mx-auto px-12.5 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
      <div className='flex items-center gap-2'>
        <div className='w-7 h-7 rounded-full bg-white/10 flex items-center justify-center'>
          <span className='text-[10px] font-bold text-white/60'>H</span>
        </div>
        <span className='text-[13px] font-semibold text-white/60'>Zentura</span>
      </div>
      <p className='text-[11px] text-white/30'>
        © 2026 Zentura. All rights reserved.
      </p>
      <div className='flex gap-5'>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/30 hover:text-white transition-colors'
          aria-label='Facebook'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
          </svg>
        </a>
        <a
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/30 hover:text-white transition-colors'
          aria-label='LinkedIn'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
          </svg>
        </a>
        <a
          href='https://behance.net'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/30 hover:text-white transition-colors'
          aria-label='Behance'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.95.25H0v-14.76h6.938zm-.71 5.87c.55 0 1.01-.15 1.36-.45.348-.3.517-.733.517-1.28 0-.32-.06-.58-.18-.79-.12-.21-.27-.38-.47-.5-.2-.12-.42-.2-.67-.24-.25-.04-.5-.06-.77-.06H3.41v3.32h2.817zm.19 6.12c.28 0 .56-.03.83-.08.27-.05.51-.14.72-.27.21-.13.38-.31.51-.55.13-.24.19-.55.19-.93 0-.74-.21-1.27-.62-1.58-.41-.31-.96-.47-1.63-.47H3.41v3.89h2.997zm8.89-2.08c.37.42.92.63 1.65.63.52 0 .97-.13 1.36-.4.38-.27.62-.56.71-.87h2.35c-.37 1.15-.93 1.98-1.66 2.49-.74.51-1.63.77-2.7.77-.73 0-1.39-.12-1.98-.37-.59-.25-1.09-.6-1.51-1.05-.42-.45-.74-1-.97-1.63-.23-.63-.35-1.33-.35-2.09 0-.73.12-1.41.35-2.04.24-.63.57-1.17 1-1.62.43-.45.94-.81 1.53-1.07.59-.26 1.24-.39 1.95-.39.82 0 1.53.17 2.12.5.59.34 1.08.79 1.46 1.36.38.57.65 1.22.82 1.96.17.74.22 1.52.14 2.33h-7.02c.04.87.34 1.56.71 1.98zm2.89-4.38c-.3-.37-.77-.56-1.4-.56-.41 0-.75.07-1.02.22-.27.14-.49.33-.64.55-.15.22-.26.46-.32.72-.06.26-.1.5-.12.73h4.18c-.11-.75-.38-1.29-.68-1.66zM19.25 4.52h-5.75v1.52h5.75V4.52z' />
          </svg>
        </a>
        <a
          href='https://dribbble.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white/30 hover:text-white transition-colors'
          aria-label='Dribbble'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='currentColor'>
            <path d='M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702C16.86 2.61 14.545 1.62 12 1.62c-.8 0-1.59.1-2.4.285v.146zM19.74 5.28c-.218.29-1.905 2.478-5.69 4.012.228.47.448.948.65 1.43.07.17.14.34.2.51 3.39-.425 6.75.26 7.09.338-.02-2.39-.88-4.59-2.25-6.29z' />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
