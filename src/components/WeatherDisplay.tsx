import React from "react";
import { Weather } from "../types/Weather";

interface WeatherDisplayProps {
  weather: Weather;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  return (
    <div>
      <h2>{weather.city}</h2>
      <p>{weather.temperature}°C</p>
      <p>{weather.description}</p>
    </div>
  );
};

export default WeatherDisplay;
