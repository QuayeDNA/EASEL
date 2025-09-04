import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Container, Card, CardContent } from '@mui/material';

function RandomColorGenerator() {
  const [numColors, setNumColors] = useState(4); // Default to 4 colors
  const [randomColors, setRandomColors] = useState(() => {
    const savedColors = localStorage.getItem('randomColors');
    if (savedColors) {
      return JSON.parse(savedColors);
    }
    return generateRandomColors(numColors);
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

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

  // Function to copy color to clipboard
  function copyColorToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
      setSnackbar({ open: true, message: `Color ${color} copied to clipboard!`, severity: 'success' });
    }).catch(() => {
      setSnackbar({ open: true, message: 'Failed to copy color to clipboard', severity: 'error' });
    });
  }

  // Function to convert hex to RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
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
          maxWidth: 'xl',
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

      <Grid container spacing={2} sx={{ mt: 2, px: 2 }}>
        {randomColors.map((color, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card 
              sx={{ 
                height: 200,
                backgroundColor: color,
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.2s ease-in-out',
                }
              }}
              onClick={() => copyColorToClipboard(color)}
            >
              <CardContent 
                sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '8px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {color.toUpperCase()}
                  </Typography>
                  <Typography variant="caption">
                    RGB({hexToRgb(color)?.r}, {hexToRgb(color)?.g}, {hexToRgb(color)?.b})
                  </Typography>
                </div>
                <IconButton 
                  size="small" 
                  sx={{ color: 'white' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    copyColorToClipboard(color);
                  }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={3000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default RandomColorGenerator;
