"use client";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { Button } from "@/components/zentura/Button";
import { articles } from "@/content/site";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BlogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const q = searchParams.get("q") ?? "";
  const topic = searchParams.get("topic") ?? "";
  
  const topics = Array.from(new Set(articles.flatMap((article) => article.topics))).sort();
  const query = q.trim().toLowerCase().slice(0, 120);
  const safeTopic = topics.includes(topic) ? topic : "";
  const filtered = articles.filter((article) => {
    const searchable = [article.title, article.summary, ...article.topics, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(" ").toLowerCase();
    return (!query || searchable.includes(query)) && (!safeTopic || article.topics.includes(safeTopic));
  });
  
  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push(`/blog`);
  };

  return (
    <article className="pb-24">
      <header className="mb-8 grid gap-4 min-[720px]:grid-cols-2">
        <h1 className="text-editorial text-ink">Notes from the work.</h1>
        <p className="max-w-[48ch] text-body text-ink-secondary">Practical writing on product decisions, integrated teams, remote delivery, and the work behind a coherent release.</p>
      </header>
      <section aria-label="Filter articles" className="border-y border-border py-4">
        <label className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-border pb-3">
          <Search aria-hidden="true" size={14} className="text-ink-muted" />
          <span className="sr-only">Search articles</span>
          <input value={q} onChange={(event) => setParam("q", event.target.value)} placeholder="Search articles" className="min-w-0 bg-transparent text-body outline-none placeholder:text-ink-muted" />
          {q && <Button aria-label="Clear search" onClick={() => setParam("q", "")} className="size-7 p-0"><X size={12} /></Button>}
        </label>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <button onClick={() => setParam("topic", "")} className={`shrink-0 rounded-control px-3 py-1 font-mono text-label uppercase ${!safeTopic ? "bg-inverse text-ink-inverse" : "bg-surface-soft text-ink-secondary"}`}>All</button>
          {topics.map((item) => (
            <button key={item} onClick={() => setParam("topic", item)} className={`shrink-0 rounded-control px-3 py-1 font-mono text-label uppercase ${safeTopic === item ? "bg-inverse text-ink-inverse" : "bg-surface-soft text-ink-secondary"}`}>{item}</button>
          ))}
        </div>
      </section>
      <p className="py-4 font-mono text-label text-ink-muted">{filtered.length} {filtered.length === 1 ? "ARTICLE" : "ARTICLES"}</p>
      <div className="border-t border-border">
        {filtered.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="group grid min-h-24 grid-cols-[minmax(0,1fr)_auto] items-start gap-6 border-b border-border py-4 transition-colors duration-150 hover:bg-surface-soft max-sm:grid-cols-1 max-sm:gap-2">
            <div className="min-w-0">
              <h2 className="text-body text-ink">{article.title}</h2>
              <p className="mt-0.5 max-w-[64ch] text-small text-ink-secondary">{article.summary}</p>
              <p className="mt-2 font-mono text-label uppercase text-ink-muted">{article.topics.join(" · ")}</p>
            </div>
            <time className="shrink-0 font-mono text-label text-ink-muted">{article.date}</time>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-body text-ink">No articles match this search.</p>
            <Button className="mt-4" onClick={clearFilters}>CLEAR FILTERS</Button>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <Suspense fallback={<div className="pb-24">Loading articles...</div>}>
      <BlogContent />
    </Suspense>
  );
}
