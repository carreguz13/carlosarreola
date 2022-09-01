import React from 'react'
import "./Aboutme.css"
import Picture from "/users/carlos/Desktop/new portfolio/carlosarreola/src/assets/aboutme.png"

function Aboutme() {
  return (
    <div className='aboutme-container' id='aboutmecontainer'>
        <h1>About me</h1>
        <h2>Welcome to Carlos World</h2>
        <div className='photos-boxes-box'>

<div className="boxes-box" >

    <div className='caja1'>

<div className='box1'>
    <h3>Education</h3>
    <p>lorem impusufhwbf dhfbfgfdlbf fdghfdbfygdbf dfgdsyfgdghvytg</p>
</div>
<div className='box2'>
    <h3>Music & Games</h3>
    <p>lorem impusufhwbf dhfbfgfdlbf fdghfdbfygdbf dfgdsyfgdghvytg</p>
    </div>

    </div>

<div className='caja2'>
<div className='box3'>
    <h3>Education</h3>
    <p>lorem impusufhwbf dhfbfgfdlbf fdghfdbfygdbf dfgdsyfgdghvytg</p>
    </div>
<div className='box4'>
    <h3>Music & Games</h3>
    <p>lorem impusufhwbf dhfbfgfdlbf fdghfdbfygdbf dfgdsyfgdghvytg</p>
    </div>

    </div>
</div>

<div className='photo-box'>
<img src={Picture} alt="" />
</div>

        </div>

    </div>
  )
}

export default Aboutme