import Link from "next/link";

import { EditorialText, ImageReveal, MediaFrame, MetaTable } from "./blocks";
import type { Project } from "@/content/site";

export function EditorialDetail({ project, intro, body }: { project: Project; intro: string; body: string }) {
  const isConcept = project.status === "concept";
  return (
    <article className="pb-24">
      <Link href="/work" className="mb-8 inline-flex items-center gap-2 font-mono text-label uppercase text-ink-muted transition-colors hover:text-ink">
        <span>←</span> Back to Work
      </Link>
      
      <p className="mb-4 font-mono text-label text-ink-muted">INDEX / {project.title.toUpperCase()}</p>
      
      <ImageReveal immediate>
        <MediaFrame 
          src={project.image} 
          sizes="(min-width: 1180px) 1026px, 100vw" 
          alt={project.imageAlt} 
          width={project.width} 
          height={project.height} 
          aspect="natural" 
          eager 
        />
      </ImageReveal>
      
      <EditorialText heading={intro} primary>
        <p>{body}</p>
        <p className="mt-4">{isConcept ? "This is a self-initiated concept, not commissioned client work." : "Design and engineering remained in one loop so product intent stayed attached to implementation."}</p>
      </EditorialText>
      
      <div className="mb-10 min-[720px]:hidden">
        <MetaTable 
          rows={[
            { label: "ROLE", value: "Product design · Engineering" },
            { label: "SCOPE", value: "Strategy · Product · Systems" },
            { label: "PROJECT", value: `${project.title} · ${project.year}` }
          ]} 
        />
      </div>
      
      <div className="grid items-start gap-4 md:grid-cols-2">
        <div className="space-y-6">
          <ImageReveal>
            <MediaFrame src={project.image} alt={`${project.title} product glimpse`} width={project.width} height={project.height} aspect={project.aspect === "device" ? "device" : "product"} />
          </ImageReveal>
          <div className="space-y-4 text-body text-ink-secondary">
            <h3 className="font-mono text-label uppercase text-ink-muted">The Challenge</h3>
            <p>{project.description}</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <ImageReveal>
            <MediaFrame src={project.image} alt={`${project.title} interface detail`} width={project.width} height={project.height} aspect={project.aspect === "device" ? "product" : "device"} />
          </ImageReveal>
          <div className="space-y-4 pt-2 text-body text-ink-secondary">
            <h3 className="font-mono text-label uppercase text-ink-muted">The Approach</h3>
            <p>We start by identifying the core operating decisions that the interface must support. By keeping design and engineering in a single loop, we ensure that every interaction is backed by technical reality and every line of code serves the product intent.</p>
          </div>
        </div>
      </div>
      
      <EditorialText heading="One system, built around the work">
        <p>The product direction is shaped around the operating reality, the people using it, and the decisions the interface needs to support. Flows, states, permissions, and implementation constraints are reviewed as parts of the same system.</p>
        <p>{isConcept ? "The concept tests hierarchy, interaction, and system behavior without presenting the work as a shipped client outcome." : "Published metrics, client testimony, and further project evidence are omitted until they are confirmed for public use."}</p>
      </EditorialText>
      <Link href="/work" className="mt-8 inline-block font-mono text-label uppercase text-ink underline underline-offset-3">Back to Work</Link>
    </article>
  );
}
