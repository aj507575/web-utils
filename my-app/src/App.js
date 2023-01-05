import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //for colour mode change
  const [alert, setAlert] = useState(null); //for alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // dark mode

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.getElementById("mybox").style.backgroundColor = "grey";
      document.getElementById("mybox").style.color = "white";
      document.getElementById("last").style.color = "white";
      showAlert("Dark mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "white";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "white";
      }
      document.getElementsByTagName("h3")[0].style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("mybox").style.backgroundColor = "white";
      document.getElementById("mybox").style.color = "black";
      document.getElementById("last").style.color = "black";
      showAlert("Light mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "black";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "black";
      }
      document.getElementsByTagName("h3")[0].style.color = "black";
    }
  };

  //red mode
  const redMode = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "red";
      document.getElementById("mybox").style.backgroundColor = "pink";
      document.getElementById("mybox").style.color = "white";
      document.getElementById("last").style.color = "white";
      showAlert("red mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "white";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "white";
      }
      document.getElementsByTagName("h3")[0].style.color = "white";
      document.getElementsByClassName("btn").style.backgroundColor = "red";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("mybox").style.backgroundColor = "white";
      document.getElementById("mybox").style.color = "black";
      document.getElementById("last").style.color = "black";
      showAlert("Light mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "black";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "black";
      }
      document.getElementsByTagName("h3")[0].style.color = "black";
    }
  };

  // blue mode

  const blueMode = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "blue";
      document.getElementById("mybox").style.backgroundColor = "#00ffff";
      document.getElementById("mybox").style.color = "white";
      document.getElementById("last").style.color = "white";
      showAlert("blue mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "white";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "white";
      }
      document.getElementsByTagName("h3")[0].style.color = "white";
      document.getElementsByClassName("btn").style.backgroundColor = "red";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("mybox").style.backgroundColor = "white";
      document.getElementById("mybox").style.color = "black";
      document.getElementById("last").style.color = "black";
      showAlert("Light mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "black";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "black";
      }
      document.getElementsByTagName("h3")[0].style.color = "black";
    }
  };
  const greenMode = () => {
    if (mode === "light") {
      setMode("green");
      document.body.style.backgroundColor = "green";
      document.getElementById("mybox").style.backgroundColor = "#bfff00";
      document.getElementById("mybox").style.color = "white";
      document.getElementById("last").style.color = "white";
      showAlert("green mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "white";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "white";
      }
      document.getElementsByTagName("h3")[0].style.color = "white";
      document.getElementsByClassName("btn").style.backgroundColor = "red";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("mybox").style.backgroundColor = "white";
      document.getElementById("mybox").style.color = "black";
      document.getElementById("last").style.color = "black";
      showAlert("Light mode enabled", "success");
      let arr1 = document.getElementsByTagName("h1");
      for (let i = 0; i < arr1.length; i++) {
        arr1[i].style.color = "black";
      }
      let arr2 = document.getElementsByTagName("p");
      for (let j = 0; j < arr1.length; j++) {
        arr2[j].style.color = "black";
      }
      document.getElementsByTagName("h3")[0].style.color = "black";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          redMode={redMode}
          blueMode={blueMode}
          greenMode={greenMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter text to analyse"
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
