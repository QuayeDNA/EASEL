
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function ThemeToggle({ darkMode, toggleDarkMode }) {

  return (
    <IconButton 
      onClick={toggleDarkMode} 
      color="inherit"
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}

ThemeToggle.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default ThemeToggle;
