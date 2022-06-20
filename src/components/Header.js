import React from 'react'
import '../styles.css'
import troll from '../images/troll-face.png'

const Header = () => {
  return (
    <div className='nav-bar'>
        <div className='logo'>
        <img src={troll} alt="" />
        <h2>Meme Generator</h2>
        </div>
      
        <h3>React Project - 3</h3>
    </div>
  )
}

export default Header