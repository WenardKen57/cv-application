import Input from "./Input";

export default function EducationSection() {
  return (
    <section>
      <h2>Education: </h2>
      <Input label={"Schoool name:"} />
      <Input label={"Title of study:"} />
      <Input type="date" label={"Date of study:"} />
    </section>
  );
}
