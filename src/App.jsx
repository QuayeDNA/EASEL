import { useState, useEffect } from 'react';
import { Container, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import Appbar from './components/Appbar';
import { getTheme } from './components/Theme/Theme';
import "./App.css";

import Test from './components/Test';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('easel-dark-mode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return prefersDarkMode;
  });

  const theme = getTheme(darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('easel-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Container maxWidth={false}>
          <Appbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Test />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
