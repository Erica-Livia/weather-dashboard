import React from "react";
import { Weather } from "../types/Weather";
import TemperatureGraph from "./TemperatureGraph";
import WeatherMap from "./WeatherMap";
import "./WeatherDisplay.css";

interface WeatherDisplayProps {
  weather: Weather;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  // Extract temperature data for the next 24 hours
  const temperatureData = weather.hourly.slice(0, 24).map((temp) => ({
    time: new Date(temp.time * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: temp.temp,
  }));

  return (
    <div className="weather-display">
      <h2>{weather.city}</h2>
      <p className="temperature">
        Current Temperature: {weather.temperature}°C
      </p>
      <p>Description: {weather.description}</p>

      {/* Weather details */}
      <div className="details">
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.windSpeed} m/s</p>
      </div>

      {/* Hourly forecast for the next 24 hours */}
      <div className="hourly-forecast">
        <h3>Hourly Forecast for the Next 24 Hours</h3>
        <ul>
          {weather.hourly.slice(0, 24).map((hour, index) => (
            <li key={index}>
              {new Date(hour.time * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
              : {hour.temp}°C
            </li>
          ))}
        </ul>
      </div>

      {/* Renders the temperature graph */}
      <div className="graph-container">
        <TemperatureGraph
          data={temperatureData}
          currentTemp={weather.temperature}
          location={weather.city}
        />
      </div>

      {/* Renders the map with city location */}
      <div className="map-container">
        <WeatherMap lat={weather.lat} lon={weather.lon} city={weather.city} />
      </div>
    </div>
  );
};

export default WeatherDisplay;
