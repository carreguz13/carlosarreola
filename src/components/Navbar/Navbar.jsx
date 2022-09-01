import React from 'react'
import './Navbar.css'
import {Link} from "react-scroll"



function Navbar() {
  return (
    <div className='navbar-container' >
      
      <div className='navbar-name'>
      <Link className='nameheader' to="profilecontainer" spy={true} smooth={true} offset={-200} duration={1000}>Carlos Arreola Guzman</Link>
        
      </div>
      <div className='navbar-menu'>
      <Link className='aservices' to="services" spy={true} smooth={true} offset={100} duration={1000}>Services</Link>
      <Link className='aprojects' to="projectscontainer" spy={true} smooth={true} offset={-165} duration={1000}>Projects</Link>
      <Link className='aabout' to="aboutmecontainer" spy={true} smooth={true} offset={-120} duration={1000}>About me</Link>
      <Link className='acontact' to="contactcontainer" spy={true} smooth={true} offset={-50} duration={1000}>Contact</Link>
      </div>
      <div className='navbar-icons'>

      <a href="https://api.whatsapp.com/send?phone=528127179069" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
      <a href="https://github.com/carreguz13" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.instagram.com/carlosarre13/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
      
      </div>
      
    </div>
  )
}

export default Navbar




