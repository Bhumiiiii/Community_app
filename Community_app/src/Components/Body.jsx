// components/Body.js
import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body-container">
      <div className="content">
        <h1>Welcome to NxtJob</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
        <div className="profile">
          <img src="profile-icon.png" alt="Profile" />
          <textarea placeholder="Start a post"></textarea>
        </div>
        <div className="buttons">
          <button><img src="product-icon.png" />Product</button>
          <button><img src="webinar-icon.png"  />Webinar</button>
          <button><img src="training-icon.png"  />Training</button>
          <button><img src="label-icon.png"  />Label</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
