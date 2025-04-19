import React from 'react';
import Navbar from './components/Navbar';

// TODO: Import react router dom here

import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
         {/* TODO: Add react router dom routes here */}
         
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;