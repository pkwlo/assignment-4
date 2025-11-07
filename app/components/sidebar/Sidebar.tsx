import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <aside className='aside'>
        <a href="#home" className="sidebar-logo">
            <span className="logo-icon"></span>
            <span className="logo-text"><i className='icon-ghost'></i></span>
        </a>
        <nav className="sidebar-nav">
            <ul>
                <li><a href="#home"><i className='icon-home'></i></a></li>
                <li><a href="#about"><i className='icon-user'></i></a></li>
                <li><a href="#resume"><i className='icon-doc'></i></a></li>
                <li><a href="#portfolio"><i className='icon-briefcase'></i></a></li>
                <li><a href="#contact"><i className='icon-envelope'></i></a></li>
            </ul>
        </nav>
        <footer className="sidebar-footer">
        </footer>
    </aside>
  )
}

export default Sidebar