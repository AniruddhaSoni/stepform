import React, { useContext } from "react";
import StepContext from "../context/StepProvider";

export default function Footer() {
  let { step, setStep } = useContext(StepContext);
  return (
    <footer>
      <button
        className="createWorkspace"
        onClick={() => {
          if (step === 5) {
            // setStep(1);
            // <Link to={"/submission"} />;
            console.log(step);
          } else {
            setStep(step + 1);
          }
        }}
        type={step === 5 ? "submit" : "button"}
      >
        {step === 5 ? "Submit" : "Next"}
      </button>
    </footer>
  );
}
