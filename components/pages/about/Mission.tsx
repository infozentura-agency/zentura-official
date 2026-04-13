import { Reveal } from "@/components/shared/motion";

export default function Mission() {
  return (
    <>
      {/* Mission */}
      <section className='border-b border-border'>
        <Reveal className='mx-auto px-12.5 py-16 md:py-20 max-w-200'>
          <h2 className='font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1]'>
            We exist to help founders make high-stakes product decisions with{" "}
            <span className='italic'>confidence.</span>
          </h2>
          <p className='text-[14px] text-muted-foreground mt-6 leading-relaxed'>
            Most agencies execute briefs. We partner with founders to define
            what should be built — and why. We bring strategic thinking, design
            craft, and engineering to the table as one integrated team.
          </p>
        </Reveal>
      </section>
    </>
  );
}
