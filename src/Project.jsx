import React from 'react'
import { Link } from 'react-router';
import Contact from './Contact'
import './Project.css'
import drift1 from './icons8-github-64.png'
import drift2 from './email.png'
import { useNavigate } from 'react-router'
import { useState } from 'react';
import drift3 from './icons8-menu.svg'
import drift4 from './Screenshot 2025-10-04 220211 - Copy.png'
import drift5 from './Screenshot 2025-10-04 220452.png'
import drift6 from './Screenshot 2025-10-04 220820.png'
import drift7 from './Screenshot 2025-10-04 221026.png'
import drift8 from './Screenshot 2025-10-05 092049.png'
import drift9 from './Screenshot 2025-10-05 092641.png'
import drift10 from './Screenshot 2025-10-05 092641.png'

import drift11 from './info.png'
import drift12 from './home-svgrepo-com.svg'
import drift13 from './project-svgrepo-com (1).svg'
import drift14 from './contact-book-1-svgrepo-com.svg'
import drift15 from './x-button.png'

const Project = () => {
  const navigate = useNavigate();
  const [isopen, Setisopen] = useState(false)
  return (
    <>
      <div>
    
        <div>
          {isopen && (<div className='burger'> <div className='na1'>

          <div onClick={() => Setisopen(!isopen)} className='pxx' > <img className='px' src={drift15} /> </div>
            <div className='home'>
              <div><img className='Home' src={drift12} /> </div>
              <Link to="/"><label className='label1 '>Home</label> </Link>
            </div>

            <div className='project'>
              <div><img className='Project' src={drift13} /> </div>
              <Link to='/project'><label className='label2'>Projects</label></Link>
            </div>

            <div className='about'>
              <div><img className='About' src={drift11} /></div>
              <Link to="/about"><label className='label3'> About </label></Link>
            </div>

            <div className='contact'>
              <div> <img className='Contact' src={drift14} /></div>
              <Link to="/contact"><label className='label4'>  Contact</label></Link> </div>
          </div>

          </div>

          )}
          <div className='title'>

            <h3>My Projects </h3>
            <div className='nav'>
              <div> Menu </div>
              <img onClick={() => Setisopen(!isopen)} className='menu' src={drift3} />
            </div>
          </div>

        </div>
        <div className='paragraph'>
          <p>Here's a collection of the projects I've built — from frontend experiments to full-stack applications.</p>
        </div>

        <div className='cardx'>
          <div className='cardx1'>
            <img src={drift4} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3> React To-Do App</h3>
              <p>A simple and interactive To-Do application built with React that allows users to manage their tasks efficiently. Tasks are stored in local storage, so your data persists even after refreshing the page.</p>
              <div className='tech-tags'>
                <span>React</span>
                <span> LocalStorage</span>

              </div>
              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
            </div>
          </div>
          <div className='cardx2'>
            <img src={drift5} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3> React Weather App
              </h3>
              <p>A simple Weather application built with React that fetches real-time weather data using the OpenWeatherMap API. Enter any city and get instant weather updates!</p>
              <div className='tech-tags'>
                <span>React</span>
                <span> External Api</span>

              </div>
              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>

            </div>
          </div>
          <div className='cardx3'>
            <img src={drift6} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3> CineSearch</h3>
              <p>CineSearch is a sleek and user-friendly React application that allows users to search for movies and explore detailed information about them. It's built with modern web technologies and fetches movie data dynamically, providing an interactive experience for film enthusiasts.</p>
              <div className='tech-tags'>
                <span>React</span>
                <span>EXternal Api</span>

              </div>

              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
            </div>
          </div>
          <div className='cardx4'>
            <img src={drift8} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3>React News App</h3>
              <p>A React application built with Vite that fetches and displays news articles from an API.
                This project demonstrates fetching data, managing state, and rendering news dynamically with modern React practices.</p>
              <div className='tech-tags'>
                <span>React</span>
                <span>External Api</span>

              </div>

              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
            </div>
          </div>
          <div className='cardx5'>
            <img src={drift9} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3> Student Management System</h3>
              <p>A Spring Boot application with PostgreSQL database for managing student records using RESTful APIs.
                This system allows CRUD operations (Create, Read, Update, Delete) on student data.</p>
              <div className='tech-tags'>

                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>

              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
            </div>
          </div>
          <div className='cardx6'>
            <img src={drift10} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3> Hospital Management System</h3>
              <p>Backend for Hospital Management System built with Spring Boot
                Uses PostgreSQL for data storage and management
                Built with Maven, exposes RESTful APIs for patients, doctors, and appointments</p>
              <div className='tech-tags'>
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>

              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
            </div>
          </div>
          <div className='cardx7'>
            <img src={drift7} alt="Project" className='project-image' />
            <div className='card-content'>
              <h3> Spring-React Authentication App</h3>
              <p>A fullstack login/signup application built with Spring Boot (backend) and React (frontend) using Spring Security and JWT authentication.</p>
              <div className='tech-tags'>
                <span>React</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
              </div>

              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"> <button className='project-btn2'>  Visit Github →</button> </a>
            </div>
          </div>
        </div>
        <div className='root'>Looking Forward to Build More Complex Project This Page Will Get Updated!

        </div>
        <footer className='height'>
          <div className='footer'><p>&copy; 2025 Vedant — Full-Stack Dev | Spring Boot • PostgreSQL • React</p>
          </div>

          <div className='link'>
            <div className='links'>
              <a href="https://github.com/vedant05bhombe-netizen" target="_blank" rel="noopener noreferrer"><img src={drift1} /></a>
            </div>
            <div className='links'>
              <a href="https://www.linkedin.com/in/vedant-bhombe-01a865290/" target="_blank" rel="noopener noreferrer">in</a>
            </div>
            <div className='links'>
              <a href="mailto:vedant05bhombe@gmail.com"><img className='img2' src={drift2} /></a>
            </div>
          </div>
        </footer>
        <div className='height'></div>
      </div>

      <div className='foot'></div>
    </>
  )
}

export default Project
