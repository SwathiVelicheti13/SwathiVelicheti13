import React, { useState } from 'react';
import { BiExpandAlt } from 'react-icons/bi';
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
        {/* Role and Company Name with Logo on the left side */}
        <div className="left-side">
          <p className='role'>{role_name}</p>
          <p className='name'>{company_name}</p>
          {company_logo && (
            <img src={require(`../${company_logo}`)} alt={`${company_name} logo`} className="company-logo" />
          )}
        </div>

        {/* Duration and Tags on the right side */}
        <div className="right-side">
          <p>{`${start_date} - ${end_date}`}</p>
         
          <div className="tags">
            {/* Displaying tags for languages, tools, and libraries */}
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

      {/* Expanded content showing achievements and links */}
      {isExpanded && (
        <div className="card-details">
          <h4>Achievements:</h4>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
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
