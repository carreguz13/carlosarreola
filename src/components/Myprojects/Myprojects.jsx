import React from 'react'
import "./Myprojects.css"



//function for toggle event in buttons
var reactSection = document.querySelector(".react-section")
var jsSection = document.querySelector(".js-section")

const react = () => {
  reactSection.classList.toggle("show-react-section")
  jsSection.classList.remove("show-js-section")
 }

const javascript = () => {
  jsSection.classList.toggle("show-js-section")
  reactSection.classList.remove("show-react-section")
}










function Myprojects() {
  return (

    <div className='p-container' id='projectscontainer'>

      <h1>My projects</h1>

      <h2>A selection of my projects.</h2>

      <button className='react-btn' onClick={react}>react</button>
      <button className='js-btn' onClick={javascript}>JavaScript</button>
      
     

     <section className='react-section'>
<div className='p1'></div>
<div className='p2'></div>
<div className='p3'></div>
<div className='p4'></div>
     </section>

     <section className='js-section'>
<div className='p1'></div>
<div className='p2'></div>
<div className='p3'></div>
<div className='p4'></div>
     </section>





    </div>
  )
}

export default Myprojects





