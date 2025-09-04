import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

function App() {
  const [palettes, setPalettes] = useState<string[][]>([])

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
  }

  const generatePalette = () => {
    const newPalette = Array.from({length: 5}, () => generateRandomColor())
    setPalettes(prev => [newPalette, ...prev])
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">EASEL</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Palette Generator</CardTitle>
            <CardDescription>Create stunning color palettes with one click</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={generatePalette} size="lg">
              Generate Random Palette
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {palettes.map((palette, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Palette {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  {palette.map((color, colorIndex) => (
                    <div key={colorIndex} className="flex-1">
                      <div
                        className="h-20 rounded-md cursor-pointer transition-transform hover:scale-105"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                      <p className="text-center text-sm mt-2 font-mono">{color}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" size="sm">Save Palette</Button>
                  <Button variant="outline" size="sm">Share</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
