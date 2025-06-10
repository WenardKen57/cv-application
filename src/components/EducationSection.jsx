import Section from "./Section";

export default function EducationSection() {
  return (
    <Section
      name="Education"
      className={"educationSection"}
      inputs={{
        school: { type: "text", label: "Education", value: "" },
        titleOfStudy: { type: "text", label: "Title of study" },
      }}
    />
  );
}
