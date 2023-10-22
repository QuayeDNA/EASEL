import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

function ThemeToggle() {
  const theme = useTheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const toggleTheme = () => {
    theme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light';
  };

  // Determine the initial theme based on system preference
  if (prefersDarkMode) {
    theme.palette.type = 'dark';
  } else {
    theme.palette.type = 'light';
  }

  return (
    <div>
      <button onClick={toggleTheme} 
      >Toggle Theme</button>
    </div>
  );
}

export default ThemeToggle;
