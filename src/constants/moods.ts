import { Mood } from '../types';

export const MOODS: Mood[] = [
  {
    id: 'calm',
    name: 'Calm',
    description: 'Peaceful and soothing colors',
    emoji: '🧘',
    colorScheme: {
      primary: ['#E8F4F8', '#B8D8E3', '#7FB3C7', '#4A90A4', '#2C5F70'],
      secondary: ['#F0F8E7', '#D4E8C7', '#A8D08C', '#7CB342', '#558B2F'],
      accent: ['#FFF8E1', '#FFECB3', '#FFD54F', '#FFC107', '#FF8F00']
    },
    keywords: ['peaceful', 'relaxing', 'serene', 'tranquil', 'gentle']
  },
  {
    id: 'energetic',
    name: 'Energetic',
    description: 'Vibrant and dynamic colors',
    emoji: '⚡',
    colorScheme: {
      primary: ['#FFF3E0', '#FFE0B2', '#FFCC02', '#FF9800', '#E65100'],
      secondary: ['#FCE4EC', '#F8BBD9', '#F06292', '#E91E63', '#C2185B'],
      accent: ['#E8F5E8', '#C8E6C9', '#81C784', '#4CAF50', '#2E7D32']
    },
    keywords: ['vibrant', 'dynamic', 'lively', 'bold', 'intense']
  },
  {
    id: 'mysterious',
    name: 'Mysterious',
    description: 'Deep and enigmatic colors',
    emoji: '🌙',
    colorScheme: {
      primary: ['#1A1A2E', '#16213E', '#0F3460', '#1A1A2E', '#533483'],
      secondary: ['#2C2C54', '#40407A', '#706FD3', '#F7F1E3', '#FFA500'],
      accent: ['#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE', '#E9D5FF']
    },
    keywords: ['deep', 'enigmatic', 'dark', 'mystical', 'intriguing']
  },
  {
    id: 'playful',
    name: 'Playful',
    description: 'Fun and cheerful colors',
    emoji: '🎈',
    colorScheme: {
      primary: ['#FFF9C4', '#FFF59D', '#FFF176', '#FFEB3B', '#FBC02D'],
      secondary: ['#F8BBD9', '#F48FB1', '#F06292', '#EC407A', '#E91E63'],
      accent: ['#81C784', '#4CAF50', '#388E3C', '#2E7D32', '#1B5E20']
    },
    keywords: ['fun', 'cheerful', 'bright', 'joyful', 'lively']
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clean and business-appropriate colors',
    emoji: '💼',
    colorScheme: {
      primary: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD'],
      secondary: ['#1976D2', '#1565C0', '#0D47A1', '#42A5F5', '#1E88E5'],
      accent: ['#424242', '#616161', '#757575', '#9E9E9E', '#BDBDBD']
    },
    keywords: ['clean', 'corporate', 'formal', 'trustworthy', 'reliable']
  },
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'Warm and loving colors',
    emoji: '💕',
    colorScheme: {
      primary: ['#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28'],
      secondary: ['#FCE4EC', '#F8BBD9', '#F48FB1', '#F06292', '#EC407A'],
      accent: ['#E8F5E8', '#C8E6C9', '#81C784', '#4CAF50', '#388E3C']
    },
    keywords: ['warm', 'loving', 'tender', 'passionate', 'intimate']
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Earthy and organic colors',
    emoji: '🌿',
    colorScheme: {
      primary: ['#E8F5E8', '#C8E6C9', '#81C784', '#4CAF50', '#388E3C'],
      secondary: ['#FFF3E0', '#FFE0B2', '#FFCC02', '#FF9800', '#F57C00'],
      accent: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5']
    },
    keywords: ['earthy', 'organic', 'fresh', 'natural', 'grounded']
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Modern and digital colors',
    emoji: '💻',
    colorScheme: {
      primary: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5'],
      secondary: ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC'],
      accent: ['#00BCD4', '#0097A7', '#006064', '#26A69A', '#00897B']
    },
    keywords: ['modern', 'digital', 'sleek', 'innovative', 'futuristic']
  }
];

export const PALETTE_SIZES = [3, 4, 5, 6, 7, 8] as const;
export const DEFAULT_PALETTE_SIZE = 5;
