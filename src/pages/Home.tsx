import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Sparkles, Heart, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to EASEL
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Create stunning color palettes with the power of emotions. Transform your mood into beautiful color schemes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/mood">
            <Button size="lg" className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Generate Mood Palette</span>
            </Button>
          </Link>
          <Link to="/generate">
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <span>Random Generator</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle>Mood-Based Generation</CardTitle>
            <CardDescription>
              Create palettes that match your emotions. From calm blues to energetic reds.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>Smart Algorithms</CardTitle>
            <CardDescription>
              Advanced color theory algorithms ensure harmonious and visually appealing results.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <CardTitle>Save & Share</CardTitle>
            <CardDescription>
              Save your favorite palettes and share them with the world.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="bg-muted/50 rounded-lg p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Mood Types</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Color Combinations</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Free</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">🎨</div>
            <div className="text-sm text-muted-foreground">Creative</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
