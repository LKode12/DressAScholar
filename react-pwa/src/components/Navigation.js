import React from 'react';
import { Link } from 'react-router-dom';
// import logoImage from './icon.png'; // Import your logo image

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo-container">
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Donate">Donate</Link></li>
        <li><Link to="/Play-games">Play Games for Charity</Link></li>
        <li><Link to="/Register-school">Register a School</Link></li>
      </ul>

      <style>
        {`
          /* Add your CSS styles here */
          .navbar {
            background-color: #333;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
          }

          .logo-container {
            flex: 1;
          }

          .logo {
            width: 100px;
            height: auto;
          }

          .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
          }

          .nav-links li {
            font-size: 18px;
          }

          .nav-links a {
            text-decoration: none;
            color: white;
          }

          .nav-links a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}

export default Navigation;
