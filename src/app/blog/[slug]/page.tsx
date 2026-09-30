import Link from "next/link";
import { articles } from "@/content/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  const title = article?.title ?? "Blog"; 
  const description = article?.summary ?? "A note from Zentura."; 
  const url = `https://zentura.agency/blog/${slug}`; 
  return { 
    title: `${title} — Zentura`, 
    description,
    openGraph: { title: `${title} — Zentura`, description, type: "article", url },
    twitter: { card: "summary_large_image" }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);
  if (!article) notFound();
  return <article className="pb-24"><div className="mb-10 min-[720px]:hidden"><Link href="/blog" className="font-mono text-label uppercase text-ink underline underline-offset-3">Back to Blog</Link><p className="mt-8 font-mono text-label text-ink-muted">SUMMARY</p><p className="mt-1 text-small text-ink">{article.summary}</p><p className="mt-6 font-mono text-label text-ink-muted">TOPICS</p><p className="mt-1 text-small text-ink">{article.topics.join(" · ")}</p><nav className="mt-6"><p className="font-mono text-label text-ink-muted">IN THIS ARTICLE</p>{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`} className="mt-1 block text-small text-ink-secondary">{section.heading}</a>)}</nav></div><div className="max-w-126.5"><p className="font-mono text-label text-ink-muted">BLOG / {article.date}</p><h1 className="mt-4 text-editorial text-ink">{article.title}</h1><p className="mt-4 text-body text-ink-secondary">{article.summary}</p><div className="mt-12">{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading} className="scroll-mt-20 border-t border-border py-8"><h2 className="text-editorial text-ink">{section.heading}</h2><div className="mt-5 space-y-4 text-body text-ink-secondary">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div><Link href="/blog" className="mt-8 inline-block font-mono text-label uppercase text-ink underline underline-offset-3">Back to Blog</Link></div></article>;
}
