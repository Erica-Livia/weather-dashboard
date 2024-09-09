// types/WeatherResponse.ts
export interface WeatherResponse {
    city: { name: string; coord: { lat: number; lon: number; } };
    list: {
      dt: number; // Unix timestamp
      main: { temp: number; humidity: number; };
      weather: { description: string; }[];
      wind: { speed: number; };
    }[];
  }
  