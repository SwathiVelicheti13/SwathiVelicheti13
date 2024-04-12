import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "../styles/name.css";

const Name = () => {
    return (
        <div className="name-card">
            <h1>Swathi Velicheti</h1>
            <p>I am a Software Developer</p>
            <div className="social-icons">
                <a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="#" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    );
}

export default Name;
