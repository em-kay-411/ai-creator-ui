import React from "react";
import "./App.css";
import EntranceBranding from "./components/EntranceBranding/EntranceBranding";
import MainContent from "./components/MainContent/MainContent";

function App() {

  return (
    <div className="App">
      {/* <img src={logo} alt="" style={{
        position : "fixed",
        height : "900%",
        opacity : "0.1"
      }} /> */}
      <EntranceBranding/>
      <MainContent/>
    </div>    
  );
}

export default App;
