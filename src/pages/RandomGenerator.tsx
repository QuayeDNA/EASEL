import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Heart, Share2, RefreshCw, Shuffle } from 'lucide-react';
import { generateRandomPalette, savePalette, copyToClipboard } from '@/utils/colorUtils';
import { PALETTE_SIZES, DEFAULT_PALETTE_SIZE } from '@/constants/moods';
import { ColorPalette } from '@/types';

const RandomGenerator: React.FC = () => {
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);
  const [paletteSize, setPaletteSize] = useState<number>(DEFAULT_PALETTE_SIZE);
  const [paletteName, setPaletteName] = useState<string>('');
  const [savedPalettes, setSavedPalettes] = useState<ColorPalette[]>([]);

  const generatePalette = () => {
    const colors = generateRandomPalette(paletteSize);
    setCurrentPalette(colors);
    setPaletteName(`Random Palette ${Date.now()}`);
  };

  const handleSavePalette = () => {
    if (currentPalette.length === 0) return;

    const palette: ColorPalette = {
      id: Date.now().toString(),
      name: paletteName,
      colors: currentPalette,
      createdAt: new Date(),
      tags: ['random', 'generated']
    };

    savePalette(palette);
    setSavedPalettes(prev => [palette, ...prev]);
  };

  const handleCopyColor = async (color: string) => {
    const success = await copyToClipboard(color);
    if (success) {
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
        <h1 className="text-3xl md:text-4xl font-bold">Random Palette Generator</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Generate completely random color palettes. Perfect for inspiration or when you want something unexpected.
        </p>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Generate Random Palette</CardTitle>
          <CardDescription>Choose your palette size and let randomness guide your creativity</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Palette Size Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Palette Size</label>
            <div className="flex gap-2 flex-wrap">
              {PALETTE_SIZES.map((size) => (
                <Button
                  key={size}
                  variant={paletteSize === size ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPaletteSize(size)}
                >
                  {size} colors
                </Button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button onClick={generatePalette} size="lg" className="w-full">
            <Shuffle className="w-4 h-4 mr-2" />
            Generate Random Palette
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
                  🎲 {paletteName}
                </CardTitle>
                <CardDescription>
                  Randomly generated • {paletteSize} colors
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

            {/* Regenerate Button */}
            <div className="mt-6 text-center">
              <Button variant="outline" onClick={generatePalette}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Generate Another
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Random Generation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Larger palettes (7-8 colors) work great for complex designs</li>
            <li>• Smaller palettes (3-4 colors) are perfect for minimal designs</li>
            <li>• Save palettes you like - you can always modify them later</li>
            <li>• Use the mood-based generator for more intentional color choices</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RandomGenerator;
