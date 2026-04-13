import cta from "@/assets/team-group-4.jpg";
import {
  MagneticButton,
  MotionWrapper,
  Reveal,
} from "@/components/shared/motion";
import Link from "next/link";

export default function CTA() {
  return (
    <>
      <section className='border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          <Reveal className='px-12.5 py-16 md:py-20 border-r border-border'>
            <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3'>
              Apply to join our team
            </p>
            <p className='text-[14px] text-muted-foreground max-w-90 leading-relaxed mb-6'>
              We&apos;re always looking for talented people who care about
              craft.
            </p>
            <MagneticButton className='inline-flex'>
              <Link
                href='/careers'
                className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex'>
                View careers →
              </Link>
            </MagneticButton>
          </Reveal>
          <MotionWrapper
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}>
            <img
              src={cta.src}
              alt='Our team at work'
              className='w-full h-full object-cover aspect-4/3'
            />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
