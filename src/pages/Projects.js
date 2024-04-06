import React from 'react';
import '../styles/global.css'
import '../styles/home.css'
import projectdata from '../data/projects.json'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    return (
        <div className="page">
        <div>
        {projectdata.projects.map((project, id) => (
            <ProjectCard project={project}></ProjectCard>
    ))}

        </div>

        </div>
    )
}

export default Projects