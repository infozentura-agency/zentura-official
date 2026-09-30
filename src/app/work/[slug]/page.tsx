import { EditorialDetail } from "@/components/zentura/EditorialDetail";
import { projects } from "@/content/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.title ?? "Project"} — Zentura`,
    description: `${project?.title ?? "A product project"} by Zentura.`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <EditorialDetail project={project} intro="Product clarity through one operating system" body={project.status === "concept" ? "An interface exploration focused on turning complex information into useful decisions." : "A selected Zentura engagement shaped around the client's operating reality."} />;
}
