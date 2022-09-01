import React from 'react'
import './Profile.css'
import {Link} from "react-scroll"

function Profile() { 
  return (
    
<div className='profile-container' id='profilecontainer'>
  <div className='texto1-section'>
<div id='texto1'>
<span class="material-symbols-outlined">
waving_hand
</span>
<div>
  <h1>Hi! I am</h1>
  <h2>Carlos</h2>
  </div>
</div>
</div>
<div className='picture-section'>
    <section class="neon-block">
        <div class="block">
          <span class="rainbow"></span>
        </div>
      </section>
      <h1>Front-End Developer</h1>
      <h2>Based in Sacramento, United States </h2>
      <Link className='botonprofile' to="contactcontainer" spy={true} smooth={true} offset={-100} duration={1000}>Let´s work!  </Link>
      </div>

<div className='texto2-section'>
 
<div id='texto2'>
  <h1>CSS Lover</h1>
  <i class="fa-solid fa-heart"></i>

  </div>

</div>

      </div>


  )
}

export default Profile