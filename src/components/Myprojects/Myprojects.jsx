import React from 'react'
import "./Myprojects.css"
import heaimg from "../../assets/hea.PNG"



//functions for every buton and make toggle possible 
function react (){
  var reactSection = document.querySelector(".react-section")
  var jsSection = document.querySelector(".js-section")
    reactSection.classList.toggle("show-react-section")
    jsSection.classList.remove("show-js-section")
}

function javaScript (){
  var jsSection = document.querySelector(".js-section")
  var reactSection = document.querySelector(".react-section")
  jsSection.classList.toggle("show-js-section")
  reactSection.classList.remove("show-react-section")
}


function Myprojects() {
  return (

    <div className='p-container' id='projectscontainer'>

      <h1>My projects</h1>

      <h2>A selection of my projects.</h2>

      <button className='react-btn' onClick={react}>react</button>
      <button className='js-btn' onClick={javaScript}>JavaScript</button>
      
     

     <section className='react-section'>
<div className='p1'>
  <a href="https://google.com" target="_blank"><img src={heaimg} alt="" /></a>
  <h3>Portfolio</h3>
  <p>This is my portfolio web when I show some projects and a share a little bit about me.</p>
</div>
<div className='p2'>
<img src={heaimg} alt="" />
  <h3>Portfolio</h3>
  <p>This is my portfolio web when I show some projects and a share a little bit about me.</p>
</div>
<div className='p3'>
<img src={heaimg} alt="" />
  <h3>Portfolio</h3>
  <p>This is my portfolio web when I show some projects and a share a little bit about me.</p>
</div>
<div className='p4'>
<img src={heaimg} alt="" />
  <h3>Portfolio</h3>
  <p>This is my portfolio web when I show some projects and a share a little bit about me.</p>
</div>
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




