import { useState } from "react";
import Input from "./Input";

export default function PersonalSection() {
  const [personal, setPersonal] = useState({ name: "", email: "", phone: "" });

  function edit(event) {
    console.log("Edit");
  }

  function submit(event) {
    console.log("Submitting...");
  }

  function handleInputChange(event, status) {
    const target = event.target;

    switch (status) {
      case "name":
        setPersonal({ ...personal, name: target.value });
        break;
      case "email":
        setPersonal({ ...personal, email: target.value });
        break;
      case "phone":
        setPersonal({ ...personal, phone: target.value });
        break;
      default:
        break;
    }
  }

  return (
    <section>
      <h2>Personal: {personal.name}</h2>
      <Input
        label={"Full name: "}
        onChange={(event) => handleInputChange(event, "name")}
      />
      <Input
        label={"Email: "}
        onChange={(event) => handleInputChange(event, "email")}
      />
      <Input
        label={"Phone: "}
        onChange={(event) => handleInputChange(event, "phone")}
      />
      <button type="button" onClick={edit}>
        Edit
      </button>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </section>
  );
}
