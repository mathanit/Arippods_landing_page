import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import MenuIcon from '../menuicon/MenuIcon'
import logo from "../../assets/img/apple.png"
function Navbar() {
  function toggleMenu(){
    const menu=document.getElementById("menu");
    menu.classList.toggle("active");
  }
  return (
    <div className="navbarposition">

    <div className='navbar'>
      
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul className="menu" id="menu">
                <li onClick={toggleMenu}> <a href="#home">Home</a> </li>
                <li onClick={toggleMenu}><a href="#product">Product</a></li>
                <li onClick={toggleMenu}><a href="#future">Future</a></li>
                <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
            </ul>
            
        <div  className="checkbtn" onClick={toggleMenu} id="checkbtn">
           <MenuIcon/>
        </div>
        
    </div>
    </div>
  )
}

export default Navbar