import axios from "axios";
import { Weather } from "../types/Weather";

const API_KEY = "ae065c86dcaf8824a9b19989a9056223";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city: string): Promise<Weather> => {
  const response = await axios.get(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  return {
    city: (response.data as any).name,
    temperature: (response.data as any).main.temp,
    description: (response.data as any).weather[0].description,
  };
};

export const fetchWeatherByLocation = async (
  lat: number,
  lon: number
): Promise<Weather> => {
  const response = await axios.get(
    `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return {
    city: (response.data as any).name,
    temperature: (response.data as any).main.temp,
    description: (response.data as any).weather[0].description,
  };
};
