import React, { useState } from 'react';
import './Sidebar.css';
import SocialIcon from './SocialIcon/SocialIcon';

const Sidebar = () => {
  const [selected, setSelected] = useState('about');

  const scrollToSection = (id) => {
    setSelected(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar">
      <div>
        <h1 className="title">Rohan Patare</h1>
        <h2 className="sub-title">Frontend Developer</h2>
        <p style={{ lineHeight: '28px' }}>
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
      </div>
      <div className="nav-container">
        <nav class="vertical-nav">
          <ul>
            <li
              className={selected === 'about' ? 'selected' : ''}
              onClick={() => scrollToSection('about')}
            >
              <a href="#about">
                <span class="line"></span>About
              </a>
            </li>
            <li
              className={selected === 'experience' ? 'selected' : ''}
              onClick={() => scrollToSection('experience')}
            >
              <a href="#experience">
                <span class="line"></span>Experience
              </a>
            </li>
            <li
              className={selected === 'project' ? 'selected' : ''}
              onClick={() => scrollToSection('project')}
            >
              <a href="#project">
                <span class="line"></span>Project
              </a>
            </li>

            <li
              className={selected === 'skills' ? 'selected' : ''}
              onClick={() => scrollToSection('skills')}
            >
              <a href="#skills">
                <span class="line"></span>Skills
              </a>
            </li>
            <li
              className={selected === 'contact' ? 'selected' : ''}
              onClick={() => scrollToSection('contact')}
            >
              <a href="#contact">
                <span class="line"></span>Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <SocialIcon />
    </div>
  );
};

export default Sidebar;
