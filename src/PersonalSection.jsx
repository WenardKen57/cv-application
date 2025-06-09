import Input from "./Input";

export default function PersonalSection() {
  return (
    <section>
      <h2>Personal: </h2>
      <Input label={"Full name: "}/>
      <Input label={"Email: "}/>
      <Input label={"Phone: "}/>
    </section>
  );
}