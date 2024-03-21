import React from 'react'
import './navbar.css'
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'


function Navbar() {
  return (
  <div className='navBar'>
    <div className='logoDiv'>
      <BiLogoMediumOld className="icon" />
      <span>Twende Safaris</span>
    </div>
    <div className='menu'>
      <ul>
        <li className='navList'>
          Destination
        </li>
        <li className='navList'>
          About Us
        </li>
        <li className='navList'>
          Testimonials
        </li>
        <li className='navList'>
          Gallery
        </li>
      </ul>
      {/* icon to close navbar */}
      <AiFillCloseCircle className='icon' />
    </div>
    <button className="signUpBtn btn">
        Sign Up
    </button>
    {/* icon to toggle navBar */}
    <PiDotsNineBold className='icon' />
  </div>
    
  )
}

export default Navbar