import Bento from "@/components/pages/home/Bento";
import CaseStudy from "@/components/pages/home/CaseStudy";
import Decisions from "@/components/pages/home/Decisions";
import HeroSection from "@/components/pages/home/HeroSection";
import HowWeAddValue from "@/components/pages/home/HowWeAddValue";
import SelectedWorks from "@/components/pages/home/SelectedWorks";
import Stats from "@/components/pages/home/Stats";
import Team from "@/components/pages/home/Team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Product Studio for High-Stakes Decisions",
  description:
    "We help founders navigate product strategy, design, and engineering — with a dedicated team and a proven process.",
  openGraph: {
    title: "Zentura — The Product Studio for High-Stakes Decisions",
    description:
      "We help founders navigate product strategy, design, and engineering.",
    url: "https://zentura.studio",
  },
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* Stats */}
      <Stats />

      {/* DECISIONS */}
      <Decisions />

      {/* HOW WE ADD VALUE */}
      <HowWeAddValue />

      {/* BENTO — show our work */}
      <Bento />

      {/* Selected Works */}
      <SelectedWorks />

      {/* TEAM */}
      <Team />

      {/* Case Study */}
      <CaseStudy />
    </>
  );
}
