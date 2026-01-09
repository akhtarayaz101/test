import React from "react";
import PassJSX from "./components/PassJSX";

function App() {
  return (
    <>
      <h1>Akhtar Ayaz Khan</h1>
      <hr />
      <PassJSX bgColor="orange">
        <h3>Testing</h3>
        <h3>Name: Tahir Bashir</h3>
        <h3>Father: Bashir Khan</h3>
        <h3>Class: 5th </h3>
        <h3>Roll No: 203</h3>
      </PassJSX>
      <hr />
      <PassJSX bgColor="yellow">
        <h3>Testing</h3>
        <h3>Name: Fahad Chaudhry</h3>
        <h3>Father: Jawad Anwar</h3>
        <h3>Class: 3th </h3>
        <h3>Roll No: 207</h3>
      </PassJSX>
      <hr />
      <PassJSX bgColor="grey">
        <h3>Testing</h3>
        <h3>Name: Asad Nawaz</h3>
        <h3>Father: Salman Khan</h3>
        <h3>Class: 4th </h3>
        <h3>Roll No: 206</h3>
      </PassJSX>
      <hr />
    </>
  );
}

export default App;
