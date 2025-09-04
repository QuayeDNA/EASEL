export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  mood?: string;
  createdAt: Date;
  tags?: string[];
}

export interface Mood {
  id: string;
  name: string;
  description: string;
  emoji: string;
  colorScheme: {
    primary: string[];
    secondary: string[];
    accent: string[];
  };
  keywords: string[];
}

export interface PaletteFilters {
  mood?: string;
  tags?: string[];
  search?: string;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface UserPreferences {
  theme: ThemeMode;
  defaultPaletteSize: number;
  favoriteMoods: string[];
}
