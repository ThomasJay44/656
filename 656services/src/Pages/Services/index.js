import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

export default function Services() {
  return (
    <div className="servicesContainer">
      <h1 className="servicesTitle">Our Services</h1>
      <div className="servicesButtons">
        <Link to="/wj" className="serviceButton"> {/* Linking to WJ page */}
          Lawn Maintenance
        </Link>
        <Link to="/wj" className="serviceButton"> {/* Linking to WJ page */}
          Snow Removal
        </Link>
        <Link to="/PropertyMaintenance" className="serviceButton">
          Property Maintenance
        </Link>
        <Link to="/propertymanagement" className="serviceButton">
          Property Management
        </Link>
      </div>
    </div>
  );
}
