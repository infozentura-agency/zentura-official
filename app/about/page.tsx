import CTA from "@/components/pages/about/CTA";
import Hero from "@/components/pages/about/Hero";
import Mission from "@/components/pages/about/Mission";
import PhotoTriptych from "@/components/pages/about/PhotoTriptych";
import Stats from "@/components/pages/about/Stats";
import Team from "@/components/pages/about/team";
import Values from "@/components/pages/about/Values";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zentura is a design-first product studio. We build products for startups and growing companies — with craft, conviction, and transparency.",
  openGraph: {
    title: "About | Zentura",
    description: "Zentura is a design-first product studio.",
    url: "https://zentura.studio/about",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Mission */}
      <Mission />

      {/* Values */}
      <Values />

      {/* Photo Triptych */}
      <PhotoTriptych />

      {/* Team */}
      <Team />

      {/* CTA */}
      <CTA />
    </>
  );
}
