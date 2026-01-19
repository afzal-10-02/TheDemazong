import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Keep Components here
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. Import Pages from the NEW folder
import Home from './pages/Home';
import About from './pages/About';
import SubscribeModal from './components/SubscribeModal';



function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>

      <SubscribeModal />
    </Router>
  );
}

export default App;