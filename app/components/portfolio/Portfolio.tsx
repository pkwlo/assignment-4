import React from 'react'
import Work from './Work'
import Hackathon from './Hackathon'
import Personal from './Personal'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className='portfolio container' id="portfolio">
      <div className='intro'>
        <Work />
        <Hackathon />
        <Personal />
      </div>
    </section>
  )
}

export default Portfolio