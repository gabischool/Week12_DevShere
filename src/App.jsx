import React from 'react';
import Navbar from './components/Navbar';

// TODO: Import react router dom here
import Projects from './pages/Projects'
import Home from './pages/Home'

import Footer from './components/Footer';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <main className="main-content">
        {/* ✅ Properly wrapped routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;