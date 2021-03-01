import React from "react"

import Navbar from "./components/navbar"
import Header from "./components/header"
import Component1 from "./components/component1"
import Component2 from "./components/component2"
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Component1/>
      <Component2/>
      
    </div>
    
  );
}

export default App;
