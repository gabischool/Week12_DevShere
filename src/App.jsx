import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Projects from './pages/Projects';

// TODO: Import react router dom here
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Footer from './components/Footer';
import './styles/App.css';

import { PrinterIcon } from 'lucide-react';

function App() {
 
  
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
         
         
         {/* TODO: Add react router dom routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;