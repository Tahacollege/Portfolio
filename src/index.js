import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './ContactME';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


 function Write() {


  return (
    
    <div>
    <nav className="navbar">
            <h1>PortFolio</h1>
            <div className="navs">
            <a href="#home"><h4 className='h4'>Home</h4></a>
            <a href="#about"><h4 className='h4'>About</h4></a>
            <a href="#edu"><h4 className='h4'>Education</h4></a>
            <a href="#projects"><h4 className='h4'>Projects</h4></a>
            <a href="#contact"><h4 className='h4'>ContactME</h4></a>
            </div>
        </nav>
        <hr />
    <Home />
    <hr />
    <About />
    <hr />
    <Education />
    <hr />
    <Projects />
    <br />
  
    </div>
    
  )
}
ReactDOM.render(<Write />, document.getElementById("root"))
