import Hero from "@/components/pages/work/Hero";
import ProjectList from "@/components/pages/work/ProjectList";
import ServicesAndStrategies from "@/components/pages/work/ServicesAndStrategies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore our selected projects — product design, UI/UX, full-stack development, branding, and product strategy.",
  openGraph: {
    title: "Work | Zentura",
    description: "Explore our selected projects.",
    url: "https://zentura.studio/work",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services & Strategies */}
      <ServicesAndStrategies />

      {/* Projects list */}
      <ProjectList />
    </>
  );
}
