import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyClass from "./MyClass";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
let a = "Ali";
root.render(
  <React.StrictMode>
    <MyClass name={a}  age={23}>
    <h1>Child No. 1</h1>
    </MyClass>
    <MyClass name="Yogesh" age={22} >
      <button type='button'>Submit</button>
    </MyClass>
    <MyClass name="Manoj" age={21}>
      <ol>
        <li>Aku</li>
        <li>Zain</li>
        <li>Noman</li>
      </ol>
    </MyClass>
    {/* <App2 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
