import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Submission from "./components/Submission";
import StepContext from "./context/StepProvider";

function App() {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <StepContext.Provider value={{ step, setStep, data, setData }}>
      <Routes>
        {/* <Form /> */}
        <Route path="" element={<Form />} exact />
        <Route path="submission" element={<Submission />} />
      </Routes>
    </StepContext.Provider>
  );
}

export default App;
