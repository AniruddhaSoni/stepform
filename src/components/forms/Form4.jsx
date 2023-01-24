import React, { useContext } from "react";
import StepContext from "../../context/StepProvider";

export default function Form4() {
  const { step } = useContext(StepContext);

  return (
    <div className={step === 4 ? "form formFour active" : "form formFour"}>
      <div className="labels">
        <h1>Ok ! it's time to upload your resume</h1>
        <h5>Don't worry this won't be the only thing to judge you</h5>
      </div>
      <div className="form-input">
        <div className="">
          <input type="file" name="file" id="" accept=".pdf,.docx" />
        </div>
      </div>
    </div>
  );
}
