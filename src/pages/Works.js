import React from 'react';
import '../styles/global.css';
import '../styles/Works.css';
import workData from '../data/work.json';
import WorkCard from '../components/workCard.js';

const Works = () => {
  console.log("Imported workData:", workData);

  const worksArray = workData.works;
  if (!Array.isArray(worksArray)) {
    console.error("Error: `works` is not an array.");
    return <div>Error: The work data is not in the expected format.</div>;
  }

  return (
    <div className="work-page">
      <div className="row">
        {worksArray.map((workItem, index) => (
          <WorkCard
            key={index}
            company_name={workItem.company_name}
            start_date={workItem.start_date}
            end_date={workItem.end_date}
            role_name={workItem.role_name}
            achievements={workItem.achievements}
            languages={workItem.languages}
            libraries={workItem.libraries}
            links={workItem.links}
            company_logo={workItem.company_logo}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
