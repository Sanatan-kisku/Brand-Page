import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav>
      <div className='logo'>
        <img src="/images/brand_logo.png" alt="brand-logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button className='redBtn'>Login</button>
      </nav>
    </div>
  )
}
