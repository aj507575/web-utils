import React, { useState } from "react";

export default function TextForm(props) {
  const fun = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const funs = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower case", "success");
  };
  const copy = () => {
    let texts = document.getElementById("mybox");
    texts.select();
    navigator.clipboard.writeText(texts.value);
    props.showAlert("text copied", "success");
  };
  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space removed", "success");
  };
  const handle = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //setText("new text") //this is a function which change text in textarea
  return (
    <>
      <div
        className="container"
        //style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handle}
            //style={{
            // backgroundcolor: props.mode === "dark" ? "white" : "black", // same style code not working dont know why
            // color: props.mode === "dark" ? "white" : "black",
            //}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button className={`btn btn-${props.btn} mx-1`} onClick={fun}>
          Convert to upper case
        </button>
        <button className={`btn btn-${props.btn} mx-1`} onClick={funs}>
          Convert to lower case
        </button>
        <button className={`btn btn-${props.btn} mx-1`} onClick={copy}>
          Copy text
        </button>
        <button className={`btn btn-${props.btn} mx-1`} onClick={removeSpace}>
          remove extra space
        </button>
      </div>
      <div
        className="container my-2 "
        id="c2"
        //style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length}words, {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length}minutes read</p>
        <h3>Preview</h3>
        <p id="last">
          {text.length > 0
            ? text
            : "Enter something in the text box above to Preview it here"}
        </p>
      </div>
    </>
  );
}
TextForm.defaultProps = {
  btn: "primary",
};
