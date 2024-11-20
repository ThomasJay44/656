import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './style.css';

const Management = () => {
  return (
    <div className="propertyManagementContainer">
      <h1 className="propertyManagementTitle">Property Management Services</h1>
      <p className="propertyManagementDescription">
        At 656 Services, we offer comprehensive property management solutions for both residential and commercial units. 
        Our team is dedicated to ensuring your properties are well-maintained, tenants are happy, and repairs are taken care of promptly.
      </p>

      <div className="propertyServices">
        <h2 className="serviceTitle">Our Property Management Services</h2>
        <ul className="serviceList">
          <li>
            <h3>Maintenance & Repairs</h3>
            <p>We handle everything from routine maintenance to emergency repairs, ensuring your properties stay in top condition.</p>
            <div className="serviceImage">
              <img src="./assets/maintenance.jpg" alt="Maintenance" />
            </div>
          </li>
          <li>
            <h3>Commercial & Residential Rentals</h3>
            <p>Our team offers full-service rental management, from finding tenants to handling lease agreements and rent collection.</p>
            <div className="serviceImage">
              <img src="./assets/rentals.jpg" alt="Rentals" />
            </div>
          </li>
          <li>
            <h3>Property Inspections</h3>
            <p>Regular inspections to ensure your properties are up to code, well-maintained, and compliant with local regulations.</p>
            <div className="serviceImage">
              <img src="./assets/inspection.jpg" alt="Inspection" />
            </div>
          </li>
        </ul>
      </div>

      <div className="contactSection">
        <h2>Contact Us for Property Management Services</h2>
        <p>If you’re looking for reliable, professional property management, reach out to us today!</p>
        {/* Use Link component to navigate to the /contact page */}
        <Link to="/contact" className="contactButton">Contact Us</Link>
      </div>
    </div>
  );
}

export default Management;
