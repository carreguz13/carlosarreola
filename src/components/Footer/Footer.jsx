import React from 'react'
import "./Footer.css"
import pdf from "../../assets/Resume.pdf";

function Footer() {
  return (
    <div className='footer-container'>

        <h3>© 2023 Carlos Arreola Guzman</h3>

        <h3>Front-End Developer<><br /></> Mechatronic Engineer</h3>

<div className='footerinside'>

<a className='resume' href={pdf} download target="_blank" rel="noreferrer">Resume</a>

  <a href='https://github.com/carreguz13' target="_blank" rel="noreferrer">Github</a>

        <a href='mailto:carreguz13@gmail.com' target="_blank" rel="noreferrer">Email</a>

        <a href='https://www.linkedin.com/in/carreguz/' target="_blank" rel="noreferrer">Linkedin</a>

        <a href='https://www.instagram.com/carlosarre13/' target="_blank" rel="noreferrer">Instagram</a>
        
        </div>

    </div>

  )

}

export default Footer