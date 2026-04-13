import teamGroup1 from "@/assets/team-group-1.jpg";
import teamGroup2 from "@/assets/team-group-2.jpg";
import teamGroup3 from "@/assets/team-group-3.jpg";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion";

export default function PhotoTriptych() {
  return (
    <>
      {/* Photo triptych */}
      <section className='border-b border-border'>
        <StaggerContainer className='mx-auto grid grid-cols-1 md:grid-cols-3'>
          {[teamGroup1, teamGroup2, teamGroup3].map((img, i) => (
            <StaggerItem
              key={i}
              className='border-r border-border last:border-r-0'>
              <div className='aspect-4/3 overflow-hidden'>
                <MotionWrapper
                  className='w-full h-full'
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                  <img
                    src={img.src}
                    alt={`Zentura team ${i + 1}`}
                    className='w-full h-full object-cover'
                  />
                </MotionWrapper>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </>
  );
}
