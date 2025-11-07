import React from 'react'
import './resume.css'
import Skills from './Skills'
import Education from './Education'

const Resume = () => {
  return (
    <section className='resume container' id="resume">
      <div className='intro'>
        <p className='home__education'>
            <Education />
            <Skills />
        </p>
      </div>
    </section>
  )
}

export default Resume