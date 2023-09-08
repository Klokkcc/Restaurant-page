import './nabar.css';
import React, { useEffect } from 'react';


function Navbar() {
  
  const go1=(e)=>{
    document.querySelector('#menu').scrollIntoView({
        behavior: 'smooth'
      });


  }
const go2=()=>{
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
      });
}
const go3=()=>{
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
}
  
  
  return (
    <nav id="navbar">
    <ul id="elem">
    <li id="el">
        <a  onClick={go1} >
            MENU
        </a>
    </li>
    <li id="el" >
        <a  onClick={go2} >
            ABOUT
        </a>
    </li>
    <li id="el">
        <a onClick={go3} >
            CONTACT
        </a>
    </li>
        
       
        
    </ul>
</nav>
  );
}

export default Navbar;
