import Link from "next/link";

import { EmailButton } from "@/components/zentura/Button";

const URL = "https://zentura.agency/mvp-development";
const TITLE = "MVP Development Services for Startups — Zentura";
const DESC = "MVP development services from an integrated product design and full-stack engineering team. Zentura scopes, designs, and ships your minimum viable product without handoffs.";

const faqs = [
  { q: "What does an MVP development company actually do?", a: "An MVP development company turns an idea into the smallest product that can test a real business assumption with real users. At Zentura that means product strategy, UX and interface design, and full-stack engineering delivered by one team, so decisions made in discovery survive into the shipped code." },
  { q: "How long does it take to build an MVP?", a: "It depends on the problem, not a template. After a short scoping review we confirm the scope, sequence, and timeline in writing before any build work starts." },
  { q: "Do you only design, or do you build the MVP too?", a: "Both. Design and engineering work in the same loop. The people who shape the product are the people who build it, which removes the handoff where most MVPs lose time and intent." },
  { q: "What happens after the MVP launches?", a: "Many teams keep us on as a product partner to learn from usage, prioritise the next release, and harden the system as it grows. Others take the codebase in-house; we document decisions so either path works." },
  { q: "Do you work with UK, US, and EU startups?", a: "Yes. Zentura is based in Dhaka and works with international product teams, including Renewably UK, with delivery rhythms designed around overlapping working hours." },
];



const phases = [
  { label: "01 / SCOPE", title: "Find the one assumption worth testing.", body: "We review your idea, market, and constraints together and cut the MVP down to what proves or disproves the core bet. You get a written scope and sequence before build starts." },
  { label: "02 / DESIGN", title: "Design the product, not just the screens.", body: "User flows, interface states, and a clickable prototype, designed with data models and engineering constraints visible from day one so nothing needs redesigning at build time." },
  { label: "03 / BUILD", title: "Full-stack engineering by the same team.", body: "Frontend, backend, authentication, payments, and integrations built on a maintainable stack. The designers stay in the loop through implementation, so edge cases are decided, not guessed." },
  { label: "04 / LAUNCH & LEARN", title: "Ship, measure, and decide the next release.", body: "We launch with analytics in place, read what real users do, and help you prioritise what the MVP should become — or hand over a documented codebase to your team." },
];

function MvpDevelopment() {
  return (
    <article className="pb-24">
      <header className="grid gap-6 border-b border-border pb-12 min-[720px]:grid-cols-2 min-[720px]:gap-4">
        <div>
          <p className="font-mono text-label text-ink-muted">MVP DEVELOPMENT / ZENTURA</p>
          <h1 className="mt-4 max-w-[30ch] text-editorial text-ink">MVP development services for founders who need to ship something real.</h1>
        </div>
        <div className="max-w-[54ch] space-y-3">
          <p className="text-body text-ink-secondary">Zentura is a product design and full-stack engineering studio. We scope, design, and build your minimum viable product as one integrated team — no agency handoffs, no rebuilt designs, no lost intent.</p>
          <p className="text-small text-ink-secondary">The product team you never had to build.</p>
          <EmailButton className="mt-2">GET A QUOTE</EmailButton>
        </div>
      </header>

      <section aria-labelledby="mvp-process">
        <h2 id="mvp-process" className="sr-only">How we build your MVP</h2>
        {phases.map((p) => (
          <section key={p.label} className="grid gap-4 border-b border-border py-8 min-[720px]:grid-cols-2">
            <div><p className="font-mono text-label text-ink-muted">{p.label}</p><h3 className="mt-3 max-w-[30ch] text-body text-ink">{p.title}</h3></div>
            <p className="max-w-[54ch] text-small text-ink-secondary">{p.body}</p>
          </section>
        ))}
      </section>

      <section className="grid gap-4 border-b border-border py-10 min-[720px]:grid-cols-2">
        <div><p className="font-mono text-label text-ink-muted">WHY AN INTEGRATED TEAM</p><h2 className="mt-3 text-body text-ink">Most MVPs slow down at the handoff.</h2></div>
        <div className="max-w-[54ch] space-y-3 text-small text-ink-secondary">
          <p>When one agency designs and another develops, the MVP is shaped twice and understood once. Zentura keeps product strategy, design, and engineering in the same loop, so your first release reflects the decisions that matter.</p>
          <p>See how we work in <Link href="/work/renewably-uk" className="text-ink underline underline-offset-2">our Renewably UK engagement</Link>, or read <Link href="/blog/design-and-engineering-in-one-loop" className="text-ink underline underline-offset-2">why design and engineering belong in one loop</Link>.</p>
        </div>
      </section>

      <section aria-labelledby="mvp-faq" className="pt-10">
        <h2 id="mvp-faq" className="font-mono text-label text-ink-muted">MVP DEVELOPMENT — QUESTIONS</h2>
        {faqs.map((f) => (
          <section key={f.q} className="grid gap-4 border-b border-border py-6 min-[720px]:grid-cols-2">
            <h3 className="max-w-[36ch] text-body text-ink">{f.q}</h3>
            <p className="max-w-[54ch] text-small text-ink-secondary">{f.a}</p>
          </section>
        ))}
      </section>
    </article>
  );
}

export default function Page(props: any) {
  return <MvpDevelopment {...props} />;
}
