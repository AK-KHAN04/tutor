/** @format */

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import {Navigate} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<NotFound/>} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
