import React from 'react'
import "./Myprojects.css"
import portimg from "../../assets/port.PNG"
import libreriaimg from "../../assets/libreria.PNG"
import flipperimg from "../../assets/flipper.PNG"
import counterimg from "../../assets/counter.PNG"
import reviewsimg from "../../assets/reviews.PNG"
import navbarimg from "../../assets/navbar.PNG"





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
<div>
      <button className='react-btn' onClick={react}>react</button>
      <button className='js-btn' onClick={javaScript}>JavaScript</button>
      </div>
     

     <section className='react-section'>
<div className='p1'>
  <a href="https://carlosarreola.me/" target="_blank" rel='noreferrer'><img src={portimg} alt="" /></a>
  <h3>Portfolio</h3>
  <p>Portfolio web site, when I show some projects and share a little bit about me</p>
</div>
<div className='p2'>
<a href="https://carreguz13.github.io/Libreria/" target="_blank" rel='noreferrer'><img src={libreriaimg} alt="" /></a>
  <h3>Library</h3>
  <p>Application to save, edit and delete books information</p>
</div>
<div className='p3'></div>
<div className='p4'></div>
     </section>



     <section className='js-section'>
<div className='p5'>
  <a href="https://carreguz13.github.io/color-flipper/" target="_blank" rel='noreferrer'><img src={flipperimg} alt="" /></a>
  <h3>Color flipper</h3>
  <p>Change background color randomly by clicking a button</p>
</div>
<div className='p6'>
<a href="https://carreguz13.github.io/counter/" target="_blank" rel='noreferrer'><img src={counterimg} alt="" /></a>
  <h3>Counter</h3>
  <p>Increase, decrease and reset</p>
</div>
<div className='p7'>
<a href="https://carreguz13.github.io/reviews/" target="_blank" rel='noreferrer'><img src={reviewsimg} alt="" /></a>
  <h3>Reviews</h3>
  <p>Navigate into multiple reviews in order or randomly</p>
</div>
<div className='p8'>
<a href="https://carreguz13.github.io/navbar/" target="_blank" rel='noreferrer'><img src={navbarimg} alt="" /></a>
  <h3>Navbar</h3>
  <p>Navbar component with responsive toggle function</p>
</div>
     </section>
     
     </div>
     
  )
}

export default Myprojects




