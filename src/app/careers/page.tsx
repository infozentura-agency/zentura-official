
import { EditorialText } from "@/components/zentura/blocks";
import { EmailButton } from "@/components/zentura/Button";



function Careers() {
  return (
    <article className="pb-24">
      <EditorialText heading="Small team. Shared context. Serious work." primary>
        <p>We protect focused time, keep meetings useful, and write product decisions down. Designers and engineers review the same work while there is still time to improve it.</p>
        <p>We value clear thinking, careful craft, and people who can explain trade-offs without hiding behind process.</p>
      </EditorialText>

      <section className="pt-10">
        <div className="mb-6 grid grid-cols-2 gap-4">
          <h2 className="text-editorial text-ink">Open roles</h2>
          <p className="text-small text-ink-secondary">Join a product team in Dhaka working closely with international companies.</p>
        </div>
        <div className="grid min-h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-y border-border">
          <div>
            <p className="text-body text-ink">No open roles right now</p>
            <p className="text-small text-ink-secondary">Strong introductions are still welcome.</p>
          </div>
          <EmailButton>GET A QUOTE</EmailButton>
        </div>
      </section>
    </article>
  );
}

export default function Page(props: any) {
  return <Careers {...props} />;
}
