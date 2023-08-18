import React from 'react';
import './ForecastCard.css'; // You can create this CSS file for styling

function ForecastCard({ date, temperature, condition, icon }) {
  return (
    <div className="forecast-card">
      <p className="date">{date}</p>
      <div className="forecast-details">
        <img src={icon} alt={condition} />
        <p className="temperature">{temperature}&deg;C</p>
        <p className="condition">{condition}</p>
      </div>
    </div>
  );
}

export default ForecastCard;
