# EASEL - Advanced Color Palette Generator

EASEL is a modern, React-based color palette generator built with TypeScript, Tailwind CSS 4.1, and Shadcn UI. It empowers designers, developers, and creatives to create, customize, and share stunning color palettes effortlessly. With a sleek, responsive interface and powerful features, EASEL makes color theory accessible and fun.

## ✨ Features

- **🎨 Dynamic Palette Generation**: Create random or custom color palettes with advanced algorithms.
- **🌓 Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences.
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **🎯 Color Picker Integration**: Interactive color selection with hex, RGB, and HSL support.
- **💾 Save & Share Palettes**: Store your creations locally or export/share them.
- **🔍 Color Search & Analysis**: Find colors by name, code, or explore color harmonies.
- **⚡ Fast & Modern Stack**: Built with React 19, TypeScript, Tailwind 4.1, and Shadcn UI for optimal performance.
- **♿ Accessibility First**: WCAG-compliant components for inclusive design.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/QuayeDNA/EASEL.git
   cd EASEL
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` to see EASEL in action!

### Build for Production
```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4.1 (no config approach)
- **UI Components**: Shadcn UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📁 Project Structure

```
EASEL/
├── src/
│   ├── components/
│   │   ├── ui/           # Shadcn UI components
│   │   ├── Appbar.tsx    # Navigation header
│   │   ├── Test.tsx      # Example component
│   │   └── Theme/        # Theme management
│   │       ├── ThemeProvider.tsx
│   │       ├── ThemeToggler.tsx
│   │       └── Theme.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   ├── index.css         # Global styles with Tailwind
│   └── lib/
│       └── utils.ts      # Utility functions
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## 🎨 Usage

1. **Generate Palettes**: Click "Generate Random Palette" to create a new color scheme.
2. **Customize Colors**: Use the color picker to adjust individual colors.
3. **Toggle Themes**: Switch between light and dark modes using the theme toggler.
4. **Save Palettes**: Export your palettes as JSON or share them via URL.

## 🎯 Roadmap

### Near-term Enhancements
- [ ] **Color Harmony Tools**: Complementary, triadic, and analogous color suggestions
- [ ] **Gradient Generator**: Create smooth color transitions
- [ ] **Accessibility Checker**: WCAG contrast ratio validation
- [ ] **Color Blindness Simulator**: Preview palettes for different vision types

### Future Features
- [ ] **Cloud Sync**: Account system with cloud palette storage
- [ ] **Community Gallery**: Share and discover palettes from other users
- [ ] **API Integration**: Connect with popular design tools (Figma, Adobe, etc.)
- [ ] **Advanced Export**: CSS, SCSS, Adobe Swatch files
- [ ] **Color Extraction**: Upload images to extract color palettes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Write clean, readable code with meaningful comments
- Follow Shadcn UI design principles for consistency
- Ensure responsive design across all screen sizes
- Test thoroughly on different browsers and devices
- Maintain accessibility standards (WCAG 2.1 AA)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the powerful frontend library
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

Made with ❤️ by the EASEL team
