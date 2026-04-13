import {
  MotionWrapper,
  spring,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import Link from "next/link";

const projectsData: Record<
  string,
  {
    name: string;
    category: string;
    year: string;
    desc: string;
    challenge: string;
    solution: string;
    result: string;
    tags: string[];
  }
> = {
  "branch-management": {
    name: "Branch Management System",
    category: "Product Design",
    year: "2025",
    desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations.",
    challenge:
      "The client needed to manage inventory, staff scheduling, and reporting across 200+ retail branches — but their existing tools were fragmented and manual.",
    solution:
      "We designed a unified dashboard with role-based views, real-time inventory sync, and automated reporting. Every screen was prototyped and tested with actual branch managers.",
    result:
      "50% reduction in manual reporting time. The platform now manages operations for 200+ branches with a team of 3 admins.",
    tags: ["Figma", "React", "Node.js", "PostgreSQL"],
  },
  evwork: {
    name: "EVwork Platform",
    category: "UI/UX Design",
    year: "2025",
    desc: "Workforce management platform for the EV industry.",
    challenge:
      "EV charging installation companies needed a way to manage field technicians, track certifications, and ensure compliance.",
    solution:
      "We built a clean, mobile-first platform with smart scheduling, certification tracking, and real-time job status updates.",
    result:
      "Adopted by 3 major EV installation companies within the first quarter of launch.",
    tags: ["Figma", "React Native", "Supabase"],
  },
  "ecommerce-app": {
    name: "E-Commerce Mobile App",
    category: "Design + Development",
    year: "2024",
    desc: "Full-stack mobile commerce experience for a direct-to-consumer fashion brand.",
    challenge:
      "A growing fashion brand needed a mobile app that could handle their catalog, personalized recommendations, and logistics integration.",
    solution:
      "We designed and built a React Native app with a custom recommendation engine, seamless checkout, and real-time order tracking.",
    result: "40% increase in mobile conversion rate within 3 months of launch.",
    tags: ["React Native", "TypeScript", "Stripe", "AWS"],
  },
  "project-alpha": {
    name: "Project Alpha",
    category: "Design + Development",
    year: "2026",
    desc: "A stealth project currently in development.",
    challenge: "Details under NDA.",
    solution: "Full design and development engagement.",
    result: "Launching Q3 2026.",
    tags: ["React", "TypeScript", "Supabase"],
  },
  "project-beta": {
    name: "Project Beta",
    category: "Development",
    year: "2026",
    desc: "Full-stack platform build for an early-stage startup.",
    challenge: "Details under NDA.",
    solution: "Full-stack development with modern tooling.",
    result: "Launching Q4 2026.",
    tags: ["Next.js", "PostgreSQL", "Vercel"],
  },
};

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projectsData[slug];

  if (!project) {
    return (
      <main className='min-h-screen bg-background'>
        <section className='pt-18 py-28 px-12.5 mx-auto text-center'>
          <h1 className='font-serif text-4xl text-foreground italic'>
            Project not found
          </h1>
          <Link
            href='/work'
            className='text-muted-foreground mt-4 inline-block hover:text-foreground transition-colors'>
            ← Back to work
          </Link>
        </section>
      </main>
    );
  }

  const allSlugs = Object.keys(projectsData);
  const nextSlug = allSlugs[(allSlugs.indexOf(slug) + 1) % allSlugs.length];
  const nextProject = projectsData[nextSlug];

  return (
    <main className='min-h-screen bg-background'>
      {/* Header */}
      <section className='pt-18 border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Link
            href='/work'
            className='text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider mb-8 inline-block'>
            ← All work
          </Link>
          <div className='flex flex-wrap items-start justify-between gap-6'>
            <div>
              <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3'>
                {project.category} · {project.year}
              </p>
              <MotionWrapper
                tag='h1'
                className='font-serif text-[36px] md:text-[48px] text-foreground leading-[1.06]'
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ ...spring.gentle, delay: 0.1 }}>
                {project.name}
              </MotionWrapper>
            </div>
            <div className='flex flex-wrap gap-2 mt-4'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-[11px] font-mono text-muted-foreground border border-border px-3 py-1 rounded-full'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className='text-[15px] text-muted-foreground mt-6 max-w-[580px] leading-relaxed'>
            {project.desc}
          </p>
        </div>
      </section>

      {/* Hero image placeholder */}
      <section className='border-b border-border'>
        <div className='mx-auto'>
          <div className='aspect-[16/7] bg-muted' />
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className='border-b border-border'>
        <div className='mx-auto'>
          <StaggerContainer className='grid grid-cols-1 md:grid-cols-3'>
            {[
              { label: "The Challenge", text: project.challenge },
              { label: "Our Solution", text: project.solution },
              { label: "The Result", text: project.result },
            ].map((block) => (
              <StaggerItem
                key={block.label}
                className='px-12.5 py-12 border-l border-border first:border-l-0'>
                <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4'>
                  {block.label}
                </p>
                <p className='text-[14px] leading-relaxed text-foreground/80'>
                  {block.text}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Gallery */}
      <section className='border-b border-border'>
        <div className='mx-auto'>
          <StaggerContainer className='grid grid-cols-1 md:grid-cols-2'>
            {[0, 1, 2, 3].map((n) => (
              <StaggerItem
                key={n}
                className='aspect-[4/3] bg-muted border border-border -mt-px -ml-px'
              />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Next project */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16'>
          <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4'>
            Next project
          </p>
          <Link
            href={`/work/${nextSlug}`}
            className='group flex items-center justify-between'>
            <h2 className='font-serif text-[28px] md:text-[36px] text-foreground group-hover:text-muted-foreground transition-colors'>
              {nextProject.name}
            </h2>
            <span className='text-foreground group-hover:translate-x-2 transition-transform text-xl'>
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
