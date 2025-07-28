import React, { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(PropertyContext);
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle; 