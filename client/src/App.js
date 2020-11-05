import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import SideNavbar from "./components/SideNavbar";

function App() {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <SideNavbar />
      <Homepage />
    </div>
  );
}

export default App;
