import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Button, 
  TextField, 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardActions,
  IconButton,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  Chip,
  Stack,
  Tooltip
} from '@mui/material';
import { 
  ContentCopy, 
  Save, 
  Download, 
  Share, 
  Refresh,
  Palette,
  Delete,
  Favorite,
  FavoriteBorder 
} from '@mui/icons-material';

function ColorPaletteGenerator() {
  const [numColors, setNumColors] = useState(5); // Default to 5 colors
  const [randomColors, setRandomColors] = useState(() => {
    const savedColors = localStorage.getItem('currentPalette');
    if (savedColors) {
      return JSON.parse(savedColors);
    }
    return generateRandomColors(numColors);
  });
  
  const [savedPalettes, setSavedPalettes] = useState(() => {
    const saved = localStorage.getItem('savedPalettes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [searchColor, setSearchColor] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [showPalettes, setShowPalettes] = useState(false);
  const [currentPaletteName, setCurrentPaletteName] = useState('');
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);

  // Function to generate a random color in hex format
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

  // Function to get color name approximation
  function getColorName(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 'Unknown';
    
    // Simple color name mapping based on dominant colors
    const { r, g, b } = rgb;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    
    if (max - min < 30) {
      if (max < 50) return 'Black';
      if (max > 200) return 'White';
      return 'Gray';
    }
    
    if (r === max) {
      if (g > b) return g > 128 ? 'Orange' : 'Red';
      return 'Red';
    } else if (g === max) {
      if (r > b) return 'Yellow';
      return b > 128 ? 'Cyan' : 'Green';
    } else {
      if (r > g) return 'Purple';
      return 'Blue';
    }
  }

  // Function to generate an array of random colors
  function generateRandomColors(count) {
    const colors = Array(count)
      .fill(null)
      .map(() => getRandomColor());
    return colors;
  }

  // Function to save palettes to local storage
  function savePalettesToLocalStorage(palettes) {
    localStorage.setItem('savedPalettes', JSON.stringify(palettes));
  }

  // Function to save current colors to local storage
  function saveCurrentPaletteToLocalStorage(colors) {
    localStorage.setItem('currentPalette', JSON.stringify(colors));
  }

  function handleNumColorsChange(event) {
    const newNumColors = parseInt(event.target.value, 10);
    if (!isNaN(newNumColors) && newNumColors >= 1 && newNumColors <= 20) {
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
      setSnackbar({ open: true, message: 'Failed to copy color', severity: 'error' });
    });
  }

  // Function to save current palette
  function savePalette() {
    if (!currentPaletteName.trim()) {
      setSnackbar({ open: true, message: 'Please enter a palette name', severity: 'warning' });
      return;
    }
    
    const newPalette = {
      id: Date.now(),
      name: currentPaletteName,
      colors: [...randomColors],
      createdAt: new Date().toISOString()
    };
    
    const updatedPalettes = [...savedPalettes, newPalette];
    setSavedPalettes(updatedPalettes);
    savePalettesToLocalStorage(updatedPalettes);
    setCurrentPaletteName('');
    setSaveDialogOpen(false);
    setSnackbar({ open: true, message: 'Palette saved successfully!', severity: 'success' });
  }

  // Function to load a saved palette
  function loadPalette(palette) {
    setRandomColors(palette.colors);
    setSnackbar({ open: true, message: `Loaded palette: ${palette.name}`, severity: 'success' });
    setShowPalettes(false);
  }

  // Function to delete a saved palette
  function deletePalette(paletteId) {
    const updatedPalettes = savedPalettes.filter(p => p.id !== paletteId);
    setSavedPalettes(updatedPalettes);
    savePalettesToLocalStorage(updatedPalettes);
    setSnackbar({ open: true, message: 'Palette deleted', severity: 'info' });
  }

  // Function to export palette
  function exportPalette() {
    const paletteData = {
      name: currentPaletteName || 'Untitled Palette',
      colors: randomColors,
      exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(paletteData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${paletteData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    setSnackbar({ open: true, message: 'Palette exported successfully!', severity: 'success' });
  }

  // Function to search for colors by hex or name
  function searchForColor() {
    if (!searchColor.trim()) return;
    
    let colorHex = searchColor.trim();
    
    // If it's not a hex color, try to convert common color names
    if (!colorHex.startsWith('#')) {
      const colorMap = {
        red: '#FF0000', blue: '#0000FF', green: '#008000', yellow: '#FFFF00',
        orange: '#FFA500', purple: '#800080', pink: '#FFC0CB', brown: '#A52A2A',
        black: '#000000', white: '#FFFFFF', gray: '#808080', cyan: '#00FFFF'
      };
      colorHex = colorMap[colorHex.toLowerCase()] || `#${colorHex}`;
    }
    
    // Validate hex color
    if (/^#[0-9A-F]{6}$/i.test(colorHex)) {
      const newColors = [colorHex, ...randomColors.slice(1)];
      setRandomColors(newColors);
      setSnackbar({ open: true, message: `Added color ${colorHex}`, severity: 'success' });
    } else {
      setSnackbar({ open: true, message: 'Invalid color format. Use hex (#RRGGBB) or color names.', severity: 'error' });
    }
    
    setSearchColor('');
  }

  useEffect(() => {
    saveCurrentPaletteToLocalStorage(randomColors);
  }, [randomColors]);

  useEffect(() => {
    // Ensure that the number of colors is within the valid range (1 to 20)
    if (numColors < 1) {
      setNumColors(1);
    } else if (numColors > 20) {
      setNumColors(20);
    }
  }, [numColors]);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          🎨 Color Palette Generator
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Create, explore, and save beautiful color palettes
        </Typography>
      </Box>

      {/* Controls Section */}
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={3}>
            {/* Generation Controls */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
              <TextField
                type="number"
                label="Number of Colors"
                value={numColors}
                onChange={handleNumColorsChange}
                inputProps={{ min: 1, max: 20 }}
                size="small"
                sx={{ minWidth: 150 }}
              />
              <Button 
                variant="contained" 
                onClick={handleGenerateColorsClick}
                startIcon={<Refresh />}
                size="large"
              >
                Generate New Palette
              </Button>
            </Box>

            {/* Search Controls */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
              <TextField
                label="Search color (hex #RRGGBB or name)"
                value={searchColor}
                onChange={(e) => setSearchColor(e.target.value)}
                placeholder="e.g., #FF5733, red, blue"
                size="small"
                sx={{ minWidth: 250 }}
                onKeyPress={(e) => e.key === 'Enter' && searchForColor()}
              />
              <Button 
                variant="outlined" 
                onClick={searchForColor}
                size="large"
              >
                Add Color
              </Button>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button 
                variant="outlined" 
                startIcon={<Save />}
                onClick={() => setSaveDialogOpen(true)}
              >
                Save Palette
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<Palette />}
                onClick={() => setShowPalettes(true)}
              >
                Saved Palettes ({savedPalettes.length})
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<Download />}
                onClick={exportPalette}
              >
                Export
              </Button>
            </Box>
          </Stack>
        </Card>
      </Container>

      {/* Color Palette Display */}
      <Grid container spacing={2}>
        {randomColors.map((color, index) => {
          const rgb = hexToRgb(color);
          const colorName = getColorName(color);
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                <Box
                  sx={{
                    backgroundColor: color,
                    height: 200,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    p: 1
                  }}
                >
                  <Tooltip title="Copy color">
                    <IconButton
                      size="small"
                      onClick={() => copyColorToClipboard(color)}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
                      }}
                    >
                      <ContentCopy fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {color}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {colorName}
                  </Typography>
                  {rgb && (
                    <Typography variant="body2" color="text.secondary">
                      RGB({rgb.r}, {rgb.g}, {rgb.b})
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Save Palette Dialog */}
      <Dialog open={saveDialogOpen} onClose={() => setSaveDialogOpen(false)}>
        <DialogTitle>Save Color Palette</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Palette Name"
            fullWidth
            variant="outlined"
            value={currentPaletteName}
            onChange={(e) => setCurrentPaletteName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSaveDialogOpen(false)}>Cancel</Button>
          <Button onClick={savePalette} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>

      {/* Saved Palettes Dialog */}
      <Dialog open={showPalettes} onClose={() => setShowPalettes(false)} maxWidth="md" fullWidth>
        <DialogTitle>Saved Palettes</DialogTitle>
        <DialogContent>
          {savedPalettes.length === 0 ? (
            <Typography color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
              No saved palettes yet. Create and save your first palette!
            </Typography>
          ) : (
            <List>
              {savedPalettes.map((palette) => (
                <ListItem key={palette.id} sx={{ mb: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <ListItemText
                    primary={palette.name}
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Created: {new Date(palette.createdAt).toLocaleDateString()}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                          {palette.colors.map((color, idx) => (
                            <Chip
                              key={idx}
                              label={color}
                              size="small"
                              sx={{ backgroundColor: color, color: 'white', fontSize: '0.7rem' }}
                            />
                          ))}
                        </Stack>
                      </Box>
                    }
                  />
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button size="small" onClick={() => loadPalette(palette)}>
                      Load
                    </Button>
                    <IconButton size="small" onClick={() => deletePalette(palette.id)} color="error">
                      <Delete />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPalettes(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
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
    </Container>
  );
}

export default ColorPaletteGenerator;
