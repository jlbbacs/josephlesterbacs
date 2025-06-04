import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Links from "./components/Links";


const App = ()=> {

  return(
    
    <Router>

    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />

    </Routes>
    <Links/>
    </Router>
  
  )
  }

export default App;