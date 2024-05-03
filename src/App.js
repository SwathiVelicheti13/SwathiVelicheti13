import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Works from './pages/Works.js';
import ProjectDetail from './pages/ProjectDetail';
import '../src/styles/global.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="app-container">
        <div className="hero">
          <Navbar />
        </div>
      <div className="content">
        <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/works" Component={Works}></Route>
        <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
