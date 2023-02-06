import React from 'react'
import "./Myprojects.css"
import portimg from "../../assets/port.PNG"
import libreriaimg from "../../assets/libreria.PNG"
import flipperimg from "../../assets/flipper.PNG"
import counterimg from "../../assets/counter.PNG"
import reviewsimg from "../../assets/reviews.PNG"
import navbarimg from "../../assets/navbar.PNG"
import angularimg from "../../assets/angular.PNG"






//functions for every buton and make toggle possible 
function react (){
  var reactSection = document.querySelector(".react-section")
  var jsSection = document.querySelector(".js-section")
  var angularSection = document.querySelector(".angular-section")
  var vueSection = document.querySelector(".vue-section")

    reactSection.classList.toggle("show-react-section")
    jsSection.classList.remove("show-js-section")
    angularSection.classList.remove("show-angular-section")
    vueSection.classList.remove("show-vue-section")
}

function javaScript (){
  var jsSection = document.querySelector(".js-section")
  var reactSection = document.querySelector(".react-section")
  var angularSection = document.querySelector(".angular-section")
  var vueSection = document.querySelector(".vue-section")

  jsSection.classList.toggle("show-js-section")
  reactSection.classList.remove("show-react-section")
  angularSection.classList.remove("show-angular-section")
  vueSection.classList.remove("show-vue-section")

}

function angular (){
  var jsSection = document.querySelector(".js-section")
  var reactSection = document.querySelector(".react-section")
  var angularSection = document.querySelector(".angular-section")
  var vueSection = document.querySelector(".vue-section")

  jsSection.classList.remove("show-js-section")
  reactSection.classList.remove("show-react-section")
  angularSection.classList.toggle("show-angular-section")
  vueSection.classList.remove("show-vue-section")
}

function vue (){
  var jsSection = document.querySelector(".js-section")
  var reactSection = document.querySelector(".react-section")
  var angularSection = document.querySelector(".angular-section")
  var vueSection = document.querySelector(".vue-section")

  jsSection.classList.remove("show-js-section")
  reactSection.classList.remove("show-react-section")
  angularSection.classList.remove("show-angular-section")
  vueSection.classList.toggle("show-vue-section")
}


function Myprojects() {
  return (

    <div className='p-container' id='projectscontainer'>

      <h1>My projects</h1>

      <h2>A selection of my projects.</h2>
<div>
      <button className='react-btn' onClick={react}>react</button>
      <button className='js-btn' onClick={javaScript}>JavaScript</button>
      <button className='angular-btn' onClick={angular}>Angular</button>
      <button className='vue-btn' onClick={vue}>Vue</button>

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
     


     <section className='angular-section'>
<div className='p9'>
  <a href="https://carreguz13.github.io/angular-bootstrap/" target="_blank" rel='noreferrer'><img src={angularimg} alt="" /></a>
  <h3>Angular template</h3>
  <p>Angular template site with 3 pages and bootstrap components</p>
</div>
<div className='p10'></div>
<div className='p11'></div>
<div className='p12'></div>
     </section>




     <section className='vue-section'>
<div className='p13'></div>
<div className='p14'></div>
<div className='p15'></div>
<div className='p16'></div>
     </section>




     </div>
     
  )
}

export default Myprojects




