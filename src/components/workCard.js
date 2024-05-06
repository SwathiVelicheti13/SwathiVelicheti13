import React, { useState } from 'react';
import { BiExpandAlt } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa'; // Import the edit icon
import '../styles/WorkCard.css';

const WorkCard = ({
  company_name,
  company_logo,
  start_date,
  end_date,
  role_name,
  tools = [],
  libraries = [],
  languages = [],
  achievements = [],
  links = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`work-card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      <div className="card-header">
      
        <div className="left-side">
          <p className="role">{role_name}</p>
          <p className="name">{company_name}</p>
          {company_logo && (
            <img src={require(`../${company_logo}`)} alt={`${company_name} logo`} className="company-logo" />
          )}
        </div>

      
        <div className="right-side">
          <p>{`${start_date} - ${end_date}`}</p>
          <div className="tags">
            {languages.map((language, index) => (
              <span key={index} className="tag">
                {language}
              </span>
            ))}
            {tools.map((tool, index) => (
              <span key={index} className="tag">
                {tool}
              </span>
            ))}
            {libraries.map((library, index) => (
              <span key={index} className="tag">
                {library}
              </span>
            ))}
          </div>
          <BiExpandAlt className={`expand-icon ${isExpanded ? 'icon-rotated' : ''}`} />
        </div>
      </div>

     
      {isExpanded && (
        <div className="card-details">
          <h4>Achievements:</h4>
          <ul className="achievement-list"> 
            {achievements.map((achievement, index) => (
              <li key={index}>
                <FaEdit className="achievement-icon" /> 
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <h4>Company Website:</h4>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.website_link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: link.color }}
            >
              {link.linkname}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkCard;
