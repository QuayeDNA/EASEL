import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Copy, Heart, Share2, RefreshCw } from 'lucide-react';
import { MOODS, PALETTE_SIZES, DEFAULT_PALETTE_SIZE } from '@/constants/moods';
import { generateMoodPalette, generatePaletteName, savePalette, copyToClipboard } from '@/utils/colorUtils';
import { ColorPalette, Mood } from '@/types';

const MoodPalette: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<Mood>(MOODS[0]);
  const [paletteSize, setPaletteSize] = useState<number>(DEFAULT_PALETTE_SIZE);
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);
  const [paletteName, setPaletteName] = useState<string>('');
  const [savedPalettes, setSavedPalettes] = useState<ColorPalette[]>([]);

  const generatePalette = () => {
    const colors = generateMoodPalette(selectedMood, paletteSize);
    setCurrentPalette(colors);
    setPaletteName(generatePaletteName(selectedMood));
  };

  const handleSavePalette = () => {
    if (currentPalette.length === 0) return;

    const palette: ColorPalette = {
      id: Date.now().toString(),
      name: paletteName,
      colors: currentPalette,
      mood: selectedMood.id,
      createdAt: new Date(),
      tags: selectedMood.keywords
    };

    savePalette(palette);
    setSavedPalettes(prev => [palette, ...prev]);
  };

  const handleCopyColor = async (color: string) => {
    const success = await copyToClipboard(color);
    if (success) {
      // Could add a toast notification here
      console.log('Color copied:', color);
    }
  };

  const handleSharePalette = async () => {
    const paletteText = `${paletteName}\n${currentPalette.join(' | ')}`;
    const success = await copyToClipboard(paletteText);
    if (success) {
      console.log('Palette shared:', paletteText);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Mood-Based Palette Generator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform your emotions into beautiful color palettes. Select a mood and let the colors reflect your feelings.
        </p>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Customize Your Palette</CardTitle>
          <CardDescription>Choose your mood and palette size</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mood Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Select Mood</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {MOODS.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedMood.id === mood.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl mb-2">{mood.emoji}</div>
                  <div className="font-medium text-sm">{mood.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{mood.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Palette Size */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Palette Size: {paletteSize} colors</label>
            <Slider
              value={[paletteSize]}
              onValueChange={(value) => setPaletteSize(value[0])}
              max={PALETTE_SIZES[PALETTE_SIZES.length - 1]}
              min={PALETTE_SIZES[0]}
              step={1}
              className="w-full"
            />
          </div>

          {/* Generate Button */}
          <Button onClick={generatePalette} size="lg" className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Generate {selectedMood.name} Palette
          </Button>
        </CardContent>
      </Card>

      {/* Current Palette */}
      {currentPalette.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {selectedMood.emoji} {paletteName}
                </CardTitle>
                <CardDescription>
                  {selectedMood.description} • {paletteSize} colors
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleSavePalette}>
                  <Heart className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={handleSharePalette}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {currentPalette.map((color, index) => (
                <div key={index} className="space-y-3">
                  <div
                    className="h-24 rounded-lg cursor-pointer transition-transform hover:scale-105 shadow-sm"
                    style={{ backgroundColor: color }}
                    onClick={() => handleCopyColor(color)}
                    title={`Click to copy: ${color}`}
                  />
                  <div className="text-center space-y-1">
                    <div className="font-mono text-sm font-medium">{color}</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopyColor(color)}
                      className="h-6 px-2 text-xs"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Mood Keywords */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {selectedMood.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mood Inspiration */}
      <Card>
        <CardHeader>
          <CardTitle>Why {selectedMood.name}?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {selectedMood.name} palettes are perfect for {selectedMood.keywords.slice(0, 3).join(', ')} projects.
            The colors evoke feelings of {selectedMood.keywords.join(', ')} and work beautifully together
            to create harmonious designs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodPalette;
