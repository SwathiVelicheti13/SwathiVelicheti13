import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  let thumbnail;
  try {
   
    thumbnail = require(`../${project.thumbnail}`);
  } catch (error) {
    console.error("Image not found:", project.thumbnail, error);
    thumbnail = ''; 
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="thumbnail-container">
        <img src={thumbnail} alt={`${project.project_name} Thumbnail`} className="thumbnail" />
      </div>
      <div className="caption">
        <div className="title">{project.project_name}</div>
        <div className="details">
          <div className="heading">{project.heading}</div>
          <div className="tagline">{project.tagline}</div>
          <div className="startDate">{project.startDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
