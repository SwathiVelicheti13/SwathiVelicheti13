import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Works from './pages/Works.js';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/projects" Component={Projects}></Route>
      <Route path="/works" Component={Works}></Route>
      <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
