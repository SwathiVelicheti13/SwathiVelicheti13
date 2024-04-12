import React from 'react';
import '../styles/projectCard.css'
const ProjectCard = ({project}) => {
    
    return (
        <div class="card">
            <div class="thumbnail-container">
                <img src={project.thumbnail} alt="Thumbnail" className="thumbnail" />
            </div>
            <div class="caption">
                <div class="title">{project.project_name}</div>
                <div class="details">
                <div class="heading">{project.heading}</div>
                <div class="tagline">{project.tagline}</div>
                <div class="startDate">{project.startDate}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard