import Link from "next/link";

import { EditorialText, ImageReveal, MediaFrame, Section } from "@/components/zentura/blocks";
import { studioImages, team } from "@/content/site";



function Studio() {
  return (
    <article className="pb-24">
      <ImageReveal immediate>
        <MediaFrame {...studioImages.collaboration} sizes="(min-width: 1180px) 1026px, (min-width: 720px) calc(100vw - 345px), calc(100vw - 40px)" aspect="product" eager />
      </ImageReveal>
      <p className="mt-2 font-mono text-label text-ink-muted">REPRESENTATIVE STUDIO PHOTOGRAPHY</p>
      
      <EditorialText heading="One product team. No handoffs." primary>
        <p>Zentura works as a strategic operating partner. Design and engineering stay integrated from the first decision through what ships.</p>
        <p>We join the operating context, work inside the roadmap, and keep the people shaping the product close to the people building it.</p>
      </EditorialText>

      <div className="grid items-start gap-4 md:grid-cols-2">
        <ImageReveal>
          <MediaFrame {...studioImages.systems} aspect="product" />
        </ImageReveal>
        <ImageReveal>
          <MediaFrame {...studioImages.engineering} aspect="device" />
        </ImageReveal>
      </div>

      <EditorialText heading="How the studio works">
        <p>Strategy, interface design, systems thinking, and engineering are treated as one continuous responsibility. Reviews happen around decisions and working software, not departmental checkpoints.</p>
        <p>We protect focused time, document trade-offs, and keep the people who understand the business close to the people shaping the product.</p>
      </EditorialText>

      <div className="grid items-start gap-4 md:grid-cols-2">
        <ImageReveal>
          <MediaFrame {...studioImages.culture} aspect="product" />
        </ImageReveal>
        <ImageReveal>
          <MediaFrame {...studioImages.collaboration} aspect="product" />
        </ImageReveal>
      </div>
      <p className="mt-2 font-mono text-label text-ink-muted">REPRESENTATIVE CULTURE PHOTOGRAPHY</p>

      <EditorialText heading="Life at Zentura">
        <p>Our culture is built around trust, shared context, and the energy of working closely together. Focus matters, but so do the informal conversations that make a team more generous and resilient.</p>
        <p>We make room to review work honestly, help across disciplines, and enjoy the relationships that form around difficult, worthwhile projects.</p>
      </EditorialText>

      <Section labelledBy="team-title">
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <h2 id="team-title" className="text-editorial text-ink">The team</h2>
          <p className="max-w-[48ch] text-small text-ink-secondary">Four roles spanning company direction, product operations, engineering, and full-stack delivery.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 min-[1180px]:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="min-w-0">
              <Link href={`/studio/${member.slug}`} className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong">
                <ImageReveal>
                  <MediaFrame {...member.image} sizes="(min-width: 1180px) 245px, (min-width: 720px) calc((100vw - 345px) / 2), calc((100vw - 56px) / 2)" aspect="device" eager={member === team[0]} />
                </ImageReveal>
                <div className="mt-[10px] space-y-0.5">
                  <h3 className="text-card text-ink">{member.name}</h3>
                  <p className="text-small text-ink-secondary">{member.role} · {member.focus}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <EditorialText heading="Small by design">
        <p>A compact team keeps responsibility visible. The people discussing direction remain close to implementation, and the people implementing the system can challenge decisions before they become expensive.</p>
        <p>Based in Dhaka, we work with founders and product leaders across the UK, US, and Europe.</p>
      </EditorialText>
    </article>
  );
}

export default function Page(props: any) {
  return <Studio {...props} />;
}
