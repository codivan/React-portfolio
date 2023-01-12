import React from 'react'
import './Footer.css';

const Footer = () => {
  return (

    <footer>
      <a href="#" className='footer__logo'>CODIVAN</a>
      <ul className='permalinks'>
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#portfolio"></a>Portfolio</li>
        <li><a href="#contact"></a>Contact</li>

      </ul>

    <div className="footer__copyright">
      <small>&copy; CODIVAN. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer