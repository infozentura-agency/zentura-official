import { CountUp } from "@/components/shared/motion";

export default function Stats() {
  return (
    <>
      <section className='border-b border-border'>
        <div className='mx-auto grid grid-cols-2 md:grid-cols-4'>
          <div className='px-12.5 py-10 border-r border-border'>
            <div className='text-[40px] font-mono font-semibold text-foreground'>
              <CountUp target={12} suffix='+' />
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Projects delivered
            </p>
          </div>
          <div className='px-12.5 py-10 border-r border-border'>
            <div className='text-[40px] font-mono font-semibold text-foreground'>
              <CountUp target={5} />
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Years of craft
            </p>
          </div>
          <div className='px-12.5 py-10 border-r border-border'>
            <div className='text-[40px] font-mono font-semibold text-foreground'>
              5
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Team members
            </p>
          </div>
          <div className='px-12.5 py-10'>
            <div className='text-[40px] font-mono font-semibold text-foreground'>
              BD
            </div>
            <p className='text-[12px] font-mono text-muted-foreground uppercase tracking-wider mt-2'>
              Based in Dhaka
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
