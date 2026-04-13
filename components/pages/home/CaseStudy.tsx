import caseImg from "@/assets/team-group-2.jpg";
import { MagneticButton, MotionWrapper } from "@/components/shared/motion";
import Link from "next/link";

export default function CaseStudy() {
  return (
    <>
      <section className='border-b border-border'>
        <div className='mx-auto'>
          <MotionWrapper
            className='grid grid-cols-1 md:grid-cols-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}>
            <div className='px-12.5 py-16 md:py-20 flex flex-col justify-center border-r border-border'>
              <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4'>
                Client Spotlight
              </p>
              <h2 className='font-serif text-[28px] md:text-[36px] text-foreground leading-[1.12]'>
                How we redesigned a fashion brand&apos;s{" "}
                <span className='italic'>mobile experience</span>
              </h2>
              <p className='text-[14px] text-muted-foreground mt-4 leading-relaxed max-w-100'>
                &ldquo;They understood our product from day one. The team was
                responsive, opinionated in the best way, and delivered something
                we&apos;re genuinely proud of.&rdquo;
              </p>
              <div className='flex items-center gap-3 mt-6'>
                <div className='w-10 h-10 rounded-full bg-muted' />
                <div>
                  <p className='text-[13px] font-semibold text-foreground'>
                    Sarah K.
                  </p>
                  <p className='text-[12px] text-muted-foreground'>
                    Founder, Fashion Startup
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 mt-10 border-t border-border'>
                <div className='py-4 pr-6 border-r border-border'>
                  <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                    Conversion
                  </p>
                  <p className='text-[28px] font-mono font-semibold text-foreground mt-1'>
                    +40%
                  </p>
                </div>
                <div className='py-4 pl-6'>
                  <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                    Timeline
                  </p>
                  <p className='text-[28px] font-mono font-semibold text-foreground mt-1'>
                    8 wks
                  </p>
                </div>
              </div>
              <MagneticButton className='inline-flex mt-6'>
                <Link
                  href='/work/ecommerce-app'
                  className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-2.5 rounded-full hover:bg-foreground/90 transition-colors inline-flex'>
                  Read case study →
                </Link>
              </MagneticButton>
            </div>

            <MotionWrapper
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}>
              <img
                src={caseImg.src}
                alt='Our team at work'
                className='w-full h-full object-cover aspect-4/3'
              />
            </MotionWrapper>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
