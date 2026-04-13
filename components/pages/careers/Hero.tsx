import illustrationCareers from "@/assets/illustration-careers.png";
import { MotionWrapper, Reveal, spring } from "@/components/shared/motion";

export default function Hero() {
  return (
    <>
      {/* Hero */}
      <section className='pt-18 border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr]'>
          <div className='px-12.5 py-20 md:py-28'>
            <MotionWrapper
              tag='h1'
              className='font-serif text-[42px] md:text-[52px] text-foreground leading-[1.06]'
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring.gentle, delay: 0.1 }}>
              Careers <span className='italic'>at Zentura</span>
            </MotionWrapper>
            <MotionWrapper
              tag='p'
              className='text-[14px] text-muted-foreground mt-4 max-w-115 leading-relaxed'
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.gentle, delay: 0.25 }}>
              We&apos;re looking for talented people who hold themselves to the
              highest standard. No bureaucracy — just meaningful work.
            </MotionWrapper>
          </div>
          <MotionWrapper
            className='border-l border-border hidden md:flex items-end justify-center px-12.5 pb-0'
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring.gentle, delay: 0.3 }}>
            <img
              src={illustrationCareers.src}
              alt='Eagle illustration'
              className='w-full max-w-55 h-auto object-contain'
            />
          </MotionWrapper>
        </div>
      </section>

      {/* Culture DNA */}
      <section className='border-b border-border'>
        <Reveal className='mx-auto px-12.5 py-16 md:py-20'>
          <h2 className='font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1] max-w-125'>
            Our DNA is defined by holding an uncompromisingly high bar for who
            we hire, and giving them wide latitude to make{" "}
            <span className='italic'>decisions.</span>
          </h2>
        </Reveal>
      </section>
    </>
  );
}
