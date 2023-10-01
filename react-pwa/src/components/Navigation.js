// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Donate">Donate</Link></li>
        <li><Link to="/Play-games">Play Games for Charity</Link></li>
        <li><Link to="/Register-school">Register a School</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
