import Section from "./Section";

export default function EducationSection() {
  return (
    <Section
      name="Education"
      inputs={{
        school: { type: "text", label: "Education", value: "" },
        titleOfStudy: { type: "text", label: "Title of study" },
      }}
    />
  );
}
