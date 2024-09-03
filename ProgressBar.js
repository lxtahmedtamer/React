// ProgressBar.js
import React from 'react';
import './ProgressBar.css'; // Optional: create a separate CSS file for ProgressBar if needed

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

export default ProgressBar;
