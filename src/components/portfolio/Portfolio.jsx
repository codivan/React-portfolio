import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/RickandMortyApp.jpeg'
import IMG2 from '../../assets/WeatherApp.jpeg'
import IMG3 from '../../assets/pokedexApi.jpeg'
import IMG4 from '../../assets/Boxshadow.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {id:1,
    image:IMG1,
    title:'Rick and Morty Api',
    github:'https://github.com/codivan',
    demo: 'https://thunderous-souffle-ff336c.netlify.app/'
  },

  {id:2,
    image:IMG2,
    title:'Weather App',
    github:'https://github.com/codivan',
    demo: 'https://earnest-kheer-79af1d.netlify.app/'
  },

  {id:3,
    image:IMG3,
    title:'Pokedex App',
    github:'https://github.com/codivan',
    demo: 'https://unrivaled-capybara-4ddeb3.netlify.app/'
  },

  {id:4,
    image:IMG4,
    title:'Box Shadow Generator',
    github:'https://github.com/codivan',
    demo: 'https://inquisitive-mooncake-ea30ed.netlify.app/'
  }



];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
            data.map(({id, image, title, github, demo}) =>{
            return (

              <article key={id} className='portfolio__item'>

          <div className="portfolio__item-image">
            <img src={image} alt={title} />

          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>
            )
             } )


        }


      </div>
    </section>
  )
}

export default Portfolio