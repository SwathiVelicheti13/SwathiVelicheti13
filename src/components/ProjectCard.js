import React from 'react';
import '../styles/projectCard.css'
const ProjectCard = ({project}) => {
    
    return (
        <div>
            <div className="card">
                <img src={project.thumbnail} alt="Thumbnail" className="thumbnail" />
                <div className="details">
                    <h3 className="project-name">{project.project_name}</h3>
                    <h4 className="heading">{project.heading}</h4>
                    <p className="tagline">{project.tagline}</p>
                    <p className="startDate">{project.startDate}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard