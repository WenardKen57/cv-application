import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import PracticalSection from "./PracticalExperienceSection";

export default function CV() {

  return (
    <div>
      <PersonalSection />      
      <EducationSection />
      <PracticalSection />
    </div>
  );
}