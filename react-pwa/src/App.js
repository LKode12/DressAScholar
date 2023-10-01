// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import PlayGames from './components/PlayGames';
import RegisterSchool from './components/RegisterSchool';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/play-games" element={<PlayGames />} />
          <Route path="/register-school" element={<RegisterSchool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
