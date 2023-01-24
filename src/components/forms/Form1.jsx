import React, { useContext } from "react";
import StepContext from "../../context/StepProvider";

export default function Form1() {
  const { step } = useContext(StepContext);

  return (
    <div className={step === 1 ? "form formOne active" : "form formOne"}>
      <div className="labels">
        <h1>Welcome! First Things First</h1>
        <h5>You can always change them later.</h5>
      </div>

      <div className="form-input one">
        <div className="">
          <label htmlFor="name">First Name</label>
          <input type="text" placeholder="Steve" name="input1" />
        </div>
        <div className="">
          <label htmlFor="name">Last Name</label>
          <input type="text" placeholder="Jobs" name="input2" />
        </div>
        <div className="">
          <label htmlFor="name">Email Address</label>
          <input type="email" placeholder="example@email.com" name="input3" />
        </div>
        <div className="">
          <label htmlFor="name">Mobile Number</label>
          <input type="tel" placeholder="72XXXXXX02" name="input4" />
        </div>
        <div className="">
          <label htmlFor="name">DOB</label>
          <input type="date" name="input5" />
        </div>
      </div>
    </div>
  );
}
