import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['V', 'a', 'r', 'u', 'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r'
  ]
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    },4000)
  },[])
  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            Hi,
            <br />
            I'm
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>FrontEnd Developer/ ReactJs Enthusiast</h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default Home
