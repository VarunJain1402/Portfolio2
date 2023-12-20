import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_5wjhwed', //service Id
        'template_539b1yo', //template id
        refForm.current,
        'PdvjHuWK54EFoOO_h' //public key
      )
      .then(
        () => {
          alert('Messaage Successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message,please try again')
        }
      )
  }
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input
                    type='email'
                    name='email'
                    placeholder='email'
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder='Subject'
                    type='text'
                    name='subject'
                    required
                  />
                </li>
                <li>
                  <textarea placeholder='Message' name='message' required />
                </li>
                <li>
                  <input type='submit' className='flat-button' vallue='Send' />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
          Varun Jain
          <br />
          Indian
          <span>varunjain1402@gmail.com</span>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact
