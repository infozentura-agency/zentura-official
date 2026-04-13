import teamGroup1 from "@/assets/team-group-1.jpg";
import teamGroup2 from "@/assets/team-group-2.jpg";
import teamGroup4 from "@/assets/team-group-4.jpg";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion";

const cultureBlocks = [
  {
    text: "Our ambitions are to be category defining. This means pursuing an experience that's nothing short of extraordinary.",
  },
  {
    text: "We have a vibrant, in-office culture based out of our studio in Dhaka.",
  },
  {
    text: "Our team has deep experience from best-of-breed tech companies and design agencies.",
  },
];

const culturePhotos = [teamGroup1, teamGroup2, teamGroup4];

export default function PhotoBento() {
  return (
    <>
      {/* Photo bento */}
      <section className='border-b border-border'>
        <StaggerContainer className='mx-auto grid grid-cols-1 md:grid-cols-3'>
          {cultureBlocks.map((b, i) => (
            <StaggerItem
              key={i}
              className='border-r border-border last:border-r-0'>
              <div className='aspect-4/3 overflow-hidden'>
                <img
                  src={culturePhotos[i].src}
                  alt={`Culture ${i + 1}`}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='px-12.5 py-8'>
                <p className='text-[14px] text-muted-foreground leading-relaxed'>
                  {b.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
