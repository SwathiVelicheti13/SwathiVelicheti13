import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import '../styles/global.css'
import '../styles/home.css'
import homedata from '../data/home.json'
import Name from '../components/Name';

const Home = () => {

    return (
        <div className="home-page">
            <Name></Name>
            <div className='container'>
            <AboutMe></AboutMe>
            <Skills skilltags={homedata.skills}></Skills>
            </div>
        
        </div>
    )
}

export default Home