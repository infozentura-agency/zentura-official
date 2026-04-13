import { MotionWrapper, spring } from "@/components/shared/motion";
import Link from "next/link";

const postsData: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    author: string;
    readTime: string;
    content: string[];
  }
> = {
  "design-systems-at-scale": {
    title: "Design Systems at Scale",
    category: "Design",
    date: "Mar 5, 2026",
    author: "Saad R.",
    readTime: "6 min read",
    content: [
      "Design systems are often treated as a purely visual exercise — a collection of components and style tokens. But at scale, they become the backbone of how your entire organization makes decisions.",
      "We've spent the last two years building and maintaining design systems for companies ranging from 5-person startups to 200+ person organizations. Here's what we've learned.",
      "The biggest mistake teams make is treating the design system as a product deliverable rather than a living practice. A design system that isn't actively maintained becomes a liability, not an asset.",
      "The most successful design systems we've worked with have one thing in common: they have a clear owner. Not a team — a person. Someone who wakes up every morning thinking about component APIs and token naming conventions.",
      "Start with decisions, not components. Before you build a button component, decide how your team makes decisions. Who can change the system? How are changes proposed? What's the review process?",
    ],
  },
  "why-we-dont-use-sprints": {
    title: "Why We Don't Use Sprints",
    category: "Process",
    date: "Feb 28, 2026",
    author: "Joy S.",
    readTime: "5 min read",
    content: [
      "Sprints made sense when software development was unpredictable and requirements changed weekly. For most of the product work we do, they introduce more overhead than value.",
      "Instead, we work in continuous flow with weekly checkpoints. Every Friday, we ship something the client can see and respond to. Every Monday, we recalibrate based on what we learned.",
      "The goal isn't to fill a sprint — it's to make progress that matters. That distinction sounds subtle but changes everything about how you prioritize and execute.",
    ],
  },
  "building-for-early-stage": {
    title: "Building for Early-Stage Startups",
    category: "Strategy",
    date: "Feb 15, 2026",
    author: "Saad R.",
    readTime: "7 min read",
    content: [
      "Early-stage startups have a fundamentally different product problem than growth-stage companies. They're not optimizing — they're searching.",
      "Searching for product-market fit means building things quickly, learning from them, and being willing to throw them away. That requires a different kind of design and engineering partner.",
      "We've worked with dozens of early-stage startups and we've noticed a pattern: the ones that succeed treat design and engineering as a continuous conversation, not sequential phases.",
    ],
  },
  "typography-matters": {
    title: "Typography Matters More Than You Think",
    category: "Design",
    date: "Jan 20, 2026",
    author: "Maqibul T.",
    readTime: "4 min read",
    content: [
      "Most product designers treat typography as a visual decision. We treat it as a communication decision.",
      "The typeface you choose, the scale you establish, the line heights you set — these aren't aesthetic choices. They're architectural decisions that affect how information is perceived and processed.",
      "When we start a new project, we spend disproportionate time on type. Because getting type right means getting communication right.",
    ],
  },
  "full-stack-small-team": {
    title: "Full-Stack With a Small Team",
    category: "Engineering",
    date: "Jan 5, 2026",
    author: "Joy S.",
    readTime: "5 min read",
    content: [
      "Being a small team means making hard choices about what you build, what you buy, and what you skip entirely.",
      "Our engineering philosophy is ruthlessly pragmatic. We use boring technology that works. We avoid clever solutions that require explanation. We write code that the next person can understand.",
      "The best code is the code you don't write. Every line of code you write is a line you have to maintain.",
    ],
  },
  "saying-no-to-clients": {
    title: "Saying No to Clients",
    category: "Culture",
    date: "Dec 15, 2025",
    author: "Saad R.",
    readTime: "4 min read",
    content: [
      "We turn down about 60% of project inquiries. This isn't arrogance — it's quality control.",
      "If a project doesn't align with our expertise, our values, or our capacity to do excellent work, we say no.",
      "The result: every project we take on gets our full attention.",
    ],
  },
};

export default function BlogDetailPage({ slug }: { slug: string }) {
  const post = postsData[slug];

  if (!post) {
    return (
      <main className='min-h-screen bg-background'>
        <section className='pt-18 py-28 px-12.5 mx-auto text-center'>
          <h1 className='font-serif text-4xl text-foreground italic'>
            Post not found
          </h1>
          <Link
            href='/blog'
            className='text-muted-foreground mt-4 inline-block hover:text-foreground transition-colors'>
            ← Back to blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-background'>
      <article className='pt-18'>
        {/* Header */}
        <div className='border-b border-border'>
          <div className='max-w-[720px] mx-auto px-12.5 py-16 md:py-20'>
            <Link
              href='/blog'
              className='text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider mb-8 inline-block'>
              ← Back
            </Link>
            <div className='flex items-center gap-3 mb-4'>
              <span className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider'>
                {post.category}
              </span>
              <span className='text-muted-foreground/30'>·</span>
              <span className='text-[12px] text-muted-foreground'>
                {post.date}
              </span>
            </div>
            <MotionWrapper
              tag='h1'
              className='font-serif text-[36px] md:text-[44px] text-foreground leading-[1.1]'
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring.gentle, delay: 0.1 }}>
              {post.title}
            </MotionWrapper>
            <div className='flex items-center gap-3 mt-8'>
              <div className='w-9 h-9 rounded-full bg-muted' />
              <div>
                <span className='text-[13px] font-medium text-foreground'>
                  {post.author}
                </span>
                <span className='text-[12px] text-muted-foreground ml-2'>
                  · {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className='border-b border-border'>
          <div className='max-w-[720px] mx-auto'>
            <div className='aspect-[16/9] bg-muted' />
          </div>
        </div>

        {/* Content */}
        <div className='max-w-[720px] mx-auto px-12.5 py-12 md:py-16'>
          <div className='space-y-6'>
            {post.content.map((para, i) => (
              <p
                key={i}
                className='text-[16px] leading-[1.85] text-foreground/80'>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className='border-t border-border'>
          <div className='max-w-[720px] mx-auto px-12.5 py-8 flex items-center justify-between'>
            <Link
              href='/blog'
              className='text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider'>
              ← All posts
            </Link>
            <span className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider'>
              Share
            </span>
          </div>
        </div>
      </article>
    </main>
  );
}
