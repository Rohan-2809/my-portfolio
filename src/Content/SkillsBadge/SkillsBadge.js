import React from 'react';
import './SkillsBadge.css';

const SkillsBadge = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, index) => (
        <span className="badge">{skill}</span>
      ))}
    </div>
  );
};

export default SkillsBadge;
