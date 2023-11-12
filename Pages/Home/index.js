import React from "react";
import { Link } from 'react-router-dom'; // Import Link
import "./style.css";

export default function Home() {
  return (
    <div className="backgroundContainer">
      <div className="content">
        <div className="bioContainer">
          <h1>Welcome to 656 Services</h1>
          <p>Your business bio goes here. Describe your services and what makes your business unique.</p>
          <div className="buttons">
            <Link to="/contact">
              <button>Contact</button>
            </Link>
            {/* <button>View Services</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
