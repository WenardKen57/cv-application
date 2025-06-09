export default function Input({placeholder="", label, type="text", id}) {

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder}/>
    </> 
  )
}