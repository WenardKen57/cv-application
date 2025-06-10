import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import PracticalSection from "./PracticalExperienceSection";

export default function CV() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CV Application</h1>
      <div>
        <PersonalSection />
        <EducationSection />
        <PracticalSection />
      </div>
    </div>
  );
}
