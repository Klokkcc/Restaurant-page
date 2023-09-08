
import React, { useRef } from "react";
import './App.css';
import Navbar from './navbar';
import Menu from './menu';
import Main from './main';
import Something from './something';
import About from './about';
import Contact from './contact';
import Map from './map';
import Stopka from './stopka';
function App() {
  const ref=useRef(null);
  return (
<div id="page">
    <Navbar/>
    <Main/>
    <Something/>
    <Menu/>
    <About/>
    <Contact/>
    <Map/>
    <Stopka/>
</div>
  );
}

export default App;
