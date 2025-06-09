export default function Input({
  placeholder = "",
  label,
  type = "text",
  id,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>
        {label.charAt(0).toUpperCase() + label.slice(1)}:{" "}
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
