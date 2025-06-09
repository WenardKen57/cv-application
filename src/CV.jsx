import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import PracticalSection from "./PracticalExperienceSection";

export default function CV() {

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>CV Application</h1>
      <form action="">
        <PersonalSection />      
        <EducationSection />
        <PracticalSection />
        <button>Submit</button>
      </form>
    </div>
  );
}