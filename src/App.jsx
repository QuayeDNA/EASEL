import { Container } from '@mui/material';
import Appbar from './components/Appbar';
import "./app.css";


import Test from './components/Test';

function App() {
  return (
    <div>
    <Container maxWidth={false}> {/* Set maxWidth to 'false' to remove the maximum width */}
        <Appbar />
        <Test />
    </Container>
    </div>
  );
}

export default App;
