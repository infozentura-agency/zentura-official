import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

const values = [
  {
    title: "Design before code",
    desc: "We design the complete experience before development begins.",
  },
  {
    title: "Understand before execute",
    desc: "We spend real time understanding your problem before proposing solutions.",
  },
  {
    title: "Communicate like partners",
    desc: "Full visibility, always. No black boxes.",
  },
  {
    title: "Say no when we should",
    desc: "We protect quality by being selective.",
  },
];

export default function Values() {
  return (
    <>
      {/* Values */}
      <section className='border-b border-border'>
        <div className='mx-auto'>
          <div className='px-12.5 py-12'>
            <Reveal>
              <h2 className='font-serif text-[22px] text-foreground mb-8'>
                How we work
              </h2>
            </Reveal>
          </div>
          <StaggerContainer className='grid grid-cols-1 md:grid-cols-2 border-t border-border'>
            {values.map((v) => (
              <StaggerItem
                key={v.title}
                className='px-12.5 py-10 border-b border-border md:border-r odd:md:border-r even:md:border-r-0 last:border-b-0'>
                <h3 className='text-[16px] font-semibold text-foreground mb-2'>
                  {v.title}
                </h3>
                <p className='text-[13px] text-muted-foreground leading-relaxed'>
                  {v.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
