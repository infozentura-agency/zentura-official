import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import Link from "next/link";

const projects = [
  {
    slug: "branch-management",
    name: "Branch Management System",
    category: "Product Design",
    year: "2025",
    desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations.",
  },
  {
    slug: "evwork",
    name: "EVwork Platform",
    category: "UI/UX Design",
    year: "2025",
    desc: "Workforce management platform for the EV industry.",
  },
  {
    slug: "ecommerce-app",
    name: "E-Commerce Mobile App",
    category: "Design + Development",
    year: "2024",
    desc: "Full-stack mobile commerce experience for a fashion brand.",
  },
  {
    slug: "project-alpha",
    name: "Project Alpha",
    category: "Design + Development",
    year: "2026",
    desc: "A stealth project currently in development.",
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    category: "Development",
    year: "2026",
    desc: "Full-stack platform build for an early-stage startup.",
  },
];

export default function ProjectList() {
  return (
    <>
      {/* Projects list */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Reveal className='mb-8'>
            <h2 className='font-serif text-[28px] md:text-[36px] text-foreground'>
              Selected <span className='italic'>projects</span>
            </h2>
          </Reveal>
          <StaggerContainer>
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className='list-row group grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_180px_80px] items-start gap-4 py-6 border-t border-border'>
                  <span className='text-[12px] font-mono text-muted-foreground pt-0.5'>
                    {p.year}
                  </span>
                  <div>
                    <h3 className='text-[16px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors'>
                      {p.name}
                    </h3>
                    <p className='text-[13px] text-muted-foreground mt-1 leading-relaxed hidden md:block'>
                      {p.desc}
                    </p>
                  </div>
                  <span className='text-[12px] font-mono text-muted-foreground hidden md:block'>
                    {p.category}
                  </span>
                  <span className='text-foreground group-hover:translate-x-1 transition-transform text-right'>
                    →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
