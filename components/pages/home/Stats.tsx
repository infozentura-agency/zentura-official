import { CountUp } from "@/components/shared/motion";

export default function Stats() {
  return (
    <>
      {/* STATS */}
      <section className='border-b border-border'>
        <div className='mx-auto grid grid-cols-2 md:grid-cols-4'>
          <div className='px-12.5 py-10 border-r border-border last:border-r-0 border-b md:border-b-0'>
            <div className='text-[40px] font-mono font-semibold text-foreground leading-none'>
              <CountUp target={12} suffix='+' />
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Projects shipped
            </p>
          </div>
          <div className='px-12.5 py-10 border-r border-border last:border-r-0 border-b md:border-b-0'>
            <div className='text-[40px] font-mono font-semibold text-foreground leading-none'>
              <CountUp target={5} />
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Years of craft
            </p>
          </div>
          <div className='px-12.5 py-10 border-r border-border last:border-r-0 border-b md:border-b-0'>
            <div className='text-[40px] font-mono font-semibold text-foreground leading-none'>
              12+
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Countries served
            </p>
          </div>
          <div className='px-12.5 py-10 border-r border-border last:border-r-0 border-b md:border-b-0'>
            <div className='text-[40px] font-mono font-semibold text-foreground leading-none'>
              4.9★
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Avg. client rating
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
