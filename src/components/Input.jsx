export default function Input({
  placeholder = "",
  label = "No label",
  type = "text",
  id,
  value = "",
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>
        {String(label.charAt(0).toUpperCase() + label.slice(1))}:{" "}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
