import React from 'react'
import '../components/Styles/Navbar.scss'; // Adjust the path as needed

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
      <a href="/home">home</a>
      <a href="/about">about</a>
      <a href="/profile">profile</a>
      <a href="/contact">contact</a>
    </div>
    </div>
  )
}

export default Navbar
