import Section from "./Section";

export default function PersonalSection() {
  return (
    <Section
      name="Personal: "
      className={"personalSection"}
      inputs={{
        name: { type: "text", label: "Name", value: "" },
        email: { type: "email", label: "Email", required: true },
        phone: { type: "text", label: "Phone", required: true },
      }}
    />
  );
}
