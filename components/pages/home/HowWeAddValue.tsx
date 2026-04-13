import {
  MagneticButton,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import Link from "next/link";

const howSteps = [
  {
    num: "1",
    title: "See what's at stake",
    desc: "We map your product landscape, users, and constraints before proposing anything.",
  },
  {
    num: "2",
    title: "Work from first principles",
    desc: "We prototype and test ideas with real users before committing to code.",
  },
  {
    num: "3",
    title: "Move with conviction",
    desc: "We ship production-grade code incrementally — with full visibility every week.",
  },
];

export default function HowWeAddValue() {
  return (
    <>
      {/* HOW WE ADD VALUE */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Reveal>
            <h2 className='font-serif text-[32px] md:text-[40px] text-foreground leading-[1.1] mb-4'>
              How we add value
            </h2>
          </Reveal>
          <StaggerContainer className='mt-10'>
            {howSteps.map((step, i) => (
              <StaggerItem key={i}>
                <div className='grid grid-cols-[32px_1fr] md:grid-cols-[48px_200px_1fr] gap-4 md:gap-6 py-6 border-t border-border'>
                  <span className='text-[14px] font-mono text-muted-foreground self-start mt-0.5'>
                    {step.num}
                  </span>
                  <h3 className='text-[16px] font-semibold text-foreground'>
                    {step.title}
                  </h3>
                  <p className='text-[13px] text-muted-foreground leading-relaxed col-start-2 md:col-start-3'>
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal className='mt-6 pt-6 border-t border-border' delay={0.2}>
            <MagneticButton className='inline-flex'>
              <Link
                href='/about'
                className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex'>
                Learn more →
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
