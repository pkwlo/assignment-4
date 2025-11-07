import React from 'react'
import { FiMail } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import './main.css'

const Main = () => {
  return (
    <section className='home container max-w-5xl' id="home">
      <div className='intro'>
        <h1 className='text-2xl'>Patricia Lo</h1>
        <p>BCIT Computer Systems Technology New Grad | Junior Software Developer | Freelance Web Developer</p>
        <br />
        {/* <a href='#contact' className='btn'>Contact Me</a>
        <a href='/Patricia_Lo_Resume.pdf' download className='btn' aria-label='Download resume'>Download Resume</a> */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition shadow-sm"
          >
            <FiMail className="text-lg" />
            Contact Me
          </a>

          <a
            href="/Patricia_Lo_Resume.pdf"
            download
            aria-label="Download resume"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition shadow-sm"
          >
            <FiDownload className="text-lg" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Main