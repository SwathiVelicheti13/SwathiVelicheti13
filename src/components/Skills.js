import React from 'react';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import awsIcon from '../assets/icons/aws.png';
import apiIcon from '../assets/icons/api.png';
import pythonIcon from '../assets/icons/python.png';
import djangoIcon from '../assets/icons/django.png';
import sqlIcon from '../assets/icons/sql.png';
import jsIcon from '../assets/icons/java-script.png';
import reactIcon from '../assets/icons/react.png';
import gitIcon from '../assets/icons/git.png';
import vscodeIcon from '../assets/icons/vscode.png';
import '../styles/Skills.css'; 

const Skills = () => {
  const skills = [
    { src: htmlIcon, label: 'HTML' },
    { src: cssIcon, label: 'CSS' },
    { src: awsIcon, label: 'AWS' },
    { src: apiIcon, label: 'API' },
    { src: pythonIcon, label: 'Python' },
    { src: djangoIcon, label: 'Django' },
    { src: sqlIcon, label: 'SQL' },
    { src: jsIcon, label: 'JavaScript' },
    { src: reactIcon, label: 'React' },
    { src: gitIcon, label: 'Git' },
    { src: vscodeIcon, label: 'VSCode' },
  ];

  return (
    <div className="skills-card"> 
      <h2>Skills</h2> 
      <div className="skills-row"> 
        {skills.map((skill, index) => (
          <div key={index} className="skill-item"> 
            <img src={skill.src} alt={skill.label} />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
