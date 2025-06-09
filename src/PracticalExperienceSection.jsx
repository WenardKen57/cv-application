
import Input from "./Input";

export default function PracticalSection() {

  return (
    <div>
      <h2>Practical experience:</h2>
      <Input label={"Company name:"}/>
      <Input label={"Position title:"}/>
      <Input type="textarea" label={"Responsibilities (Main responsibilities of your job):"}/>
      <Input type="date" label={"Date from (When you were at the company):"}/>
      <Input type="date" label={"Date end (When you left the company):"}/>
    </div>
  );
}