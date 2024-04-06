import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/projects" Component={Projects}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
