import Section from "./Section";

export default function PersonalSection() {
  return (
    <Section name="Personal: " inputs={{ name: {type: "text", label:"Name", value:""} }} />
  );
}
