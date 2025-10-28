import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myarr = [1, 2, 3, 4];

  return (
    <>
      <Card username="Vedant" myarr={myarr} /> /*We can add anything with props
      */
      <Card username="Divy" />
      <Card username="Vishwesh" />
    </>
  );
}

export default App;
