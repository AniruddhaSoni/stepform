import React, { useContext } from "react";
import StepContext from "../../context/StepProvider";

export default function Form2() {
  const { step } = useContext(StepContext);

  return (
    <div className={step === 2 ? "form formTwo active" : "form formTwo"}>
      <div className="labels">
        <h1>We know its personal.</h1>
        <h5>Don't worry we will keep it private</h5>
      </div>

      <div className="form-input">
        <div className="">
          <label htmlFor="name">What's Your Gender</label>
          <select name="select" id="">
            <option value="" defaultValue>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>
    </div>
  );
}
