import Section from "./Section";

export default function PracticalSection() {
  return (
    <Section
      name="Practical Experience"
      inputs={{
        companyName: {
          type: "text",
          label: "Company Name",
          value: "",
        },
      }}
    />
  );
}
