import teamJoy from "@/assets/team/team-joy.jpg";
import teamSaad from "@/assets/team/team-saad.webp";
import teamTamim from "@/assets/team/team-tamim.jpg";
import {
  HoverLift,
  MotionWrapper,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

const team = [
  {
    name: "Saad Raihan",
    role: "Creative Director & CEO",
    fallback: teamSaad.src,
  },
  {
    name: "Joy Sarkar",
    role: "CTO & Full Stack Developer",
    fallback: teamJoy.src,
  },
  {
    name: "Maqibul Tamim",
    role: "Product Designer & Sales",
    fallback: teamTamim.src,
  },
];

export default function Team() {
  return (
    <section className='border-b border-border'>
      <div className='mx-auto'>
        <Reveal className='px-12.5 pt-16 pb-6'>
          <h2 className='font-serif text-[28px] md:text-[36px] text-foreground'>
            The <span className='italic'>team</span>
          </h2>
        </Reveal>

        <StaggerContainer className='grid grid-cols-1 sm:grid-cols-3 border-t border-border'>
          {team.map((m) => (
            <StaggerItem
              key={m.name}
              className='border-r border-border last:border-r-0 border-b sm:border-b-0 last:border-b-0'>
              <HoverLift className='px-12.5 py-8'>
                <p className='font-serif text-[22px] text-foreground italic mb-3'>
                  {m.name.split(" ")[0]}
                  <br />
                  <span className='text-foreground/60'>
                    {m.name.split(" ").slice(1).join(" ")}
                  </span>
                </p>

                <div className='aspect-3/4 bg-muted overflow-hidden mb-3'>
                  <MotionWrapper
                    whileInView={{ opacity: 1, scale: 1 }}
                    className='w-full h-full object-cover grayscale'
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}>
                    <img
                      src={m.fallback}
                      alt={m.name}
                      className='w-full h-full object-cover aspect-4/3'
                    />
                  </MotionWrapper>
                </div>

                <p className='text-[12px] text-muted-foreground'>{m.role}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
