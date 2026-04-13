import teamJoy from "@/assets/team/team-joy.jpg";
import teamMahfuz from "@/assets/team/team-mahfuz.jpg";
import teamRintu from "@/assets/team/team-rintu.jpg";
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
    name: "Saad Rayhan",
    role: "Creative Director & CEO",
    img: teamSaad,
  },
  {
    name: "Joy Sorkar",
    role: "CTO & Backend Developer",
    img: teamJoy,
  },
  {
    name: "Maqibul Hossain Tamim",
    role: "Product Designer & Sales Manager",
    img: teamTamim,
  },
  {
    name: "Ishrat Jahan Rintu",
    role: "Full Stack Developer & Business Development",
    img: teamRintu,
  },
  {
    name: "Rakibul Islam",
    role: "Full-Stack Developer & Sales Representative",
    img: teamMahfuz,
  },
];

export default function Team() {
  return (
    <section className='border-b border-border'>
      <div className='mx-auto'>
        <Reveal className='px-12.5 py-12'>
          <h2 className='font-serif text-[28px] md:text-[36px] text-foreground'>
            Meet the <span className='italic'>team</span>
          </h2>
        </Reveal>

        <StaggerContainer className='grid grid-cols-2 md:grid-cols-5 border-t border-border'>
          {team.map((m, i) => (
            <StaggerItem
              key={m.name}
              className='border-r border-border last:border-r-0'>
              <HoverLift className='px-6 py-8'>
                <p className='font-serif text-[18px] text-foreground italic mb-2'>
                  {m.name.split(" ")[0]}
                  <br />
                  <span className='text-foreground/60'>
                    {m.name.split(" ").slice(1).join(" ")}
                  </span>
                </p>

                <div className='aspect-3/4 bg-muted overflow-hidden mb-3'>
                  <MotionWrapper
                    className='w-full h-full'
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}>
                    <img
                      src={m.img.src}
                      alt={m.name}
                      className='w-full h-full object-cover grayscale'
                    />
                  </MotionWrapper>
                </div>

                <p className='text-[11px] text-muted-foreground'>{m.role}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
