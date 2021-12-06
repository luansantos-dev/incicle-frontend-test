import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Aside from "./Components/Aside/Aside";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main container">
        <Content />
        <Aside/>
      </main>
    </div>
  );
}

export default App;
