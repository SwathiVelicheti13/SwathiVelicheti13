import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/aboutMe.css';

const AboutMe = () => {

    return (
        <div className="aboutme">
            <div className="section-box section-height lh-lg">
                <div className="section-heading">
                    About me
                </div>

                <div className="section-content">
                    I'm a Back-End Developer with a strong focus on backend technologies. I excel in building scalable web applications using frameworks like Django and have a solid command of JavaScript for front-end development, along with extensive experience in Python. My experience with SQL databases ensures robust data management and seamless integration between different components of a project.
    
                    I enjoy solving technical challenges and constantly seek out opportunities to learn new technologies. 
                    <br /><br />
                    This curiosity fuels my passion for full-stack development, allowing me to build applications that deliver innovative solutions. I take pride in creating meaningful user experiences through thoughtful design and efficient backend systems.
                    My aim is to contribute to projects that have a lasting impact.
                    <br /><br />
                </div>
                
                <Link to="https://raw.githubusercontent.com/swathivelicheti13/swathivelicheti13/main/src/assets/Swathi_Velicheti_Backend_Resume.pdf" target="_blank">
                    <div className="button" style={{ float: "None" }}>
                        View Resume
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AboutMe;
