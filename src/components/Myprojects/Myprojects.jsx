import React from 'react'
import "./Myprojects.css"
import imgpro1 from "/users/carlos/Desktop/new portfolio/carlosarreola/src/assets/toto.PNG"
import imgpro2 from "/users/carlos/Desktop/new portfolio/carlosarreola/src/assets/sailing.PNG"



function Myprojects() {
  return (

    <div className='p-container' id='projectscontainer'>

      <h1>My projects</h1>

      <h2>A selection of my best projects.</h2>

      <div className='img-box'>
       <a className='primera' href="https://carlosarreola.me" target="_blanck">  <img src={imgpro1} alt="" />  </a>
       <a className='segunda' href="https://sailingmazatlan.com/" target="_blanck">  <img src={imgpro2} alt="" />  </a>
      

      </div>

    </div>
  )
}


export default Myprojects