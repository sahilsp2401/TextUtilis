import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [url, setUrl] = useState("/")
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      },1500);
  }
  const toggleUrl = (url)=>{
    setUrl(url)
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","success")
      // document.title = 'TextUtils-DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode} url = {url} />
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode = {mode} toggleUrl = {toggleUrl} />}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode = {mode} toggleUrl = {toggleUrl} showAlert={showAlert} />}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
