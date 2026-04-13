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
  },
  {
    slug: "evwork",
    name: "EVwork Platform",
    category: "UI/UX Design",
    year: "2025",
  },
  {
    slug: "ecommerce-app",
    name: "E-Commerce Mobile App",
    category: "Design + Dev",
    year: "2024",
  },
];

export default function SelectedWorks() {
  return (
    <>
      {/* SELECTED WORK */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Reveal className='flex items-end justify-between mb-2'>
            <h2 className='font-serif text-[28px] md:text-[36px] text-foreground'>
              Selected <span className='italic'>projects</span>
            </h2>
            <Link
              href='/work'
              className='text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider'>
              View all →
            </Link>
          </Reveal>

          <StaggerContainer>
            {projects.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  className='list-row group flex items-center justify-between py-5 border-t border-border'>
                  <div className='flex items-center gap-6'>
                    <span className='text-[12px] font-mono text-muted-foreground'>
                      {p.year}
                    </span>
                    <span className='text-[16px] font-medium text-foreground group-hover:text-muted-foreground transition-colors'>
                      {p.name}
                    </span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span className='text-[12px] font-mono text-muted-foreground hidden md:block'>
                      {p.category}
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
