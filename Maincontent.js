// MainContent.js
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './MainContent.css'; // Optional: create a separate CSS file for MainContent if needed

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
    </div>
  );
};

export default MainContent;
