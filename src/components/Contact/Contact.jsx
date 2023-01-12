import React from 'react'
import './Contact.css';
import {TfiEmail} from 'react-icons/tfi'
import {SiMessenger} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eizrgbl', 'template_iu5022f', form.current, 'NVkC4zY1qk4MOaBs7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  }; 
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contac Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cacha_1998@hotmail.com</h5>
            <a href="mailto:cacha_1998@hotmail.com" target="_blank">Send a message</a>

          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Ivan David Campos Sosa</h5>
            <a href="https://m.me/ivansupercluster/" target="_blank">Send a message</a>

          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+595 983851181</h5>
            <a href="https://wa.me/595983851181?text=Hola" target="_blank">Send a message</a>

          </article>

        </div>
        {/*END OF CONTACT OPTIONS */}
        
        <form href={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> 
      </div>

    </section>
  )
}

export default Contact