'use client';

import React, { useEffect, useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/Brightness3';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}


function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; sameSite=lax; secure=${process.env.NODE_ENV === 'production'}`;
}

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const cookieTheme = getCookie('theme');
    if (cookieTheme) {
      setTheme(cookieTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    setCookie('theme', theme, 30); // Set cookie to expire in 30 days
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

   console.log('Client-side theme cookie:', theme); // TODO: Debounce this
  };


  return (
    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? (
        <DarkModeIcon style={{ fontSize: '40px', color: 'var(--icons)' }} />
      ) : (
        <LightModeIcon style={{ fontSize: '40px', color: 'var(--icons)' }} />
      )}
    </button>
  );
}

export default ThemeToggle;
