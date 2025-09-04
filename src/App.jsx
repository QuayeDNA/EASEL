import { Container } from '@mui/material';
import Appbar from './components/Appbar';
import { ThemeProvider } from './components/Theme/ThemeToggler';
import "./App.css";

import ColorPaletteGenerator from './components/Test';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Container maxWidth={false}> {/* Set maxWidth to 'false' to remove the maximum width */}
          <Appbar />
          <ColorPaletteGenerator />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
