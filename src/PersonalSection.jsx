import { useState } from "react";
import Input from "./Input";

export default function PersonalSection() {
  const [personal, setPersonal] = useState({ name: "", email: "", phone: "" });
  const [isEdit, setIsEdit] = useState(true);

  function edit() {
    setIsEdit(true);
  }

  function submit() {
    setIsEdit(false);
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

  return isEdit ? (
    <section>
      <h2>Personal:</h2>
      <Input
        label={"Name (Full name): "}
        value={personal.name}
        onChange={(event) => handleInputChange(event, "name")}
      />
      <Input
        label={"Email: "}
        value={personal.email}
        onChange={(event) => handleInputChange(event, "email")}
      />
      <Input
        label={"Phone: "}
        email
        value={personal.phone}
        onChange={(event) => handleInputChange(event, "phone")}
      />
      <button type="button" onClick={edit}>
        Edit
      </button>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </section>
  ) : (
    <section>
      <h2>Personal:</h2>
      <p>Name: {personal.name}</p>
      <p>Email: {personal.email}</p>
      <p>Phone: {personal.phone}</p>
      <button type="button" onClick={edit}>
        Edit
      </button>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </section>
  );
}
