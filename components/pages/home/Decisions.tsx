import {
  HoverLift,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

const decisions = [
  {
    title: "You're building your first product →",
    desc: "First-time founders need a partner who can translate vision into a shippable product — without burning through runway.",
  },
  {
    title: "Your product needs a redesign →",
    desc: "Existing products that have outgrown their original design need a strategic rethink, not just a reskin.",
  },
  {
    title: "You need to ship faster →",
    desc: "Scaling teams need design and engineering support that integrates seamlessly with their existing workflows.",
  },
];

export default function Decisions() {
  return (
    <>
      {/* DECISIONS */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Reveal>
            <h2 className='font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1] mb-2'>
              We work best when{" "}
              <span className='italic'>the stakes are high</span>
            </h2>
          </Reveal>
          <StaggerContainer className='grid grid-cols-1 md:grid-cols-3 border-t border-border mt-8'>
            {decisions.map((d, i) => (
              <StaggerItem key={i}>
                <HoverLift className='px-12.5 py-8 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0 h-full'>
                  <h3 className='text-[16px] font-semibold text-foreground mb-3 leading-snug'>
                    {d.title}
                  </h3>
                  <p className='text-[13px] text-muted-foreground leading-relaxed'>
                    {d.desc}
                  </p>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
