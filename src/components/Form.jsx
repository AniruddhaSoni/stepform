import React from "react";
import { useLocation } from "react-router-dom";
import StepContext from "../context/StepProvider";

import Footer from "./Footer";

import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";
import Form5 from "./forms/Form5";
import Header from "./Header";

export default function Form() {
  const { data, setData } = React.useContext(StepContext);
  const loc = useLocation();

  function submitHandler(e) {
    e.preventDefault();

    let input1 = e.target.input1.value;
    let input2 = e.target.input2.value;
    let input3 = e.target.input3.value;
    let input4 = e.target.input4.value;
    let input5 = e.target.input5.value;

    let select = e.target.select.value;

    let html = e.target.html.value;
    let css = e.target.css.value;
    let js = e.target.js.value;

    let checkbox = e.target.checkbox.value === "on" ? 1 : 0;

    if (
      !input1 ||
      !input2 ||
      !input3 ||
      !input4 ||
      !input5 ||
      !select ||
      !html ||
      !css ||
      !js ||
      !checkbox
    ) {
      alert("fill all data");
    } else {
      let file = e.target.file.files[0].name;

      let newData = {
        input1,
        input2,
        input3,
        input4,
        input5,
        select,
        html,
        css,
        js,
        file,
        checkbox,
      };

      setData(newData);
      loc.pathname = "/submission";
      console.log(data);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <Header />
      <div className="forms">
        <Form1 />
        <Form2 />
        <Form3 />
        <Form4 />
        <Form5 />
      </div>
      <Footer />
    </form>
  );
}
