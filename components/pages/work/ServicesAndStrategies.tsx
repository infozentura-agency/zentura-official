import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import Link from "next/link";

const services = [
  { title: "Product Design", href: "/work" },
  { title: "UI/UX Design", href: "/work" },
  { title: "Full-Stack Development", href: "/work" },
  { title: "Branding & Identity", href: "/work" },
  { title: "Product Strategy", href: "/work" },
];

const strategies = [
  { title: "Discovery & Research", href: "/work" },
  { title: "Prototyping & Testing", href: "/work" },
  { title: "Incremental Delivery", href: "/work" },
  { title: "Launch & Iteration", href: "/work" },
];

export default function ServicesAndStrategies() {
  return (
    <>
      {/* Services & Strategies */}
      <section className='border-b border-border'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='px-12.5 py-16 border-r border-border'>
            <Reveal>
              <h2 className='font-serif text-[22px] text-foreground mb-6'>
                Services we offer
              </h2>
            </Reveal>
            <StaggerContainer>
              {services.map((s) => (
                <StaggerItem key={s.title}>
                  <Link
                    href={s.href}
                    className='list-row group flex items-center justify-between py-4 border-t border-border'>
                    <span className='text-[15px] text-foreground group-hover:text-muted-foreground transition-colors'>
                      {s.title}
                    </span>
                    <span className='text-muted-foreground group-hover:translate-x-1 transition-transform text-sm'>
                      →
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <div className='px-12.5 py-16'>
            <Reveal>
              <h2 className='font-serif text-[22px] text-foreground mb-6'>
                How we work
              </h2>
            </Reveal>
            <StaggerContainer>
              {strategies.map((s) => (
                <StaggerItem key={s.title}>
                  <Link
                    href={s.href}
                    className='list-row group flex items-center justify-between py-4 border-t border-border'>
                    <span className='text-[15px] text-foreground group-hover:text-muted-foreground transition-colors'>
                      {s.title}
                    </span>
                    <span className='text-muted-foreground group-hover:translate-x-1 transition-transform text-sm'>
                      →
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
}
