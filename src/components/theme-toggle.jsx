'use client';

import React, { useEffect, useState } from 'react';
import { useCookieConsent } from '@/app/context/cookie-consent-context';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

// Utility functions to get and set cookies
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
  const [theme, setTheme] = useState(''); // Initialize with an empty string
  const { consent } = useCookieConsent(); // Context providing consent status

  // Determine initial theme from cookie or document's data-theme
  useEffect(() => {
    if (consent.preferences) {
      const cookieTheme = getCookie('theme');
      const htmlTheme = document.documentElement.dataset.theme;
      setTheme(cookieTheme || htmlTheme || 'dark'); // Default to 'dark' if nothing is set
    }
  }, [consent.preferences]);

  // Update cookie and document's theme when theme changes and consent is granted
  useEffect(() => {
    if (consent.preferences && theme) {
      setCookie('theme', theme, 30);
    }
    if (theme) {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme, consent.preferences]);

  // Toggle theme between 'dark' and 'light'
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Hide the button if consent is not granted
  if (!consent.preferences) {
    return null;
  }

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
