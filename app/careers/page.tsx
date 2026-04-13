import Hero from "@/components/pages/careers/Hero";
import OpenRoles from "@/components/pages/careers/OpenRoles";
import PhotoBento from "@/components/pages/careers/PhotoBento";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We're looking for talented people who hold themselves to the highest standard. Join Zentura — no bureaucracy, just meaningful work.",
  openGraph: {
    title: "Careers | Zentura",
    description: "Join Zentura — no bureaucracy, just meaningful work.",
    url: "https://zentura.studio/careers",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Photo bento */}
      <PhotoBento />

      {/* Open roles */}
      <OpenRoles />
    </>
  );
}
