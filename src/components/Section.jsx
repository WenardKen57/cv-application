import { useState, Fragment } from "react";

export default function Section({
  name = "No name",
  className,
  inputs = null,
}) {
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

    setSection({ ...section, [key]: { ...section[key], value: target.value } });
  }

  return isEdit ? (
    <section className={className}>
      <h2>{name}</h2>
      {Object.entries(section).map(([key, value]) => (
        <Fragment key={key}>
          <label htmlFor={key}><strong>{String(value.label)}: </strong></label>
          <input
            type={value.type}
            value={value.value ?? ""}
            onChange={(event) => handleInputChange(event, key)}
            required={value.required}
          />
        </Fragment>
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
          {value.label}: <em>{value.value}</em>
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
