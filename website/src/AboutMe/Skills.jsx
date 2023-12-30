import React from 'react';
import './Skills.css'; // Your CSS file

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'Java', 'C++'],
    'Front-End Development': ['HTML/CSS', 'JavaScript', 'React'],
    'Back-End Development': ['Node.js', 'Express.js'],
    'Database Management': ['MySQL', 'MongoDB'],
    'Tools and Platforms': ['Git', 'Docker', 'AWS'],
  };

  return (
    <div className="skills-container">
      {Object.entries(skills).map(([category, skillList], index) => (
        <div key={index} className="branch">
          <div className="node">{category}</div>
          <div className="leaves">
            {skillList.map((skill, leafIndex) => (
              <div key={leafIndex} className="leaf">{skill}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;