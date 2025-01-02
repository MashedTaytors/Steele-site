'use client';

import React, { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// TODO: on light theme full page load, the wrong toggle icon flashes

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; sameSite=lax; secure=${process.env.NODE_ENV === 'production'}`; // "path=/" makes the cookie accessible to all URLs that start with / on your domain.
}

function ThemeToggle() {
  const [theme, setTheme] = useState(''); // Initialize with an empty string to prevent overwrites

  // Set theme based on the cookie during the first render
  useEffect(() => {
    const cookieTheme = getCookie('theme');
    if (cookieTheme) {
      setTheme(cookieTheme); // Use the cookie theme if it exists
    } else {
      setTheme('dark'); // Default theme if no cookie exists
    }
  }, []);

  // Update cookie and DOM only when the theme changes
  useEffect(() => {
    if (theme) { // Only act if the theme has been initialized
      const cookieTheme = getCookie('theme');
      if (cookieTheme !== theme) {
        setCookie('theme', theme, 30); // Only set the cookie if the theme differs
      }
      document.documentElement.dataset.theme = theme; // Sync theme to the DOM
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  //  console.log('Client-side theme cookie:', theme); // TODO: Debounce this
  };


  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? (
       <LightModeIcon style={{ fontSize: '30px', color: 'var(--icons)' }} />
      ) : (
        <DarkModeIcon style={{ fontSize: '30px', color: 'var(--icons)' }} />
      )}
    </button>
  );
}

export default ThemeToggle;
