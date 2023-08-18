// helpers.js

// Convert temperature from Kelvin to Celsius
export function kelvinToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(1);
}

// Format a date string to a more user-friendly format
export function formatDate(dateString) {
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Get the appropriate weather icon URL based on a weather condition code
export function getWeatherIconURL(iconCode) {
  return `https://example.com/icons/${iconCode}.png`; // Replace with your icon URL pattern
}
