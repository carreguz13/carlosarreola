import React from 'react'
import "./Myprojects.css"
import imgp1 from "../../assets/toto.PNG"




function Myprojects() {
  return (

    <div className='p-container' id='projectscontainer'>

      <h1>My projects</h1>

      <h2>A selection of my projects.</h2>

      <div className='grid'>

       <div className='project1' >
        <div className='contentp1'>
       <a href="https://google.com.mx"> 
        <img className='img1' src={imgp1} alt="" />
        </a>
          <h5 >Portfolio react</h5>
          <p>This is a react portfolio make with peace and love 
            for everyone reading this 
          </p>
        </div>
        </div>
        <div className='project2'>
       
          <h4></h4>
          
        </div>
        <div className='project3'>
        <img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
      </div>

    </div>
  )
}


export default Myprojects