// Sidebar.js
import React from 'react';
import './Sidebar.css'; // Optional: create a separate CSS file for Sidebar if needed

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Contact Info</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:ahmed.tamer@gmail.com">ahmed.tamer@gmail.com</a></p>
        <p><strong>Phone:</strong> 01112209447</p>
        <p><strong>Address:</strong> Maadi, Cairo-Egypt</p>
      </div>
      <h2>Career Goals</h2>
      <div className="career-goals">
        <p>My primary career goal is to advance my skills in software and embedded systems development to become updated to the rising technology in both fields, aiming to make a successful journey.</p>
      </div>
    </div>
  );
};

export default Sidebar;
