// components/SideNavbar.js
import React from 'react';
import './SideNavbar.css';

const SideNavbar = () => {
  return (
    <nav className="sidenav">
      <div className="logo">
        <h2>NxtJob.ai</h2>   <h5 className='heading'>Community</h5>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Browse Channels" />
      </div>
      <div className="rules">
        <img src="rules-icon.png" />
        <span>Rules</span>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          <img src="channels-icon.png" />
          Channels
        </button>
        <div className="dropdown-content">
          <a href="#">Introduction</a>
          <a href="#">Announcements</a>
          <a href="#">Success Stories</a>
          <a href="#">Career Discussion</a>
        </div>
      </div>
    </nav>
  );
};

export default SideNavbar;
