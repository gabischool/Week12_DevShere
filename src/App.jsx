import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


// TODO: Import react router dom here
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import './styles/App.css';


function App() {
  return (
    <Router>
    <div className="app-container">
      <Navbar /> {/* Add the Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;