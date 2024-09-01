import React, { useState } from 'react';
import './App.css'; // Move your CSS styles to a separate file (App.css) for better organization.

const Header = () => {
  return (
    <div className="header">
      <h1>WELCOME TO MY CV</h1>
      <img src="Ahmedphoto.jpeg" className="right-image" alt="Ahmed Tamer's Photo" />
    </div>
  );
};

const Links = () => {
  return (
    <div className="links">
      <a href="https://www.linkedin.com/in/ahmed-tamer-b8699b282/" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn</a> |
      <a href="https://github.com/lxtahmedtamer" target="_blank" rel="noopener noreferrer">Check out my GitHub</a>
    </div>
  );
};

const ProgressBar = ({ skill, value, onChange }) => {
  return (
    <div className="skill">
      <p>{skill}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="slider"
        onChange={onChange}
      />
      <div className="progress-bar">
        <div className="progress" style={{ width: `${value}%` }}>{value}%</div>
      </div>
    </div>
  );
};

const MainContent = () => {
  const [pythonValue, setPythonValue] = useState(80);
  const [cppValue, setCppValue] = useState(70);

  return (
    <div className="main-content">
      <h2>Personal Information</h2>
      <pre>
        My name is Ahmed Tamer.
        I am 22 years old.
      </pre>
      <hr />
      <h3>Educational Information</h3>
      <pre>
        I am an engineer.
        I am in the last year of education.
      </pre>
      <hr />
      <h4>Work Experience</h4>
      <pre>
        I work as a SW intern in LXT Company.
        I have learnt some topics like Backend, Frontend SW development, and API Testing using Postman.
      </pre>
      <hr />
      <h4>Skills</h4>
      <ProgressBar
        skill="Python"
        value={pythonValue}
        onChange={(e) => setPythonValue(e.target.value)}
      />
      <ProgressBar
        skill="C++"
        value={cppValue}
        onChange={(e) => setCppValue(e.target.value)}
      />
      {/* Add more skills as needed */}
    </div>
  );
};

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

const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isLightMode ? 'light-mode' : ''}`}>
      <Header />
      <button id="mode-toggle" onClick={toggleMode}>Toggle Dark/Light Mode</button>
      <Links />
      <div className="container">
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
