function Input({placeholder="", label}) {

  return (
    <div>
      <label>{label}</label>
      <input type="text" placeholder={placeholder}/>
    </div> 
  )
}

export default function PersonalSection() {
  return (
    <div>
      <h2>Personal: </h2>
      <Input label={"Full name: "}/>
      <Input label={"Email: "}/>
      <Input label={"Phone: "}/>
    </div>
  );
}