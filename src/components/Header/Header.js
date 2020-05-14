import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='navbar'>
      <ul className='main-nav'>
        <li><a className='title' href="/">SW</a></li>
        <li><a href="/">Cards</a></li>
        <li><a href="/">Series</a></li>
        <li><a href="/">Interactive</a></li>
        <li><a href="/">Company</a></li>
      </ul>
      <h1>StartWars Card Trade Widget </h1>
    </div>
  )
}

export default Header
