import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useState } from 'react'
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className='nav-bar'>
      
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
        <NavLink
        onClick={() => setShowNav(false)}
          // exact='true'
          activeclassname='active'
          className='about-link'
          to='/about'
        >
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
        <NavLink
        onClick={() =>{ return setShowNav(false)}}
          // exact='true'
          activeclassname='active'
          className='portfolio-link'
          to='/portfolio'
        >
          <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
        </NavLink>
        <NavLink
        onClick={() => setShowNav(false)}
          exact='true'
          activeclassname='active'
          className='contact-link'
          to='/contact'
        >
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
        
      </nav>

      <ul>
        <li>
          <a
            target='_blank'
            role='noreferrer'
            href='https://www.linkedin.com/in/varun-jain-0796b3219/'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            target='_blank'
            role='noreferrer'
            href='https://github.com/VarunJain1402'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(!showNav)}
        icon={faBars}
        color='#ffd700'
        size="3x"
        className='hamburger-icon'
      />
    </div>
  )
}
export default Sidebar
