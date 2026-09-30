import Link from "next/link";

import { EmailButton } from "@/components/zentura/Button";



const services = [
  { label: "01 / PRODUCT REVIEW", value: "Find the decisions hiding behind the interface.", detail: "We examine the customer path, internal workflow, system constraints, and roadmap together, then turn the findings into a clear sequence of work." },
  { label: "02 / PRODUCT STRATEGY", value: "Shape the problem before shaping the surface.", detail: "We help teams frame opportunities, establish priorities, test assumptions, and connect product decisions to operating reality." },
  { label: "03 / PRODUCT DESIGN", value: "Design systems that remain coherent in use.", detail: "Flows, interface states, prototypes, and design systems are developed with the data and engineering constraints visible from the beginning." },
  { label: "04 / ENGINEERING", value: "Carry intent into reliable implementation.", detail: "Frontend and full-stack delivery stay connected to the product decisions, including edge cases, permissions, integrations, and release quality." },
  { label: "05 / PRODUCT PARTNERSHIP", value: "A formed team that stays through what ships.", detail: "For ongoing work, we join the roadmap as an integrated product unit rather than separating discovery, design, and delivery into handoffs." },
];

function Services() {
  return (
    <article className="pb-24">
      <header className="grid gap-6 border-b border-border pb-12 min-[720px]:grid-cols-2 min-[720px]:gap-4">
        <div><p className="font-mono text-label text-ink-muted">SERVICES / ZENTURA</p><h1 className="mt-4 max-w-[30ch] text-editorial text-ink">The product team you never had to build.</h1></div>
        <div className="max-w-[54ch]">
          <p className="text-body text-ink-secondary">Zentura joins teams as a strategic operating partner, keeping product direction, design, and engineering inside one working loop.</p>
          <p className="mt-3 text-small text-ink-secondary">Building a first release? See our <Link href="/mvp-development" className="text-ink underline underline-offset-2">MVP development services</Link>.</p>
          <EmailButton className="mt-5">GET A QUOTE</EmailButton>
        </div>
      </header>
      <section aria-labelledby="services-list">
        <h2 id="services-list" className="sr-only">Services</h2>
        {services.map((service) => (
          <section key={service.label} className="grid gap-4 border-b border-border py-8 min-[720px]:grid-cols-2">
            <div><p className="font-mono text-label text-ink-muted">{service.label}</p><h3 className="mt-3 max-w-[30ch] text-body text-ink">{service.value}</h3></div>
            <p className="max-w-[54ch] text-small text-ink-secondary">{service.detail}</p>
          </section>
        ))}
      </section>

      <section className="grid gap-4 py-10 min-[720px]:grid-cols-2">
        <div><p className="font-mono text-label text-ink-muted">HOW WE ENGAGE</p><h2 className="mt-3 text-body text-ink">One team around the same outcome.</h2></div>
          <div className="max-w-[54ch] space-y-3 text-small text-ink-secondary">
            <p>The exact mix changes with the product. Strategy, interface work, and implementation share context throughout.</p>
            <p>Scope, timing, and commercial terms are confirmed directly for each partnership.</p>
          </div>
      </section>
    </article>
  );
}

export default function Page(props: any) {
  return <Services {...props} />;
}
