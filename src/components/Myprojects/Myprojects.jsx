import React from 'react'
import "./Myprojects.css"





function Myprojects() {
  return (

    <div className='p-container' id='projectscontainer'>

      <h1>My projects</h1>

      <h2>A selection of my projects.</h2>

      <div className='grid'>

      <div className='p1'>
  <a href="https://carreguz13.github.io/Libreria/" target="_blank"><div className='background1'></div></a>
  <h2>Book Register React.js</h2>
</div>


<div className='p1'>
  <a href="https://carlosarreola.me/" target="_blank"><div className='background2'></div></a>
  <h2>Portfolio React.js</h2>
</div>

<div className='p1'>
  <a href="https://carreguz13.github.io/angular-bootstrap/" target="_blank"><div className='background3'></div></a>
  <h2>Angular/bootstrap Template</h2>
</div>

      </div>




      <div className='grid2'>

<div className='p1'>
  <a href="https://www.plenitude.mx/" target="_blank"><div className='background4'></div></a>
  <h2>Wordpress Site</h2>
</div>

<div className='p1'>
  <a href="https://conselva.org/" target="_blank"><div className='background5'></div></a>
  <h2>Wordpress Site</h2>
</div>

<div className='p1'>
  <a href="https://heaconsultoria.com/" target="_blank"><div className='background6'></div></a>
  <h2>Wordpress Site</h2>
</div>

      </div>

      





    </div>
  )
}


export default Myprojects