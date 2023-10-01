// src/components/Home.js

import React from 'react';

function Home() {
  return (
    
    <div backgroundImage="./images/icon.png"style={{ textAlign: 'center', padding: '20px', backgroundImage: 'url("/images/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className="home-container">
      <h1 className="welcome-text">Welcome to Our DressAScholar Website</h1>
      <img src="./images/include.png"/>
      <img src="./images/icon.png" alt="Icon" style={{ width: '100px', height: 'auto', marginTop: '20px' }} />
      <p>
        <strong>This is the home page of our charity website. You can find information
        about our charity, donate to our cause, and play games to support
        charity initiatives.</strong>
      </p>
      <p>
        Explore the links in the navigation bar to learn more about us and
        how you can get involved!
      </p>
    </div>
  );
}

export default Home;
