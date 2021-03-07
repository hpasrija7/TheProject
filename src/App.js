import React from "react";

import "./App.css";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Component1 from "./components/component1";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Component4 from "./components/component4";
import Component5 from "./components/component5";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

export default App;
