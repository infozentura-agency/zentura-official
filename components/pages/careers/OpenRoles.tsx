import {
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";
import Link from "next/link";

const departments: {
  name: string;
  jobs: { slug: string; title: string; location: string; type: string }[];
}[] = [
  {
    name: "Design",
    jobs: [
      {
        slug: "senior-product-designer",
        title: "Senior Product Designer",
        location: "Remote / Dhaka",
        type: "Full-time",
      },
      {
        slug: "design-intern",
        title: "Design Intern",
        location: "Dhaka",
        type: "Internship",
      },
    ],
  },
  {
    name: "Engineering",
    jobs: [
      {
        slug: "frontend-engineer",
        title: "Frontend Engineer",
        location: "Remote",
        type: "Full-time",
      },
      {
        slug: "fullstack-developer",
        title: "Full-Stack Developer",
        location: "Remote / Dhaka",
        type: "Full-time",
      },
    ],
  },
];

export default function OpenRoles() {
  return (
    <>
      {/* Open roles */}
      <section className='border-b border-border'>
        <div className='mx-auto px-12.5 py-16 md:py-20'>
          <Reveal className='mb-10'>
            <h2 className='font-serif text-[28px] md:text-[36px] text-foreground'>
              Open <span className='italic'>roles</span>
            </h2>
          </Reveal>

          {departments.map((dept) => (
            <div key={dept.name} className='mb-10'>
              <Reveal>
                <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-4'>
                  {dept.name}
                </p>
              </Reveal>
              <StaggerContainer>
                {dept.jobs.map((job) => (
                  <StaggerItem key={job.slug}>
                    <Link
                      href={`/careers/${job.slug}`}
                      className='list-row group flex items-center justify-between py-5 border-t border-border'>
                      <div>
                        <h3 className='text-[16px] font-semibold text-foreground group-hover:text-muted-foreground transition-colors'>
                          {job.title}
                        </h3>
                        <p className='text-[13px] text-muted-foreground mt-0.5'>
                          {job.location} · {job.type}
                        </p>
                      </div>
                      <span className='text-foreground group-hover:translate-x-1 transition-transform'>
                        →
                      </span>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
