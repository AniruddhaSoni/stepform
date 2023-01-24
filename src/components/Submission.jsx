import React from "react";
import StepContext from "../context/StepProvider";

export default function Submission() {
  const { data } = React.useContext(StepContext);
  console.log(data);
  return (
    <div className="flex flex-col items-center gap">
      <h2>Your Details are following</h2>
      <div className="flex flex-col justify-between">
        <div>
          first name:<strong> {data.input1}</strong>
        </div>
        <div>
          last name: <strong> {data.input2}</strong>
        </div>
        <div>
          email: <strong> {data.input3}</strong>
        </div>
        <div>
          tel: <strong> {data.input4}</strong>
        </div>
        <div>
          DOB: <strong> {data.input5}</strong>
        </div>

        <div>
          gender:<strong> {data.select}</strong>
        </div>
        <div>
          skills
          <div className="">
            HTML<strong> {data.html}</strong>
          </div>
          <div className="">
            CSS<strong> {data.css}</strong>
          </div>
          <div className="">
            JS<strong> {data.js}</strong>
          </div>
        </div>
        <div>
          Submitted Resume: <strong> {data.file}</strong>
        </div>
        <div>
          T&Cs Agreed: <strong> {data.checkbox === 1 ? "yes" : "no"}</strong>
        </div>
      </div>
    </div>
  );
}
