import teamGroup1 from "@/assets/team-group-1.jpg";
import { MotionWrapper, Reveal } from "@/components/shared/motion";

export default function Bento() {
  return (
    <>
      {/* BENTO — show our work */}
      <section className='border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          <Reveal className='px-12.5 py-16 md:py-20 flex flex-col justify-center border-r border-border'>
            <h2 className='font-serif text-[28px] md:text-[36px] text-foreground leading-[1.12]'>
              Let us <span className='italic'>show you</span> our best work
            </h2>
            <p className='text-[14px] text-muted-foreground mt-4 max-w-95 leading-relaxed'>
              Every project gets our full attention. We don&apos;t scale — we
              focus.
            </p>
          </Reveal>
          <MotionWrapper
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}>
            <img
              src={teamGroup1.src}
              alt='Our team at work'
              className='w-full h-full object-cover aspect-[4/3]'
            />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
