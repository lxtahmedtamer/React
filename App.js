// App.js
import React, { useState } from 'react';
import './App.css'; // Global styles
import Header from './Header';
import Links from './Links';
//import MainContent from './MainContent';
import Sidebar from './Sidebar';

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
