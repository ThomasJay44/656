import React from "react";
import "./style.css";

const WJ = () => {
  return (
    <div className="wjContainer">
      <div className="contentWrapper">
        <h1 className="wjTitle">W&J Landscaping</h1>
        <p className="wjDescription">
          Established over 50 years ago in Cedar Grove, New Jersey, W&J Landscaping has been providing top-notch landscaping services for homes and businesses alike. 
          Our services include everything from seasonal clean-ups to lawn mowing, hedge trimming, and more. We are committed to delivering the highest quality service to keep your property looking beautiful year-round.
        </p>

        <div className="wjServices">
          <h2>Our Services</h2>
          <ul className="serviceList">
            <li>Spring/Fall Clean-ups</li>
            <li>Lawn Mowing</li>
            <li>Hedge Trimming</li>
            <li>Mulch and Decorative Rock Installations</li>
            <li>Perennial and Annual Flowers</li>
            <li>Snow Removal and Plowing Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WJ;
