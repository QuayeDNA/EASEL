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

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) for the powerful frontend library
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

Made with ❤️ by the EASEL team

### 🎨 Creating Palettes
1. **Set Color Count**: Choose between 1-20 colors for your palette
2. **Generate**: Click "Generate New Palette" for random colors
3. **Search & Add**: Use the search bar to add specific colors by hex code or name
4. **Copy Colors**: Click the copy icon on any color card to copy the hex code

### 💾 Managing Palettes
1. **Save**: Click "Save Palette" and give it a memorable name
2. **Browse**: View all saved palettes with "Saved Palettes"
3. **Load**: Click "Load" on any saved palette to apply it
4. **Export**: Download palettes as JSON files for backup or sharing

### 🌓 Customization
- **Theme Toggle**: Click the theme icon in the top-right to switch between light and dark modes
- **Responsive**: The app automatically adapts to your screen size
- **Persistent**: Your preferences and palettes are saved locally

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.1.1** - Latest React with concurrent features
- **Material-UI 6.5.0** - Modern Material Design components
- **Emotion** - CSS-in-JS styling solution

### Build Tools
- **Vite 7.1.4** - Next-generation frontend build tool
- **ESLint** - Code quality and consistency
- **SWC** - Super-fast JavaScript/TypeScript compiler

### Features & Libraries
- **Local Storage API** - Client-side data persistence
- **Clipboard API** - One-click color copying
- **CSS Grid & Flexbox** - Modern responsive layouts
- **Material Icons** - Comprehensive icon library

## 📁 Project Structure

```
EASEL/
├── src/
│   ├── components/
│   │   ├── Theme/
│   │   │   ├── Theme.js          # Theme definitions
│   │   │   └── ThemeToggler.jsx  # Theme context & toggle
│   │   ├── Appbar.jsx            # Navigation header
│   │   └── Test.jsx              # Main color palette component
│   ├── App.jsx                   # Root application component
│   ├── main.jsx                  # Application entry point
│   └── App.css                   # Global styles
├── public/                       # Static assets
├── dist/                         # Production build output
├── package.json                  # Dependencies & scripts
└── vite.config.js               # Vite configuration
```

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

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow our coding standards
4. **Add tests**: Ensure your changes are well-tested
5. **Commit**: `git commit -m 'Add amazing feature'`
6. **Push**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**: Describe your changes clearly

### Development Guidelines
- Write clean, readable code with meaningful comments
- Follow Material Design principles for UI components
- Ensure responsive design across all screen sizes
- Test thoroughly on different browsers and devices
- Maintain accessibility standards (WCAG 2.1 AA)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## 👥 Authors & Contributors

- **[@QuayeDNA](https://github.com/QuayeDNA)** - Project Creator & Lead Developer
- **AI Assistant** - Enhanced development and feature implementation

## 🙏 Acknowledgments

- **Material-UI Team** - For the excellent component library
- **Vite Team** - For the blazing-fast build tool
- **React Team** - For the incredible framework
- **Open Source Community** - For inspiration and continuous improvement

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/QuayeDNA/EASEL/issues)
- **Discussions**: [GitHub Discussions](https://github.com/QuayeDNA/EASEL/discussions)
- **Email**: Create an issue for direct contact

---

<div align="center">

**Made with ❤️ by [QuayeDNA](https://github.com/QuayeDNA)**

⭐ Star this repository if you find it helpful!

</div>
