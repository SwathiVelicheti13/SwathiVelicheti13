import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/aboutMe.css';

const AboutMe = () => {

    return (
        <div className="aboutme">
            <div className=" section-box section-height lh-lg">
                <div className="section-heading">
                    About me
                </div>

                <div className="section-content">
                    I am an experienced software engineer with a strong background in game development. 
                    My expertise lies in JavaScript, C#, and Python, and I absolutely love coding. 
                    What drives me the most is the opportunity to use technology to create a real human impact and 
                    contribute to a sustainable world.<br /><br />

                    Throughout my journey, I have acquired a diverse range of skills, making me a versatile generalist. 
                    Problem-solving is my passion, and I am always eager to learn new technologies to stay ahead in the 
                    ever-evolving tech landscape.<br /><br />

                    My main goal is to build applications that have a meaningful impact on people's lives, 
                    leveraging my experience with databases and software development. I believe in the power of 
                    continuous improvement, always striving to be better than I was yesterday.

                    <br />

                </div>
            

                <Link to={window.location.origin + "/Users/shashankvinnakota/Documents/SwathiVelicheti13/src/assets/Swathi_Velicheti_Resume_24.pdf"} target="_blank">

                    <div className="button" style={{ float: "None" }}>

                        View Resume
                    </div>
                </Link>
        </div>
        </div>
    )
}

export default AboutMe