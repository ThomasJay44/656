import React from 'react';

import "./style.css";

export default function PropertyMaintenance() {
  return (
    <div className="propertyMaintenanceContainer">
      <h1 className="propertyMaintenanceTitle">Property Maintenance Services</h1>
      <p className="propertyMaintenanceIntro">
        At 656 Services, we provide a wide range of property maintenance solutions to keep your home or business in excellent condition. Explore our services below and discover how we can help maintain and enhance your property.
      </p>
      <div className="servicesList">
        {/* Service: Power Washing */}
        <div className="serviceItem">
          <div className="serviceImage">
            {/* Replace with your photo */}
            <img src="./assets/dirty.jpg" alt="Power Washing" />
            <img src="./assets/clean.jpg" alt="Power Washing" />
          </div>
          <div className="serviceDetails">
            <h2>Power Washing</h2>
            <p>Remove dirt, grime, and mildew from driveways, patios, and siding for a refreshed look.</p>
          </div>
        </div>

        {/* Service: Painting */}
        <div className="serviceItem">
          <div className="serviceImage">
            <img src="./assets/painting-placeholder.jpg" alt="Painting" />
          </div>
          <div className="serviceDetails">
            <h2>Interior and Exterior Painting</h2>
            <p>Professional painting services with attention to detail to revitalize your space.</p>
          </div>
        </div>

        {/* Service: Handyman Services */}
        <div className="serviceItem">
          <div className="serviceImage">
            <img src="./assets/handyman-placeholder.jpg" alt="Handyman Services" />
          </div>
          <div className="serviceDetails">
            <h2>Handyman Services</h2>
            <p>Minor repairs, furniture assembly, and installations to keep your property functional.</p>
          </div>
        </div>

        {/* Service: Gutter Cleaning */}
        <div className="serviceItem">
          <div className="serviceImage">
            <img src="./assets/gutter-cleaning-placeholder.jpg" alt="Gutter Cleaning" />
          </div>
          <div className="serviceDetails">
            <h2>Gutter Cleaning</h2>
            <p>Clear debris to prevent water damage and ensure proper water flow and drainage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


