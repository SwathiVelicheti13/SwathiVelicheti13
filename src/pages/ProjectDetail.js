import React from 'react';
import { useParams } from 'react-router-dom';
import projectdata from '../data/projects.json';
import { FaGithub, FaEdit } from 'react-icons/fa';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectdata.projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <div className="project-card">
        {/* Project details */}
        <div className="project-header">
          <div className="project-name">{project.project_name}</div>
        </div>
        <div className="project-content">
          {/* Project features with aligned bullet icons */}
          <div className="project-features">
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>
                  <FaEdit size={22} className="feature-icon" />
                  <span dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Tools, technologies, and languages */}
          <div className="project-tags">
            <div className="tags">
              {project.tools.map((tool, index) => (
                <span key={index} className="tag">{tool}</span>
              ))}
              {project.languages.map((language, index) => (
                <span key={index} className="tag">{language}</span>
              ))}
            </div>
          </div>

          {/* GitHub link */}
          <a
            href={project.links[0].website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub size={24} />
            View on GitHub
          </a>

          {/* Image with sharp corners */}
          <div className="project-image">
            <img
              src={project.main_image}
              alt={`${project.project_name} image`}
              className="square-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
