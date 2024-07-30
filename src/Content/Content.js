import React from 'react';
import './Content.css';
import About from './About/About';
import Experience from './Experience/Experience';
import SkillsBadge from './SkillsBadge/SkillsBadge';
import Skills from './Skills/Skills';

const Content = () => {
  const skillsUsed = ['React', 'HTML', 'CSS', 'JavaScript'];

  return (
    <div className="content">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <h1>Projects</h1>
        <p>...</p> Dynamic software engineer with{' '}
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <p>...</p>
        <Skills />
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>...</p>
      </section>
    </div>
  );
};

export default Content;
