import illustrationAbout from "@/assets/illustration-about.png";
import {
  MagneticButton,
  MotionWrapper,
  spring,
} from "@/components/shared/motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className='pt-18 border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr]'>
          <div className='px-12.5 py-20 md:py-28 flex flex-col justify-end'>
            <MotionWrapper
              tag='h1'
              className='font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06]'
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring.gentle, delay: 0.1 }}>
              Zentura is a design-first{" "}
              <span className='italic'>product studio</span>
            </MotionWrapper>
            <MotionWrapper
              tag='p'
              className='text-[14px] text-muted-foreground mt-5 max-w-105 leading-relaxed'
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.gentle, delay: 0.25 }}>
              We build products for startups and growing companies — with craft,
              conviction, and transparency.
            </MotionWrapper>
            <MotionWrapper
              className='mt-6'
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.gentle, delay: 0.35 }}>
              <MagneticButton className='inline-flex'>
                <Link
                  href='/contact'
                  className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex'>
                  Work with us →
                </Link>
              </MagneticButton>
            </MotionWrapper>
          </div>
          <MotionWrapper
            className='border-l border-border hidden md:flex items-end justify-center px-12.5 pb-0'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring.gentle, delay: 0.3 }}>
            <img
              src={illustrationAbout.src}
              alt='Zentura studio illustration'
              className='w-full max-w-[320px] h-auto object-contain'
            />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
