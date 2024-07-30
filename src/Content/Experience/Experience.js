import React from 'react';
import './Experience.css';
import SkillsBadge from '../SkillsBadge/SkillsBadge';

const Experience = () => {
  return (
    <div id="experience" className="content-container">
      <div className="worktime-container">
        <div className="time">Jan 2022 - Present</div>{' '}
        <div className="work">
          <span className="imp-content">Musafir.com – Software Engineer </span>{' '}
          <br />
          <SkillsBadge
            skills={[
              'React',
              'Redux',
              'Javascript',
              'ES6',
              'CSS',
              'MaterialUI',
              'Next.js',
              'GraphQL',
              'Rest API',
              'Storybook',
              'Bitbucket',
            ]}
          />
          Directed and led project features from inception to successful
          execution, showcasing strong leadership skills{' '}
          <span className="imp-content">
            (Project features such as Flight Seatmap Integration, Flight and
            Hotel Quotation, Expense Management, Flight Pooling etc)
          </span>
          <br />
          Implemented innovative solutions for intricate problems while actively
          engaging in agile methodologies. <br />
          Accountable for developing and sustaining comprehensive React-based
          product features, ensuring robust functionality and resolving
          production issues efficiently.
        </div>
      </div>
      <div className="worktime-container">
        <div className="time">Aug 2021 – Dec 2021</div>{' '}
        <div className="work">
          <span className="imp-content">
            Mindstix Software Labs – Member of Technical Staff{' '}
          </span>{' '}
          <br />
          <span className="imp-content">Amway Taiwan (E-Commerce Project)</span>
          <br />
          <SkillsBadge
            skills={[
              'React',
              'Redux',
              'Javascript',
              'ES6',
              'MaterialUI',
              'Rest API',
              'Node.js',
              'Postman',
              'MongoDB',
              'MS SQL',
              'Git',
            ]}
          />
          Played a pivotal role in the development team, utilizing reusable
          React components and responsive CSS to craft responsive web pages,
          ensuring seamless adaptability across various platforms coupled with
          end-to-end API integration.
          <br />
          Spearheaded the development and meticulous debugging of feature-rich
          product functionalities, ensuring a polished and userfriendly
          experience. <br />
          Demonstrated proficiency in optimizing code to enhance overall system
          performance, employing strategies for efficient and streamlined
          operations.
        </div>
      </div>

      <div className="worktime-container">
        <div className="time">Sep 2020 – Jul 2021</div>{' '}
        <div className="work">
          <span className="imp-content">
            Reliance Jio – Graduate Trainee Engineer
          </span>{' '}
          <br />
          <SkillsBadge
            skills={['ReactJs', 'Redux', 'Javascript', 'ES6', 'HTML5', 'CSS3']}
          />
          Collaborated closely with software development and testing teams to
          engineer robust solutions meeting strict criteria for functionality,
          scalability, and performance.
          <br />
          <span className="imp-content">
            Acquired comprehensive proficiency in web technologies
          </span>{' '}
          taking ownership of bug analysis and resolution to maintain seamless
          system functionality.
          <br />
          Showcased a remarkable capacity for rapid learning and swift
          adaptation to new challenges, consistently delivering excellence in
          diverse and evolving environments.
        </div>
      </div>
    </div>
  );
};

export default Experience;
