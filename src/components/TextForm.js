/** @format */

import React, { useState } from "react";
var start = true;

export default function TextForm(props) {
  const [text, settext] = useState("Enter the text here");
  const [text1, settext1] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maxime ullam aut, doloremque voluptatem non maiores exercitationem necessitatibus molestias minus ad corrupti cupiditate excepturi natus soluta eveniet modi eaque magnam."
  );

  var counter = 1;
  function time() {
    setInterval(function () {
      counter = (counter % 360) + 1;
      document.getElementById("Timer").innerHTML = counter;
      if (counter === 60) {
        alert(
          "Your accuracy is " +
            ((similar / text.split(" ").length) * 100).toFixed(2)
        );
        counter = 0;
      }
    }, 1000);
  }

  let similar = 0;
  let diff = 0;

  let arr = text.split(" ");
  let arr1 = text1.split(" ");
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr1[index]) {
      similar++;
    } else {
      diff++;
    }
  }

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  if (start === true) {
    time();
  }
  start = false;

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <p className='container'>{text1}</p>
        <div className='mb-3'>
          <textarea
            id='mybox'
            rows='7'
            value={text}
            onChange={handleOnChange}
            className='form-control'></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>
          Convert to Upper case
        </button>
        <button className='btn btn-primary mx-3' onClick={handleLoClick}>
          Convert to Lower case
        </button>
      </div>

      <div className='container my-4'>
        <h1>Text summary</h1>
        <p>
          Words : {text.split(" ").length} characters : {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} minutes will take to read</p>
        <p>Similar words : {similar}</p>
        <p>Different words: {diff}</p>
        <p>
          Accuracy : {((similar / text.split(" ").length) * 100).toFixed(2)}%
        </p>
        <span id='Timer'></span>
      </div>
    </>
  );
}
