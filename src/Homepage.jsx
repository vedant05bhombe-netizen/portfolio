import React, { useState } from 'react'
import drift from './WhatsApp Image 2025-10-06 at 16.50.54_31df6e1d.jpg'
import './Homepage.css'
import About from './About'
import project from './Project'
import contact from './Contact'
import drift1 from './icons8-github-64.png'
import drift2 from './email.png'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import Contact from './Contact'
import drift3 from './icons8-menu.svg'
import drift4 from './x-button.png'

import drift6 from './info.png'
import drift7 from './home-svgrepo-com.svg'
import drift8 from './project-svgrepo-com (1).svg'
import drift9 from './contact-book-1-svgrepo-com.svg'

const Homepage = () => {
  const navigate = useNavigate();
  const [isopen, Setisopen] = useState(false)

  return (
    <>
      <div>

        {isopen && (
          <div className='burger'>

            <div onClick={() => Setisopen(!isopen)} className='pxx' > <img className='px' src={drift4} /> </div>

            <div className='na1'>
              <div className='home'>
                <div><img className='Home' src={drift7} /> </div>
                <Link to='/'>  <label onClick={() => Setisopen(!isopen)} id='active' className='label1'>Home</label></Link>
              </div>

              <div className='project'>
                <div><img className='Project' src={drift8} /> </div>
                <Link to='/project'><label className='label2'>Projects</label></Link>
              </div>

              <div className='about'>
                <div><img className='About' src={drift6} /> </div>
                <Link to='/about'> <label className='label3'>About</label></Link>
              </div>
              <div className='contact'>
                <div><img className='Contact' src={drift9} /> </div>
                <Link to='/contact'><label className='label4'>Contact</label></Link>
              </div>
            </div>
          </div>
        )}


        <div className='title'>
          <div><h3>Vedant</h3></div>
          <div className='nav'>
            <div> Menu </div>
            <img onClick={() => Setisopen(!isopen)} className='menu' src={drift3} />
          </div>
        </div>


        <div className='para'>
          <div><p>Available for work</p></div>
        </div>
        <div className='con'><h1>Hi, I'm</h1></div>
        <div className='con'><h2>Vedant</h2></div>
        <div className='tag'>Full Stack Developer | Competitive Programmer</div>
        <div className='tagline'>
          <p className='pax'>Merging strong problem-solving skills with modern web technologies to build smarter solutions.</p>
        </div>


        <div className='container'>
          <div className='photo'><img src={drift} /></div>
        </div>


        <div className='button'>
          <button onClick={() => navigate('/project')}>View Projects</button>
          <button onClick={() => navigate('/contact')}>Get in Touch</button>
        </div>


        <div className='main'>
          <div className='skill'><h2>Who I Am</h2></div>
          <h2 className='info'>"I'm a B.Tech student passionate about building web apps and solving problems with DSA. I love designing clean, functional interfaces and scalable backend systems."</h2>
        </div>


        <div className='infomain'>
          <div className='skill'><h2>Skills / Tech-Stack</h2></div>
          <div className='maininfo'>
            <label className='info'>Java</label>
            <label className='info'>React</label>
            <label className='info'>Spring Boot</label>
            <label className='info'>DSA</label>
            <label className='info'>PostgreSQL</label>
            <label className='info'>Maven</label>
          </div>
        </div>


        <div className='skill'><h2>Featured Projects</h2></div>
        <div className='Maincard'>

          <div className='card1'>
            <h3>FullStack - React , Spring Auth</h3>
            <p>Full-stack app using React (frontend) and Spring Boot (backend). User authentication with JWT, PostgreSQL for storage. Built with Maven, follows REST principles.</p>
            <div className='tech-tags'><span>React</span><span>Spring Boot</span><span>PostgreSQL</span></div>
            <button onClick={() => navigate('/project')} className='project-btn'>View Project →</button>
            <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
          </div>

          <div className='card2'>
            <h3>Hospital Management System</h3>
            <p>Backend for Hospital Management System built with Spring Boot. Uses PostgreSQL for data storage and management. Built with Maven, exposes RESTful APIs for patients, doctors, and appointments.</p>
            <div className='tech-tags'><span>Spring Boot</span><span>Maven</span><span>Postman</span></div>
            <button onClick={() => navigate('/project')} className='project-btn'>View Project →</button>
            <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
          </div>

          <div className='card3'>
            <h3>CineSearch - A Movie Database</h3>
            <p>Movie database app built with React. Fetches and displays data from the OMDb API. Features search and detailed movie views.</p>
            <div className='tech-tags'><span>React</span><span>External Api</span><span>Node js</span></div>
            <button onClick={() => navigate('/project')} className='project-btn'>View Project →</button>
            <button className='project-btn2'>Visit Github →</button>
          </div>
        </div>

        <div className='moreover'><p>“Want to see more projects? Click ‘View My Work’”</p></div>
        <div className='moreover'><p>“Interested in collaborating? Let’s get in touch!”</p></div>

        <div className='button'>
          <button onClick={() => navigate('/project')}>View My Work</button>
          <button onClick={() => navigate('/contact')}>Get in Touch</button>
        </div>


        <footer className='height'>
          <div className='footer'><p>&copy; 2025 Vedant — Full-Stack Dev | Spring Boot • PostgreSQL • React</p></div>
          <div className='link'>
            <div className='links'><a href='https://github.com/vedant05bhombe-netizen' target='_blank' rel='noopener noreferrer'><img src={drift1} /></a></div>
            <div className='links'><a href='https://www.linkedin.com/in/vedant-bhombe-01a865290/' target='_blank' rel='noopener noreferrer'>in</a></div>
            <div className='links'><a href='mailto:vedant05bhombe@gmail.com'><img className='img2' src={drift2} /></a></div>
          </div>
        </footer>
        <div className='height'></div>
      </div>
      <div className='foot'></div>
    </>
  )
}

export default Homepage