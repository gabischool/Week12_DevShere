import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// TODO: Import react router dom here


import Footer from './components/Footer';
import './styles/App.css';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="app">
      <Navbar /> 
      <main className="main-content">

      <Routes>
         {/* TODO: Add react router dom routes here */}
     <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
     
      <Footer />
      </main>
      </div>
    </Router>
  );
}

export default App;