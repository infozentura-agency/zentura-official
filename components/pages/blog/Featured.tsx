import illustrationBlog1 from "@/assets/illustration-blog-1.png";
import { MotionWrapper, Reveal } from "@/components/shared/motion";
import Link from "next/link";

const featured = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    date: "Mar 5, 2026",
    category: "Design",
  },
];

const recent = [
  {
    slug: "why-we-dont-use-sprints",
    title: "Why We Don't Use Sprints",
    date: "Feb 28, 2026",
    category: "Process",
  },
  {
    slug: "building-for-early-stage",
    title: "Building for Early-Stage Startups",
    date: "Feb 15, 2026",
    category: "Strategy",
  },
  {
    slug: "typography-matters",
    title: "Typography Matters More Than You Think",
    date: "Jan 20, 2026",
    category: "Design",
  },
];

export default function Featured() {
  return (
    <section className='border-b border-border'>
      <div className='mx-auto px-12.5 py-4'>
        <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
          Featured
        </p>
      </div>

      <div className='mx-auto border-t border-border'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr]'>
          <Reveal className='border-r border-border'>
            <Link
              href={`/blog/${featured[0].slug}`}
              className='group px-12.5 py-10 block'>
              {/* FIXED IMAGE */}
              <div className='aspect-4/3 bg-secondary/40 flex items-center justify-center mb-6 overflow-hidden'>
                <MotionWrapper
                  className='w-full h-full'
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                  <img
                    src={illustrationBlog1.src}
                    alt='Featured article'
                    className='w-full h-full object-contain p-8'
                  />
                </MotionWrapper>
              </div>

              <span className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                {featured[0].category}
              </span>

              <h2 className='font-serif text-[28px] md:text-[36px] text-foreground leading-[1.1] mt-2 group-hover:text-muted-foreground transition-colors'>
                {featured[0].title}
              </h2>

              <p className='text-[13px] text-muted-foreground mt-3'>
                {featured[0].date}
              </p>
            </Link>
          </Reveal>

          <div className='flex flex-col divide-y divide-border'>
            {recent.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className='group px-12.5 py-8 block flex-1'>
                  <span className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                    {p.category}
                  </span>

                  <h3 className='font-serif text-[20px] text-foreground leading-[1.2] mt-2 group-hover:text-muted-foreground transition-colors'>
                    {p.title}
                  </h3>

                  <p className='text-[12px] text-muted-foreground mt-2'>
                    {p.date}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
