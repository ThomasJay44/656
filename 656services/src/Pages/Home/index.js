// Home.js
import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="backgroundContainer">
      <div className="content">
        <div className="bioContainer">
          <h1>Welcome to Your Business</h1>
          <p>Your business bio goes here. Describe your services and what makes your business unique.</p>
          <div className="buttons">
            <button>Contact</button>
            <button>View Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}
