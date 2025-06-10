import { useState } from "react";
import Input from "./Input";

export default function Section({ name = "No name", className, inputs = { null: null } }) {
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
    console.log(section[key].label);

    setSection({ ...section, [key]: { ...section[key], value: target.value } });
  }

  return isEdit ? (
    <section className={className}>
      <h2>{name}</h2>
      {Object.entries(section).map(([key, value]) => (
        // <Input
        //   key={key}
        //   id={key}
        //   label={`${value.label}`}
        //   value={value.value}
        //   onChange={(event) => handleInputChange(event, key)}
        // />
        <>
        <label htmlFor={key}>{String(value.label)}: </label> 
        <input
          type={value.type}
          key={key}
          id={key}
          value={value.value}
          onChange={(event) => handleInputChange(event, key)}
          required={value.required}
        />
        </>
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
          {value.label}: {value.value}
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
