import illustrationBlog3 from "@/assets/illustration-blog-3.png";
import { MotionWrapper, spring } from "@/components/shared/motion";

export default function Hero() {
  return (
    <section className='pt-18 border-b border-border'>
      <div className='mx-auto px-12.5 py-16 md:py-20 flex items-center justify-between'>
        <MotionWrapper
          tag='h1'
          className='font-serif text-[48px] md:text-[64px] text-foreground leading-[1.06]'
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring.gentle }}>
          The Horizon
        </MotionWrapper>

        <MotionWrapper
          className='hidden md:block'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring.gentle, delay: 0.2 }}>
          <img
            src={illustrationBlog3.src}
            alt='Journal illustration'
            className='w-24 md:w-36 h-auto'
          />
        </MotionWrapper>

        <MotionWrapper
          tag='span'
          className='font-serif text-[48px] md:text-[64px] text-foreground leading-[1.06] italic'
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...spring.gentle, delay: 0.1 }}>
          Journal
        </MotionWrapper>
      </div>
    </section>
  );
}
