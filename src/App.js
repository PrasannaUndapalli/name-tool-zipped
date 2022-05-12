import wellslogo from './wellslogo.png';
import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login"
import NameTool from "./components/NameTool";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={wellslogo} className="logo-icon" alt="Wells Fargo" />
        <div style={{marginRight: 30}}> ADMIN </div>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nametool" element={<NameTool />} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
