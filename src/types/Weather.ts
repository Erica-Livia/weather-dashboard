export interface HourlyForecast {
  time: number; // Unix timestamp
  temp: number; // Temperature
  icon: string; // Weather condition icon (e.g., "sunny", "rainy", etc.)
}
export interface Weather {
  city: string;
  temperature: number;
  description: string;
  lat: number;
  lon: number;
  humidity: number;
  windSpeed: number;
  hourly: { time: number; temp: number }[];
}
