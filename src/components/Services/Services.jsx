import React from 'react'
import './Services.css'
import image from "../../assets/photo.png"

function Services() {
  return (
    <div id='services' className='services-container'>
        <div className='services-first'>
          <h1 id='srvicesstop'>My services </h1>
          <h2>The most creative intuitive workmate.</h2>
       
          <img src={image} alt="services"/>
         
          
        </div>
      <div className='services-second'>
        <div className='parrafo1' >
          <div className='top' >
        <i class="fa-solid fa-arrow-pointer"/>
        <div>
        <h1>Developer Skills</h1>
        </div>
        </div>

        <div className='down' >
          <p>More than 4+ years of working experience and 2+ years
working as a front-end developer. Proven ability to collaborate effectively
with team members and customers. Facilitating projects from concept to launch.</p>
        </div>
        </div>

        <div className='parrafo2' >
          <div className='top2' >
        <i class="fa-solid fa-people-group"/>
        <div>
        <h1>Dedicated Team Member</h1>
        </div>
        </div>

        <div className='down2' >
          <p>Highly adaptable, flexible professional who embraces teamwork, a Goal-Oriented Team member that is always looking to help others.</p>
        </div>
        </div>

        <div className='parrafo3' >
          <div className='top3' >
        <i class="fa-solid fa-headphones"/>
        <div>
        <h1>Exceptional Communication Skills</h1>
        </div>
        </div>

        <div className='down3' >
          <p>Verbal, written, organizational and interpersonal communication skills naturally gravitate towards working with others. </p>
        </div>
        </div>
        

       

      </div>
        </div>
  )
}

export default Services

