import React from 'react';
import './WeatherCard.css'; // You can create this CSS file for styling

function WeatherCard({ location, temperature, condition, icon }) {
  return (
    <div className="weather-card">
      <h2 className="location">{location}</h2>
      <div className="weather-details">
        <img src={icon} alt={condition} />
        <p className="temperature">{temperature}&deg;C</p>
        <p className="condition">{condition}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
