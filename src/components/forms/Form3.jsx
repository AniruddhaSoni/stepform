import React, { useContext } from "react";
import StepContext from "../../context/StepProvider";

export default function Form3() {
  const { step } = useContext(StepContext);

  return (
    <div className={step === 3 ? "form formThree active" : "form formThree"}>
      <div className="labels">
        <h1>Let's have and idea about your skells</h1>
        <h5>Rate your self from 1 - 5</h5>
      </div>
      <div className="flex flex-col">
        <div className="flex gap justify-between">
          <label htmlFor="">HTML</label>
          <div className="flex justify-between flex-1">
            <input type="radio" name="html" id="" value={1} />
            <input type="radio" name="html" id="" value={2} />
            <input type="radio" name="html" id="" value={3} />
            <input type="radio" name="html" id="" value={4} />
            <input type="radio" name="html" id="" value={5} />
          </div>
        </div>
        <div className="flex gap justify-between">
          <label htmlFor="">CSS</label>
          <div className="flex justify-between flex-1">
            <input type="radio" name="css" id="" value={1} />
            <input type="radio" name="css" id="" value={2} />
            <input type="radio" name="css" id="" value={3} />
            <input type="radio" name="css" id="" value={4} />
            <input type="radio" name="css" id="" value={5} />
          </div>
        </div>
        <div className="flex gap justify-between">
          <label htmlFor="">JS</label>
          <div className="flex justify-between flex-1">
            <input type="radio" name="js" id="" value={1} />
            <input type="radio" name="js" id="" value={2} />
            <input type="radio" name="js" id="" value={3} />
            <input type="radio" name="js" id="" value={4} />
            <input type="radio" name="js" id="" value={5} />
          </div>
        </div>
      </div>
    </div>
  );
}
