import { MotionWrapper, spring } from "@/components/shared/motion";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className='pt-18 border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          {/* Left — info */}
          <div className='px-12.5 py-20 md:py-28 border-r border-border'>
            <MotionWrapper
              tag='h1'
              className='font-serif text-[40px] md:text-[48px] text-foreground leading-[1.08]'
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring.gentle, delay: 0.1 }}>
              Let&apos;s build something <span className='italic'>great.</span>
            </MotionWrapper>
            <MotionWrapper
              tag='p'
              className='text-[14px] text-muted-foreground mt-5 max-w-90 leading-relaxed'
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.gentle, delay: 0.25 }}>
              Tell us about your project. We&apos;ll tell you honestly if
              we&apos;re the right team.
            </MotionWrapper>

            <MotionWrapper
              className='mt-12'
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring.gentle, delay: 0.35 }}>
              {[
                { label: "Email", value: "hello@zentura.agency" },
                { label: "Based in", value: "Dhaka, Bangladesh" },
                { label: "Available for", value: "Projects worldwide" },
              ].map((item) => (
                <div key={item.label} className='py-4 border-t border-border'>
                  <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-1'>
                    {item.label}
                  </p>
                  <p className='text-[15px] font-medium text-foreground'>
                    {item.value}
                  </p>
                </div>
              ))}
            </MotionWrapper>
          </div>

          {/* Right — form */}
          <MotionWrapper
            className='px-12.5 py-20 md:py-28'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring.gentle, delay: 0.2 }}>
            <ContactForm />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
