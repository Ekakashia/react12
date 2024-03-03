import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, link, Router } from "react-router-dom";
import Home from "./Home";
import Contact from "./pages/Contact";

function App() {
    
    return(
      <BrowserRouter>
        <Routes>
            <Route index path="/" element = {<Home />} />
            <Route path="About" element = {<About />} />
            <Route path="Contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    )

}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);