import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import MoodPalette from './pages/MoodPalette';
import RandomGenerator from './pages/RandomGenerator';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<MoodPalette />} />
          <Route path="/generate" element={<RandomGenerator />} />
          <Route path="/saved" element={<div>Saved Palettes - Coming Soon!</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
