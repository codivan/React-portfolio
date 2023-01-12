import React from 'react'
import './About.css';
import ME from '../../assets/aboutimage.jpg' /* me-about*/
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { SlFolderAlt } from 'react-icons/sl'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>30+ Worldwide </small>
            </article>
            <article className='about__card'>
              <SlFolderAlt className='about__icon' />
              <h5>Projects</h5>
              <small>40+ Completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rerum inventore saepe tenetur deleniti,
            voluptatibus odit sapiente mollitia laudantium vitae reprehenderit fugiat aut.
            Eligendi aliquam molestiae rem vitae, odio est.
          </p>

          <a href="#contact" className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About