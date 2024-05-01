import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/projectCard.css';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate(); // Hook to navigate to other routes

  const handleCardClick = () => {
    // Redirect to the detail page using the project ID
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="thumbnail-container">
        <img src={project.thumbnail} alt="Thumbnail" className="thumbnail" />
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
