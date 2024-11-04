"use client";

import React, { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';

function ThemeToggle() {
  // Initialize theme state based on localStorage value (default is dark mode)
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Prevent transition on initial load
    root.classList.add('no-transition');
    setTimeout(() => {
      root.classList.remove('no-transition'); // Remove immediately after first render
    }, 15);

    // Apply theme based on `isLightMode` state
    if (isLightMode) {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save preference to localStorage
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Save preference to localStorage
    }
  }, [isLightMode]);

  // Toggle theme and update state
  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleTheme} aria-label="Toggle light/dark mode">
      <LightModeIcon style={{ fontSize: '41px', color: 'var(--icons)' }} />
    </button>
  );
}

export default ThemeToggle;
