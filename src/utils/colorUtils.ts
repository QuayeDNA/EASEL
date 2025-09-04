import { ColorPalette, Mood } from '../types';

/**
 * Generate a random color in hex format
 */
export const generateRandomColor = (): string => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
};

/**
 * Generate a palette based on mood
 */
export const generateMoodPalette = (mood: Mood, size: number = 5): string[] => {
  const { colorScheme } = mood;
  const allColors = [
    ...colorScheme.primary,
    ...colorScheme.secondary,
    ...colorScheme.accent
  ];

  // Shuffle and take the requested size
  const shuffled = [...allColors].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, size);
};

/**
 * Generate a random palette
 */
export const generateRandomPalette = (size: number = 5): string[] => {
  return Array.from({ length: size }, () => generateRandomColor());
};

/**
 * Convert hex to RGB
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Calculate color contrast ratio
 */
export const getContrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  if (!rgb1 || !rgb2) return 1;

  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

/**
 * Calculate relative luminance
 */
const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

/**
 * Check if color is light or dark
 */
export const isLightColor = (color: string): boolean => {
  const rgb = hexToRgb(color);
  if (!rgb) return true;

  const { r, g, b } = rgb;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
};

/**
 * Generate complementary colors
 */
export const generateComplementaryPalette = (baseColor: string): string[] => {
  const rgb = hexToRgb(baseColor);
  if (!rgb) return [baseColor];

  // Simple complementary color generation
  const { r, g, b } = rgb;
  const complementary = {
    r: 255 - r,
    g: 255 - g,
    b: 255 - b
  };

  return [
    baseColor,
    `rgb(${complementary.r}, ${complementary.g}, ${complementary.b})`
  ];
};

/**
 * Save palette to localStorage
 */
export const savePalette = (palette: ColorPalette): void => {
  const saved = getSavedPalettes();
  const updated = [palette, ...saved.filter(p => p.id !== palette.id)];
  localStorage.setItem('easel-palettes', JSON.stringify(updated));
};

/**
 * Get saved palettes from localStorage
 */
export const getSavedPalettes = (): ColorPalette[] => {
  try {
    const saved = localStorage.getItem('easel-palettes');
    if (!saved) return [];

    const palettes = JSON.parse(saved);
    return palettes.map((p: any) => ({
      ...p,
      createdAt: new Date(p.createdAt)
    }));
  } catch {
    return [];
  }
};

/**
 * Copy color to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    return success;
  }
};

/**
 * Generate palette name based on mood
 */
export const generatePaletteName = (mood: Mood): string => {
  const adjectives = ['Beautiful', 'Vibrant', 'Elegant', 'Dynamic', 'Harmonious', 'Stunning', 'Radiant', 'Serene'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  return `${randomAdjective} ${mood.name} Palette`;
};
