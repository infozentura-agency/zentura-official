import BlogDetailPage from "@/components/pages/blog/BlogDetailPage";
import type { Metadata } from "next";

const postsData: Record<
  string,
  { title: string; category: string; date: string }
> = {
  "design-systems-at-scale": {
    title: "Design Systems at Scale",
    category: "Design",
    date: "Mar 5, 2026",
  },
  "why-we-dont-use-sprints": {
    title: "Why We Don't Use Sprints",
    category: "Process",
    date: "Feb 28, 2026",
  },
  "building-for-early-stage": {
    title: "Building for Early-Stage Startups",
    category: "Strategy",
    date: "Feb 15, 2026",
  },
  "typography-matters": {
    title: "Typography Matters More Than You Think",
    category: "Design",
    date: "Jan 20, 2026",
  },
  "full-stack-small-team": {
    title: "Full-Stack With a Small Team",
    category: "Engineering",
    date: "Jan 5, 2026",
  },
  "saying-no-to-clients": {
    title: "Saying No to Clients",
    category: "Culture",
    date: "Dec 15, 2025",
  },
};

export async function generateStaticParams() {
  return Object.keys(postsData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: `${post.category} · ${post.date} — Read on The Horizon Journal by Zentura.`,
    openGraph: {
      title: `${post.title} | Zentura`,
      description: `${post.category} · ${post.date}`,
      url: `https://zentura.studio/blog/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetailPage slug={slug} />;
}
