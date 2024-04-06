import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import '../styles/global.css'
import '../styles/home.css'
import homedata from '../data/home.json'

const Home = () => {

    return (
        <div className="page">
            <div className='container'>
            <AboutMe></AboutMe>
            <Skills skilltags={homedata.skills}></Skills>
            </div>
        
        </div>
    )
}

export default Home