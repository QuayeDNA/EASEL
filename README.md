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

- Generate Random Colors: Click the "Generate Color" button to create a new random color.
- Search Colors: Use the search bar to find colors by name, hex code, or RGB values.
- Tweak Color Values: Adjust RGB values to fine-tune the color to your liking.
- Save Color Palettes: Sign in to save and manage your color palettes. Supported export formats include [list formats here].
- Share Color Palettes: Share your color palettes with a unique URL.
- Contribute to the Color Library: Help us expand our color library by submitting color names, hex codes, and RGB values.

## Tech Stack

**Client:** React, Vite, MUI

**Server:** Node, Express

## Contributing

We welcome contributions to make EASEL even better. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Submit a pull request.

Please follow our [Contribution Guidelines](https://github.com/QuayeDNA/easel/blob/main/CONTRIBUTING.md) for detailed information.

## License

This project is licensed under the MIT License. For more information, read our.
[LICENSE file](https://choosealicense.com/licenses/mit/).

## Roadmap

We have big plans for EASEL's future, including:

- Color gradient generation
- Enhanced export options
- User account system

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Authors

- [@QuayeDNA](https://www.github.com/QuayeDNA)

## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
