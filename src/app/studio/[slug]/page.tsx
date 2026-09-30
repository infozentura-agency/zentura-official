import Link from "next/link";
import { ImageReveal, MediaFrame } from "@/components/zentura/blocks";
import { team } from "@/content/site";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = team.find((entry) => entry.slug === slug);
  const name = member?.name ?? "Team member";
  const description = member ? `${member.name}, ${member.role} at Zentura.` : "A member of the Zentura team.";
  const url = `https://zentura.agency/studio/${member?.slug ?? "team"}`;
  return {
    title: `${name} — Zentura`,
    description,
    openGraph: { title: `${name} — Zentura`, description, type: "profile", url },
    twitter: { card: "summary_large_image" }
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = team.find((item) => item.slug === slug);
  if (!member) notFound();
  return (
    <article className="pb-24">
      <section className="mb-16 min-[720px]:hidden"><ImageReveal immediate><MediaFrame {...member.image} sizes="calc(100vw - 40px)" aspect="device" eager /></ImageReveal><div className="mt-8 grid grid-cols-2 gap-6"><div><p className="text-small text-ink-muted">Role</p><p className="mt-1 text-body text-ink">{member.role}</p><p className="mt-6 text-small text-ink-muted">Base</p><p className="mt-1 text-body text-ink">{member.base || "Dhaka, Bangladesh"}</p></div><div><p className="text-small text-ink-muted">Skills &amp; specialisations</p><p className="mt-1 text-body text-ink">{member.skills ? member.skills.map((skill, i) => <span key={i}>{skill}<br /></span>) : <>{member.focus}<br />Integrated product delivery<br />Cross-functional collaboration</>}</p></div></div></section>
      <section className="ml-auto max-w-126.5"><p className="font-mono text-label text-ink-muted">ABOUT</p><div className="pt-28 max-[719px]:pt-12"><h1 className="text-editorial text-ink">{member.name}</h1><div className="mt-5 max-w-[54ch] space-y-4 text-body text-ink">
            {member.about ? (
              member.about.map((paragraph, i) => <p key={i}>{paragraph}</p>)
            ) : (
              <>
                <p>{member.name} is {member.role} at Zentura, contributing through {member.focus.toLowerCase()}.</p>
                <p>The role stays connected to product decisions and delivery, so responsibility remains visible from direction through implementation.</p>
                <p>Personal education, work history, and biographical details will be added only after they have been confirmed by the team member.</p>
              </>
            )}
          </div></div><div className="mt-24 grid gap-10 min-[720px]:grid-cols-2"><div><p className="text-small text-ink-muted">Current</p><p className="mt-1 text-body text-ink">{member.current ? <>{member.current.company}<br />{member.current.role}</> : <>Zentura<br />{member.role}</>}</p></div><div><p className="text-small text-ink-muted">Responsibility</p><p className="mt-1 text-body text-ink">{member.responsibility || `${member.focus}. The work connects specialist judgment with the wider product and business context.`}</p></div></div><Link href="/studio" className="mt-16 inline-block font-mono text-label uppercase text-ink underline underline-offset-3">Back to Studio</Link></section>
    </article>
  );
}
