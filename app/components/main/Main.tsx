import React from 'react'
import './main.css'

const Main = () => {
  return (
    <section className='home container max-w-5xl' id="home">
      <div className='intro'>
        <h1 className='text-2xl'>Patricia Lo</h1>
        <p>BCIT Computer Systems Technology New Grad | Junior Software Developer | Freelance Web Developer</p>
        <br />
        <a href='#contact' className='btn'>Contact Me</a>
        <a href='#contact' className='btn'>Download Resume</a>
      </div>
    </section>
  )
}

export default Main