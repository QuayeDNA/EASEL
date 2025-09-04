# 🎨 EASEL - Advanced Color Palette Generator

<div align="center">

![EASEL Screenshot](https://github.com/user-attachments/assets/9cd88248-271a-49b6-aaa3-db5cf51d1c65)

**A modern, feature-rich React application for creating, exploring, and managing beautiful color palettes**

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-6.5.0-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)

</div>

## ✨ Features

### 🎯 Core Functionality
- **🎲 Random Color Generation**: Generate stunning color palettes with 1-20 colors
- **🔍 Smart Color Search**: Find colors by hex codes (#RRGGBB) or common color names
- **📋 One-Click Copy**: Copy any color code to clipboard instantly
- **💾 Palette Management**: Save, load, and organize your favorite color palettes
- **📤 Export Capabilities**: Export palettes as JSON files for sharing and backup

### 🎨 Advanced Features
- **🌓 Dark/Light Mode**: Seamless theme switching with system preference detection
- **🏷️ Color Intelligence**: Automatic color naming and RGB value display
- **📱 Responsive Design**: Perfect experience across desktop, tablet, and mobile
- **💾 Local Storage**: Automatic saving of current palette and preferences
- **🎪 Interactive UI**: Modern Material Design with smooth animations

### 🔧 Technical Excellence
- **⚡ Lightning Fast**: Built with Vite for optimal performance
- **🛡️ Type Safe**: Modern JavaScript with comprehensive error handling
- **♿ Accessible**: WCAG compliant with keyboard navigation support
- **🔒 Secure**: Zero security vulnerabilities with latest dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20+)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/QuayeDNA/EASEL.git
   cd EASEL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎮 How to Use

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
