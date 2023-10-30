import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <nav>
      <Link to="/" className="logo">656 Services</Link>
      <ul>
        <li><Link to="/wj">WJ</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}


