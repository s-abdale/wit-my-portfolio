import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <h1> This is the header! </h1>
      <Link to="/home" className='header-link'><p>Home</p></Link>
    </header>
  )
}

export default Header;