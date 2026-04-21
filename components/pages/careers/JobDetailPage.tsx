import {
  MagneticButton,
  MotionWrapper,
  spring,
} from "@/components/shared/motion";
import Link from "next/link";

const jobsData: Record<
  string,
  {
    title: string;
    type: string;
    location: string;
    team: string;
    about: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave: string[];
  }
> = {
  "senior-product-designer": {
    title: "Senior Product Designer",
    type: "Full-time",
    location: "Remote / Dhaka",
    team: "Design",
    about:
      "We're looking for a Senior Product Designer who can own end-to-end design for client projects.",
    responsibilities: [
      "Lead product design for 1-2 client projects",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Build and maintain design systems",
      "Collaborate closely with developers",
    ],
    requirements: [
      "4+ years of product design experience",
      "Strong portfolio with end-to-end product thinking",
      "Proficiency in Figma",
      "Experience with startups",
      "Excellent communication",
    ],
    niceToHave: [
      "Frontend development experience",
      "Design systems at scale",
      "User research methodologies",
    ],
  },
  "frontend-engineer": {
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote",
    team: "Engineering",
    about:
      "We need a frontend engineer who cares about design quality as much as code quality.",
    responsibilities: [
      "Build responsive web apps with React and TypeScript",
      "Implement pixel-perfect UIs",
      "Write clean, maintainable code",
      "Optimize performance and accessibility",
      "Participate in code reviews",
    ],
    requirements: [
      "3+ years frontend experience",
      "React, TypeScript, modern CSS",
      "Eye for design",
      "Testing and CI/CD experience",
      "Good communication",
    ],
    niceToHave: [
      "Next.js experience",
      "Figma familiarity",
      "Animation libraries",
    ],
  },
  "fullstack-developer": {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Dhaka",
    team: "Engineering",
    about:
      "We're looking for a full-stack developer who can handle both frontend and backend.",
    responsibilities: [
      "Build full-stack apps with React, Node.js, PostgreSQL",
      "Design APIs and database schemas",
      "Deploy and maintain production apps",
      "Write technical documentation",
      "Mentor junior developers",
    ],
    requirements: [
      "4+ years full-stack experience",
      "React, Node.js, SQL",
      "Cloud platform experience",
      "Security best practices",
      "Strong problem-solving",
    ],
    niceToHave: [
      "Supabase or Firebase",
      "DevOps background",
      "Open source contributions",
    ],
  },
  "design-intern": {
    title: "Design Intern",
    type: "Internship",
    location: "Dhaka",
    team: "Design",
    about:
      "A 3-month internship for aspiring product designers working on real client projects.",
    responsibilities: [
      "Assist with UI design tasks",
      "Help maintain design systems",
      "Conduct competitive research",
      "Create design assets",
      "Participate in design critiques",
    ],
    requirements: [
      "Studying or recently graduated in design",
      "Basic Figma proficiency",
      "Interest in product design",
      "Willingness to learn",
      "Available 3+ months",
    ],
    niceToHave: [
      "Personal design projects",
      "HTML/CSS knowledge",
      "Design systems interest",
    ],
  },
};

export default function JobDetailPage({ slug }: { slug: string }) {
  const job = jobsData[slug];

  if (!job) {
    return (
      <main className='min-h-screen bg-background'>
        <section className='pt-18 py-28 px-12.5 mx-auto text-center'>
          <h1 className='font-serif text-4xl text-foreground italic'>
            Job not found
          </h1>
          <Link
            href='/careers'
            className='text-muted-foreground mt-4 inline-block hover:text-foreground transition-colors'>
            ← Back to careers
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-background'>
      {/* Header */}
      <section className='pt-18 border-b border-border'>
        <div className='max-w-[800px] mx-auto px-12.5 py-16 md:py-20'>
          <Link
            href='/careers'
            className='text-[12px] font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider mb-8 inline-block'>
            ← All roles
          </Link>
          <p className='text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3'>
            {job.team} · {job.type}
          </p>
          <MotionWrapper
            tag='h1'
            className='font-serif text-[36px] md:text-[48px] text-foreground leading-[1.06]'
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ ...spring.gentle, delay: 0.1 }}>
            {job.title}
          </MotionWrapper>
          <p className='text-[14px] text-muted-foreground mt-2'>
            {job.location}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className='border-b border-border'>
        <div className='max-w-[800px] mx-auto px-12.5 py-12 md:py-16 space-y-12'>
          <div>
            <h2 className='font-serif text-[22px] text-foreground mb-4'>
              About the role
            </h2>
            <p className='text-[15px] text-muted-foreground leading-relaxed'>
              {job.about}
            </p>
          </div>

          <div>
            <h2 className='font-serif text-[22px] text-foreground mb-4'>
              Responsibilities
            </h2>
            <ul className='space-y-3'>
              {job.responsibilities.map((r) => (
                <li
                  key={r}
                  className='flex items-start gap-3 text-[14px] text-muted-foreground'>
                  <span className='text-foreground mt-0.5'>—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='font-serif text-[22px] text-foreground mb-4'>
              Requirements
            </h2>
            <ul className='space-y-3'>
              {job.requirements.map((r) => (
                <li
                  key={r}
                  className='flex items-start gap-3 text-[14px] text-muted-foreground'>
                  <span className='text-foreground mt-0.5'>—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='font-serif text-[22px] text-foreground mb-4'>
              Nice to have
            </h2>
            <ul className='space-y-3'>
              {job.niceToHave.map((r) => (
                <li
                  key={r}
                  className='flex items-start gap-3 text-[14px] text-muted-foreground'>
                  <span className='text-foreground mt-0.5'>—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className='border-t border-border pt-10'>
            <h2 className='font-serif text-[22px] text-foreground mb-4'>
              Apply
            </h2>
            <p className='text-[14px] text-muted-foreground mb-6'>
              Send your portfolio and a brief introduction to{" "}
              <a
                href={`mailto:${process.env.EMAIL_USER}`}
                className='text-foreground hover:underline'>
                {process.env.EMAIL_USER}
              </a>
            </p>
            <MagneticButton className='inline-flex'>
              <a
                href={`mailto:${process.env.EMAIL_USER}`}
                className='text-[12px] font-semibold uppercase tracking-wider bg-foreground text-primary-foreground px-6 py-3 rounded-full hover:bg-foreground/90 transition-colors inline-flex'>
                Apply for this role →
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </main>
  );
}
