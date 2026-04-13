import illustrationBlog1 from "@/assets/illustration-blog-1.png";
import illustrationBlog2 from "@/assets/illustration-blog-2.png";
import illustrationBlog3 from "@/assets/illustration-blog-3.png";
import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import Link from "next/link";

const allPosts = [
  {
    slug: "design-systems-at-scale",
    title: "Design Systems at Scale",
    category: "Design",
    readTime: "6 min",
  },
  {
    slug: "why-we-dont-use-sprints",
    title: "Why We Don't Use Sprints",
    category: "Process",
    readTime: "5 min",
  },
  {
    slug: "building-for-early-stage",
    title: "Building for Early-Stage Startups",
    category: "Strategy",
    readTime: "7 min",
  },
  {
    slug: "typography-matters",
    title: "Typography Matters More Than You Think",
    category: "Design",
    readTime: "4 min",
  },
  {
    slug: "full-stack-small-team",
    title: "Full-Stack With a Small Team",
    category: "Engineering",
    readTime: "5 min",
  },
  {
    slug: "saying-no-to-clients",
    title: "Saying No to Clients",
    category: "Culture",
    readTime: "4 min",
  },
];

const illustrations = [
  illustrationBlog1,
  illustrationBlog2,
  illustrationBlog3,
  illustrationBlog1,
  illustrationBlog2,
  illustrationBlog3,
];

export default function AllBlogs() {
  return (
    <>
      {/* All posts */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Reveal className='mb-8'>
            <h2 className='font-serif text-[22px] text-foreground'>
              All posts
            </h2>
          </Reveal>
          <StaggerContainer>
            {allPosts.map((p, i) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className='list-row group flex items-center justify-between py-5 border-t border-border gap-4'>
                  <div className='flex items-center gap-5'>
                    <div className='w-12 h-12 shrink-0 overflow-hidden'>
                      <img
                        src={illustrations[i % illustrations.length].src}
                        alt=''
                        className='w-full h-full object-contain'
                      />
                    </div>
                    <h3 className='text-[15px] font-medium text-foreground group-hover:text-muted-foreground transition-colors'>
                      {p.title}
                    </h3>
                  </div>
                  <div className='flex items-center gap-4 shrink-0'>
                    <span className='text-[11px] font-mono text-muted-foreground uppercase hidden md:block'>
                      {p.category}
                    </span>
                    <span className='text-[11px] font-mono text-muted-foreground'>
                      {p.readTime}
                    </span>
                    <span className='text-foreground group-hover:translate-x-1 transition-transform'>
                      →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
