// components/Navbar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h2>Career Discussion</h2>
      </div>
      <div className="right">
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <img src="saved-messages-logo.png" alt="Saved Messages" />
          <img src="notification-logo.png" alt="Notifications" />
          <img src="FAQ.png" alt="FAQs" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
