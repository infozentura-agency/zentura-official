import AllBlogs from "@/components/pages/blog/AllBlogs";
import Featured from "@/components/pages/blog/Featured";
import Hero from "@/components/pages/blog/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — The Horizon Journal",
  description:
    "Thoughts on product design, engineering, strategy, and building in public from the Zentura team.",
  openGraph: {
    title: "The Horizon Journal | Zentura",
    description: "Thoughts on product design, engineering, and strategy.",
    url: "https://zentura.studio/blog",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Featured */}
      <Featured />

      {/* All posts */}
      <AllBlogs />
    </>
  );
}
