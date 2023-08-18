// api.js

const API_KEY = 'your_api_key_here'; // Replace with your actual API key
const BASE_URL = 'https://api.example.com'; // Replace with the base URL of your weather API

export async function fetchWeather(location) {
  const url = `${BASE_URL}/weather?q=${location}&appid=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
}

export async function fetchForecast(location) {
  const url = `${BASE_URL}/forecast?q=${location}&appid=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
}
