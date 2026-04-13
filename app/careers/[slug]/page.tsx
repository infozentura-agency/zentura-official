import JobDetailPage from "@/components/pages/careers/JobDetailPage";
import type { Metadata } from "next";

const jobsData: Record<
  string,
  { title: string; type: string; location: string }
> = {
  "senior-product-designer": {
    title: "Senior Product Designer",
    type: "Full-time",
    location: "Remote / Dhaka",
  },
  "frontend-engineer": {
    title: "Frontend Engineer",
    type: "Full-time",
    location: "Remote",
  },
  "fullstack-developer": {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote / Dhaka",
  },
  "design-intern": {
    title: "Design Intern",
    type: "Internship",
    location: "Dhaka",
  },
};

export async function generateStaticParams() {
  return Object.keys(jobsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = jobsData[slug];
  if (!job) return { title: "Job Not Found" };
  return {
    title: job.title,
    description: `${job.title} — ${job.type} · ${job.location}. Join the Zentura team.`,
    openGraph: {
      title: `${job.title} | Zentura Careers`,
      description: `${job.type} · ${job.location}`,
      url: `https://zentura.studio/careers/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <JobDetailPage slug={slug} />;
}
