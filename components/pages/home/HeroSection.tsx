import heroIllustration from "@/assets/illustration-hero.png";
import {
  MagneticButton,
  MotionWrapper,
  spring,
} from "@/components/shared/motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section className='pt-18 border-b border-border'>
        <div className='mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] min-h-[calc(100vh-72px)]'>
            <div className='flex flex-col justify-end px-12.5 py-16 md:py-20'>
              <MotionWrapper
                tag='h1'
                className='font-serif text-[42px] md:text-[52px] lg:text-[60px] text-foreground leading-[1.06]'
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...spring.gentle, delay: 0.1 }}>
                The product studio for
                <br />
                high-stakes <span className='italic'>decisions</span>
              </MotionWrapper>
              <MotionWrapper
                tag='p'
                className='text-[15px] text-muted-foreground mt-6 max-w-100 leading-relaxed'
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.gentle, delay: 0.25 }}>
                We help founders navigate product strategy, design, and
                engineering — with a dedicated team and a proven process.
              </MotionWrapper>
              <MotionWrapper
                className='flex items-center gap-4 mt-8'
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring.gentle, delay: 0.35 }}>
                <MagneticButton className='inline-flex'>
                  <Link
                    href='/contact'
                    className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex'>
                    GET STARTED →
                  </Link>
                </MagneticButton>
                <Link
                  href='/work'
                  className='text-[13px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5'>
                  SEE WHY <span className='text-[10px]'>⓪</span>
                </Link>
              </MotionWrapper>
            </div>
            <MotionWrapper
              className='border-l border-border hidden md:flex items-end justify-center pb-0 overflow-hidden'
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...spring.gentle, delay: 0.2 }}>
              <img
                src={heroIllustration.src}
                alt='Zentura product studio illustration'
                className='w-full h-full object-cover'
              />
            </MotionWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
