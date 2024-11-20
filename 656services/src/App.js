// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Footer, Navigation } from './Components';
import { Home, Gallery, Contact, WJ, Services, PropertyMaintenance } from './Pages';  // Correct import
import { Management } from './Pages';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/656" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/wj" element={<WJ />} />
            <Route path="/propertymaintenance" element={<PropertyMaintenance />} />
            <Route path="/propertymanagement" element={<Management />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
