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
        positionTitle: {
          type: "text",
          label: "Position title",
        },
        mainResponsibility: {
          type: "text",
          label: "Main responsibilities "
        },
        startDate: {
          type: "date",
          label: "From"
        },
        endDate: {
          type: "date",
          label: "Until"
        }
      }}
    />
  );
}
