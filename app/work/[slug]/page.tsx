import ProjectDetailPage from "@/components/pages/work/ProjectDetailPage";
import type { Metadata } from "next";

const projectsData: Record<
  string,
  { name: string; category: string; desc: string }
> = {
  "branch-management": {
    name: "Branch Management System",
    category: "Product Design",
    desc: "End-to-end product design for a multi-branch operations platform serving 200+ locations.",
  },
  evwork: {
    name: "EVwork Platform",
    category: "UI/UX Design",
    desc: "Workforce management platform for the EV industry.",
  },
  "ecommerce-app": {
    name: "E-Commerce Mobile App",
    category: "Design + Development",
    desc: "Full-stack mobile commerce experience for a direct-to-consumer fashion brand.",
  },
  "project-alpha": {
    name: "Project Alpha",
    category: "Design + Development",
    desc: "A stealth project currently in development.",
  },
  "project-beta": {
    name: "Project Beta",
    category: "Development",
    desc: "Full-stack platform build for an early-stage startup.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.desc,
    openGraph: {
      title: `${project.name} | Zentura`,
      description: project.desc,
      url: `https://zentura.studio/work/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
