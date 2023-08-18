import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import './App.css'; // You can create this CSS file for styling

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  const fetchWeatherData = async (location) => {
    // Implement your API call here using the location parameter
    // Update the state with the fetched weather data
    // setWeatherData(responseData);
  };

  const fetchForecastData = async (location) => {
    // Implement your API call here using the location parameter
    // Update the state with the fetched forecast data
    // setForecastData(responseData);
  };

  useEffect(() => {
    // Call the fetchWeatherData and fetchForecastData functions here with a default location
  }, []);

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={fetchWeatherData} />
      {weatherData && (
        <WeatherCard
          location={weatherData.location}
          temperature={weatherData.temperature}
          condition={weatherData.condition}
          icon={weatherData.icon}
        />
      )}
      <div className="forecast-container">
        {forecastData.map((forecast, index) => (
          <ForecastCard
            key={index}
            date={forecast.date}
            temperature={forecast.temperature}
            condition={forecast.condition}
            icon={forecast.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
