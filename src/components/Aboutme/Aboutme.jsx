import React from 'react'
import "./Aboutme.css"
import Picture from "../../assets/aboutme.png"

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
    <p>Bachelor degree in Mechatronic engineering, deeply in love with web development</p>
</div>
<div className='box2'>
    <h3>Music & Games</h3>
    <p>I can enjoy any kind of music, the same with sports but my favorite one it´s basketball</p>
    </div>

    </div>

<div className='caja2'>
<div className='box3'>
    <h3>Skills</h3>
    <p>Adaptability, problem-solving, teamwork, creativity, work ethic, quicklearner and responsible</p>
    </div>
<div className='box4'>
    <h3>Passions</h3>
    <p>Getting great results from what I share, learning something new every
         day, solve problems, learn more programming languages and technologies.</p>
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