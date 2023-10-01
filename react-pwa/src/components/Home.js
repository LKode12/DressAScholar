import React from 'react';

function Home() {
  return (
    <div className="home-container">
      

      <h1>Welcome to <strong><em>DressAScholar</em></strong> !</h1>
      <div>
      <img
        suppressContentEditableWarning="./images/logo.png"
        alt="image-above-paragraph"
      />
      </div>
      <p>
        This is the home page of our charity website. You can find information
        about our charity, donate to our cause, and play games to support
        charity initiatives.
      </p>
      <p>
        Explore the links in the navigation bar to learn more about us and
        how you can get involved!
      </p>
      
      <style>
        {`
          /* Add your CSS styles here */
          .home-container {
            text-align: center;
            padding: 200px;
            background-image: url('./images/icon.png')
            background-color: lightgreen;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .image-above-paragraph {
            width: 30px; /* Adjust the image size as needed */
            margin-bottom: 20px; /* Add margin to space the image from the paragraph */
          }

          h1 {
            color: darkgreen;
          }

          p {
            color: black;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
