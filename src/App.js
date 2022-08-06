/** @format */

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export default function App() {
  return (
    <>
      <Navbar title='Textutils' />
      <div className='container'>
        <TextForm heading =" Enter the Text" />
      </div>
    </>
  );
}
