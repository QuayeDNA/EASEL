// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light', // Set the default palette type to light
    primary: {
      main: '#007ACC', // Define your primary color
    },
    secondary: {
      main: '#FF6B6B', // Define your secondary color
    },
  },
  typography: {
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
});

export default theme;
