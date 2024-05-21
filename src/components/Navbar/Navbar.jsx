import React from 'react'
import './Navbar.scss'


export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className="logo">
        <h1>
          <img src="/images/navigation.png" alt="navigation" />
          Estatien
        </h1>
      </div>
      <nav>
        <ul>
          <li className='active'>Home</li>
          <li>About Us</li>
          <li>Properties</li>
          <li>Services</li>
        </ul>
      </nav>
      <div className="Navbar__btn">
        <button>Contact Us</button>
      </div>
    </div>
  )
}
