import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
   <footer>
    <div className='help'>
       
    <h4>About Us</h4>
       <ul>
        <li>our services</li>
        <li>privacy policy</li>
        <li>our services</li>
        </ul> 
    </div>
    <div className='help'>
    <h4>get help</h4>
    <ul>
        <li>our services</li>
        <li>privacy policy</li>
        <li>our services</li>
        </ul> 
    </div>
    <div className='help'>
        <h4>follow us</h4>
       <div className='icon'>
  <BsFacebook />
  <BsInstagram />
  <AiFillTwitterCircle />
  <AiFillLinkedin/>
</div> 
  
  </div>

   </footer>
  
  )
}

export default Footer