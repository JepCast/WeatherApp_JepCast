interface WeatherData {
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  rain: {
    "1h"?: string;
  };
  clouds: {
    all: number
  };
  name: string;
}

interface WeatherCardPorps {
  data: WeatherData | null;
  isLoading: boolean;
  error: string | null
}


interface UseWeatherReturn {
    data: WeatherData | null;
    error: string | null
    isLoading: boolean;
}

export type {WeatherData, WeatherCardPorps, UseWeatherReturn}