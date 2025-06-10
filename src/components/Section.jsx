import { useState } from "react";
import Input from "./Input";

export default function Section({ name = "No name", inputs = { null: null } }) {
  const [section, setSection] = useState(inputs);
  const [isEdit, setIsEdit] = useState(true);

  function edit() {
    setIsEdit(true);
  }

  function submit() {
    setIsEdit(false);
  }

  function handleInputChange(event, key) {
    const target = event.target;

    setSection({ ...section, [key]: target.value });
  }

  return isEdit ? (
    <section>
      <h2>{name}</h2>
      {Object.entries(section).map(([key, value]) => (
        <Input
          key={key}
          id={key}
          label={key}
          value={value}
          onChange={(event) => handleInputChange(event, key)}
        />
      ))}

      <button type="button" onClick={edit}>
        Edit
      </button>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </section>
  ) : (
    <section>
      <h2>{name}</h2>

      {Object.entries(section).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}

      <button type="button" onClick={edit}>
        Edit
      </button>
      <button type="button" onClick={submit}>
        Submit
      </button>
    </section>
  );
}
