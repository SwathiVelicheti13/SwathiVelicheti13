import React from 'react';
import '../styles/global.css'
import '../styles/Projects.css'
import projectdata from '../data/projects.json'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {

    return (
        <div className="project-page">
        <div class="row">
        {projectdata.projects.map((project, id) => (
        <div className="col-sm-4"> 
            <ProjectCard project={project}></ProjectCard>
          </div>
         ))}
        </div>

        </div>
    )
}

export default Projects
