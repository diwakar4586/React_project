import React, { useState } from 'react'

import PropTypes from 'prop-types'



export default function Textform(props) {
  const handleClick = () => {
    console.log("btn is click to convert uppercase");
    // setText("you have clicked and upded the state text");
    let newText = text;
    setText(newText.toUpperCase());
    props.showAlert("Converted to uppercase", "success");


  }
  const clearAll = () => {
    setText('');
    props.showAlert("Text Cleard", "success");
  }

  const handleCopy = () => {
    var x = document.getElementById("myBox");
    props.showAlert("Text copied","success");
    // console.log(x);

    x.select();

    // document.execCommand('copy'); // works only when the text is selected and this is old
    navigator.clipboard.writeText(x.value);// this method doesnot need to select the text


    x.blur();

    props.showAlert("Text copied ", "success");
  }

  const handleSpaces = () => {
    const txtArea = document.getElementById("myBox");
    setText(txtArea.value.replace(/\s+/g, ' '));



  }

  const handleLoClick = () => {
    setText(text.toLowerCase());


  }
  const handleOnchange = (event) => {
    // console.log("onChange");
    // console.log(event);
    setText(event.target.value);
  }
  // const [text, setText] = useState('Enter the text');
  const [text, setText] = useState('');
  // text = "new Text"; // wrong-way
  //   setText("Updated text is here");
  
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

        <div className="mb-3">
          <h1>{props.heading}</h1>
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>UpperCase</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>LowerCase</button>
        <button className="btn btn-danger mx-2" onClick={clearAll}>Clear</button>
        <button className="btn btn-danger mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleSpaces}>Remove Extra spaces</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Your Text Summary</h2>
        {/* <p>{text.split(" ").length} words, {text.length} characters </p>  */}
        {/* <p>
          {text.trim() === "" ? 0 : text.trim().split(" ").length} words, {text.length} characters
        </p> */}
        <p>
          {text.trim() === ""
            ? <span style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>0 words, 0 characters</span>
            : text
              .trim()
              .split(/\s+/) // Split by one or more whitespace characters
              .filter((word) => word !== "") // Filter out empty strings
              .length + " words, " + text.length + " characters"}
        </p>





        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>

      </div>
    </>

  )
}

Textform.propTypes = {
  heading: PropTypes.string,
}