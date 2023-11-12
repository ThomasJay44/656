// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Navigation } from './Components';
import { Home, Gallery, Contact, WJ } from './Pages';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wj" element={<WJ />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}