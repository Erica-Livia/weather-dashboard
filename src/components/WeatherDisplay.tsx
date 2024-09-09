import React from 'react';
import { Weather } from '../types/Weather';
import TemperatureGraph from './TemperatureGraph'; // For displaying the temperature graph
import WeatherMap from './WeatherMap'; // For displaying the map

interface WeatherDisplayProps {
  weather: Weather;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  // Generate temperature data for the graph
  const temperatureData = weather.hourly.map((temp, index) => ({
    time: new Date(temp.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Convert Unix timestamp to time format
    temp: temp.temp, // Use actual temperature values
  }));

  return (
    <div className="weather-display">
      <h2>{weather.city}</h2>
      <p>Current Temperature: {weather.temperature}°C</p>
      <p>Description: {weather.description}</p>
      
      {/* Renders the temperature graph */}
      <TemperatureGraph data={temperatureData} />

      {/* Renders the map with city location */}
      <WeatherMap lat={weather.lat} lon={weather.lon} city={weather.city} />

      {/* weather details */}
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
