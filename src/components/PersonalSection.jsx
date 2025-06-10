import Section from "./Section";
import "./style/PersonalSectionStyle.css"

export default function PersonalSection() {
  return (
    <Section
      name="Personal: "
      className={"personalSection"}
      inputs={{
        name: { type: "text", label: "Name", value: "" },
        email: { type: "email", label: "Email" },
        phone: { type: "text", label: "Phone", required: true },
      }}
    />
  );
}
