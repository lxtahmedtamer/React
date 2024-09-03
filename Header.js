// Header.js
import React from 'react';
import './Header.css'; // Optional: create a separate CSS file for Header if needed

const Header = () => {
  return (
    <div className="header">
      <h1>WELCOME TO MY CV</h1>
      <img src="Ahmedphoto.jpeg" className="right-image" alt="Ahmed Tamer's Photo" />
    </div>
  );
};

export default Header;
