import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

function RandomColorGenerator() {
  const [numColors, setNumColors] = useState(4); // Default to 4 colors
  const [randomColors, setRandomColors] = useState(() => {
    const savedColors = localStorage.getItem('randomColors');
    if (savedColors) {
      return JSON.parse(savedColors);
    }
    return generateRandomColors(numColors);
  });

  // Function to generate a random color in hex format
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to generate an array of random colors
  function generateRandomColors(count) {
    const colors = Array(count)
      .fill(null)
      .map(() => getRandomColor());
    return colors;
  }

  // Function to save the current random colors to local storage
  function saveRandomColorsToLocalStorage(colors) {
    localStorage.setItem('randomColors', JSON.stringify(colors));
  }

  function handleNumColorsChange(event) {
    const newNumColors = parseInt(event.target.value, 10);
    if (!isNaN(newNumColors) && newNumColors >= 1 && newNumColors <= 50) {
      setNumColors(newNumColors);
    }
  }

  // Function to handle the "Generate New Colors" button click
  function handleGenerateColorsClick() {
    const newColors = generateRandomColors(numColors);
    setRandomColors(newColors);
  }

  useEffect(() => {
    saveRandomColorsToLocalStorage(randomColors);
  }, [randomColors]);

  useEffect(() => {
    // Ensure that the number of colors is within the valid range (1 to 50)
    if (numColors < 1) {
      setNumColors(1);
    } else if (numColors > 50) {
      setNumColors(50);
    }
  }, [numColors]);

  return (
    <div>
<Container
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 'xl', // Set maxWidth to 'xl' for full width
    '& > *': {
      m: 1,
      width: '100ch',
    },
    '& .MuiTextField-root': {
      m: 1,
      width: '25ch',
    },
    mt: 2,
  }}
>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <TextField
      type="number"
      label="Number of Colors (1-50)"
      value={numColors}
      onChange={handleNumColorsChange}
      inputProps={{ min: 1, max: 50 }}
      sx={{
        m: 1,
        width: '15ch',
      }}
    />
    <Button variant="contained" onClick={handleGenerateColorsClick}>
      Generate New Colors
    </Button>
  </div>
</Container>



      <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
        {randomColors.map((color, index) => (
          <Grid item xs={12} key={index}>
            <Box
              sx={{
                backgroundColor: color,
                height: '200px',
                margin: '10px',
                borderRadius: '10px',
              }}
            ></Box>
          </Grid>
        ))}
      </Grid>
     
    </div>
  );
}

export default RandomColorGenerator;
