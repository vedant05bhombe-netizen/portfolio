import React from 'react'
import { Link } from 'react-router';
import Contact from './Contact'
import drift3 from './icons8-menu.svg'
import { useState } from 'react';
import './About.css'

import drift11 from './info.png'
import drift12 from './home-svgrepo-com.svg'
import drift13 from './project-svgrepo-com (1).svg'
import drift14 from './contact-book-1-svgrepo-com.svg'
import drift15 from './x-button.png'

const About = () => {
  const[isopen , Setisopen] = useState(false)
  return (
    <>
      <div>
        <div>
          { isopen && (
            <div className='burger'>
 <div onClick={() => Setisopen(!isopen)} className='pxx' > <img className='px' src={drift15} /> </div>

              <div className='na1'>

                <div className='home'>
                  <img className='Home' src={drift12} />
                   <Link to="/"><label className='label1 '>Home</label> </Link>
                </div>
                <div className='project'>
                  <img className='Project' src={drift13} />
                <Link to="/project"><label className='label2'> Projects</label></Link>
                </div>
                <div className='about' >
                  <img className='About' src={drift11} />
                <Link to="/about"><label onClick={() => Setisopen(!isopen)} id='active' className='label3'> About </label></Link>
                </div>
                <div className='contact' >
                  <img className='Contact' src={drift14} />
                <Link to="/contact"><label className='label4'> Contact</label></Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='title'>
          <div>
            <h3> About Me </h3>
          </div>
          <div className='nav'>
            <div> Menu </div>
            <img onClick={() => Setisopen(!isopen)} className='menu' src={drift3}/>
          </div>
        </div>
      </div>
      <>
        <section className="about-section">
          <div className="about-intro">
            <h1>About Me </h1>
            <p>
              I’m <strong>Vedant Bhombe</strong>, a developer focused on building high-performance, clean, and scalable applications using modern web technologies. I enjoy designing systems that are both efficient and elegant.
            </p>
            <p>
              My expertise lies in <strong>frontend and backend development</strong>, primarily with <strong>React, Spring Boot, and PostgreSQL</strong>. I love exploring new frameworks, writing maintainable code, and improving application architecture.
            </p>
          </div>
        </section>

        {/* ===== Tech Stack ===== */}
        <section className="tech-stack">
          <h2> Tech Stack</h2>
          <div className="stack-grid">
            <div>
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML / CSS</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div>
              <h3>Backend</h3>
              <ul>
                <li>Java (Spring Boot)</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>
            <div>
              <h3>Tools & Workflow</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Netlify</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Coding Focus / Interests ===== */}
        <section className="focus-area">
          <h2>⚙️ What I’m Focused On</h2>
          <ul>
            <li>Building full-stack apps with clean architecture</li>
            <li>Improving UI/UX through minimal and responsive design</li>
            <li>Optimizing backend performance</li>
            <li>Exploring system design and scalable APIs</li>
          </ul>
        </section>

        {/* ===== CTA ===== */}
        <section className="contact-cta">
          <h2> Open for Collaborations</h2>
          <p>
            Let’s work together or discuss ideas — reach me at{" "}
            <a href="mailto:vedant05bhombe@gmail.com">vedant05bhombe@gmail.com</a> or connect on{" "}
            <a href="https://www.linkedin.com/in/vedant-bhombe-01a865290/">LinkedIn</a>.
          </p>
        </section>

        {/* ===== Footer ===== */}
        <footer className="footer">
          <p>© 2025 Vedant Bhombe | Built with React ⚛️</p>
        </footer>
      </>
    </>
  )
}

export default About
