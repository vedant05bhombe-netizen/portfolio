import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import drift3 from './icons8-menu.svg';
import drift1 from './1608907_github_square_icon.png';
import drift2 from './email.png';
import drift4 from './svg_333568.svg';
import drift5 from './email-svgrepo-com.svg';
import drift6 from './instagram.png';
import './Contact.css';

import drift10 from './info.png'
import drift7 from './home-svgrepo-com.svg'
import drift8 from './project-svgrepo-com (1).svg'
import drift9 from './contact-book-1-svgrepo-com.svg'
import drift11 from './x-button.png'


const Contact = () => {
  const [isopen, Setisopen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("Failed to send message, please try again.");
        }
      })
      .catch(() => alert("Failed to send message, please try again."));
  };

  return (
    <>
      
      <div className="title">
        <div>
          <h3>Contact</h3>
        </div>
        <div className="nav">
          <div> Menu </div>
          <img
            onClick={() => Setisopen(!isopen)}
            className="menu"
            src={drift3}
            alt="menu"
          />
        </div>
      </div>

      {isopen && (
        <div className="burger">
          <div onClick={() => Setisopen(!isopen)} className='pxx' > <img className='px' src={drift11} /> </div>
          
          <div className="na1">

            <div className='home'>
              <div><img className='Home' src={drift7} /> </div>
            <Link to="/"><label className="label1">Home</label></Link>
            </div>

            <div className='project'>
              <div><img className='Project' src={drift8} /> </div>
            <Link to="/project"><label className="label2">Projects</label></Link>
            </div>

            <div className='about'>
               <div><img className='About' src={drift10} /> </div>
            <Link to="/about"><label className="label3">About</label></Link>
            </div>

            <div className='contact'>
              <div><img className='Contact' src={drift9} /> </div>
            <Link to="/contact"><label onClick={() => Setisopen(!isopen)} id="active" className="label4">Contact</label></Link>
            </div>

          </div>
        </div>
      )}

      
      <div className="contact-section">
        <h2>Get In Touch</h2>
        <p className='name'>Interested in working together or have a question? Drop me a message below!</p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mpwylpob"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="6" required />
            <button type="submit">Send Message</button>
          </form>
        ) : (
          <p className="success">Message sent , I Will get back to you soon</p>
        )}
      </div>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer">
          <p>&copy; 2025 Vedant — Full-Stack Dev | Spring Boot • PostgreSQL • React</p>
        </div>

        <div className="link">
          <div className="linked">
            <a
              href="https://github.com/vedant05bhombe-netizen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="drift1" src={drift1} alt="GitHub" />
            </a>
          </div>
          <div className="linked">
            <a
              href="https://www.linkedin.com/in/vedant-bhombe-01a865290/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="drift4" src={drift4} alt="Linkdin" />
            </a>
          </div>
          <div className="linked">
            <a href="mailto:vedant05bhombe@gmail.com">
              <img className="drift5" src={drift5} alt="Email" />
            </a>
          </div>
          <div className="linked">
            <a href="https://www.instagram.com/mk.r_1605/" target="_blank" rel="noopener noreferrer">
              <img className="drift6" src={drift6} alt="intagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
