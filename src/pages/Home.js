import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import '../styles/global.css';
import '../styles/home.css';
import Name from '../components/Name';
const Home = () => {

    return (
        <div className="home-page">
            <Name></Name>
            <div className='container'>
            <AboutMe></AboutMe>
            <Skills></Skills>
            </div>
        
        </div>
    )
}

export default Home