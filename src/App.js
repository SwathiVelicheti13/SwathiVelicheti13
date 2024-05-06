import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Works from './pages/Works.js';
import ProjectDetail from './pages/ProjectDetail';
import '../src/styles/global.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="app-container">
          <div className = 'hero'>
            <Navbar />
          </div>
          <div className = 'content'>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/works" element={<Works />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
              </Routes>
            </div>  
        </div>
      </Router>
    </div>
  );
}

export default App;
