// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';



import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Route,
//   Link
// } from "react-router-dom";

import { BrowserRouter, Route, Routes,  } from "react-router-dom";  //




// let name  = "<b>diwakar</b>";// not allowed it will just print it same with the tags included
function App() {

  const [mode, setMode] = useState('light'); // dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);



  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled", "success");
      // document.title="textutils-Dark Mode";/

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has enabled", "danger");
    }
  }
  return (
    <>
        <BrowserRouter>
          <Navbar titles="Textutil" aboutText="About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analize below!.." mode={mode} />}></Route>
            </Routes>
          </div>
        </BrowserRouter> 
    </>
  );
}


export default App;