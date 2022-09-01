import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='con-container' id='contactcontainer'>

      <h1>Contact</h1>
      <h2> Let´s work toguether!</h2>

<form className='formbox'  action="https://formsubmit.co/0b0712c1f5c2cfb3395df0d7b088fcce" method="POST" >
   <div className='inputsbox'>

     <label className='l' htmlFor="name" >Name:</label>
     <input className='inputs' required type="text" id='name' name='Name' placeholder='Your name'/>
    

     <label className='l2' htmlFor="email">Email:</label>
     <input name="Email" pattern='[A-Za-z0-9._+-]+@[A-Za-z0-9 - _]+\.[a-z]{2,}' id='email' className='inputs' required type="text"  placeholder='Your email' title='must be a valid email address' />
    

     <label className='l3' htmlFor="message">Message:</label>
     <textarea name="Message" required placeholder='Your message' id='message'/>
     
     </div>

     <div className='center'>
    <input type="submit" value="Send Message" />
    
     </div>

     <input type="hidden" name="_next" value="http://localhost:3001"/>
     <input type="hidden" name="_captcha" value="false"/>

</form>

    </div>
  )
}

export default Contact
