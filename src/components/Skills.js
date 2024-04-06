import React from 'react';
const Skills = ({skilltags}) => {

    const skillCategories = Object.keys(skilltags);
    return (
        <div className="skills">
            <h1>Skills</h1>

            <div>
  

            {skillCategories.map((category, index) => (
                <div key={index} >
                  <h3>{category}</h3>
                  {console.log(category)}
                  <div className='skilltags'>
                    {skilltags[category].map((skill, skillIndex) => (
                      <div className='tag' key={skillIndex}>{skill}</div>
                    ))}
                  </div>
                </div>
              ))}

            </div>
        </div>
    )
}

export default Skills