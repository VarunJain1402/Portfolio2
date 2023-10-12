import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact
} from '@fortawesome/free-brands-svg-icons'
  import './index.scss'
import '../Layout/index.scss'
  const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi! I am a very ambitious front-end devleoper looking for a role in
            established It compnay with the opportunity to work with the latest
            technologies on challenging and diverse projects
          </p>
          <p>
            I'm quitely confident, naturally curious and working on improving my
            skills and talent pool.
          </p>
          {/* <p></p> */}
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faJsSquare} color='' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faBootstrap} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}
export default About
