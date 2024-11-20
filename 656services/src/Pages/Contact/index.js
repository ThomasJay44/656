// Contact.js
import React from "react";
import "./style.css"; // Create a separate CSS file for styling

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>Phone: <a href="sms:+19733037756">(973-303-7756)</a></p>
        <p>Email: <a href="mailto:656services@gmail.com">656services@gmail.com</a></p>
        <p>Business Hours: 24/7/364
        <br />Closed on Christmas Day</p>
      </div>
    </div>        
  );  
}
