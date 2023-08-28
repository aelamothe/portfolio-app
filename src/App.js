import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "src/pages/home.js";
import Projects from "src/pages/projects.js";
import NavBar from "src/components/navbar.js";

function App() {
  // shared context is our set of users
  return (
    <HashRouter>
      <NavBar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
