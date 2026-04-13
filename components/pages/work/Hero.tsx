import illustrationAbout from "@/assets/illustration-about.png";
import { MotionWrapper, spring } from "@/components/shared/motion";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className='pt-18 border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='px-12.5 py-20 md:py-28'>
            <MotionWrapper
              tag='p'
              className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}>
              All Offerings
            </MotionWrapper>
            <MotionWrapper
              tag='h1'
              className='font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06]'
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring.gentle, delay: 0.15 }}>
              Here&apos;s what we <span className='italic'>do</span>
            </MotionWrapper>
          </div>
          <MotionWrapper
            className='border-l border-border hidden md:flex items-end justify-center px-12.5 pb-0'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring.gentle, delay: 0.3 }}>
            <img
              src={illustrationAbout.src}
              alt='Architecture illustration'
              className='w-full max-w-[280px] h-auto object-contain'
            />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
