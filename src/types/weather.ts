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
  timezone: number;
  forecast: {
    forecastday: {
      hour: {
        time: string;
        temp_c: number;
        condition: {
          text: string;
        }
      }[];
    }[];
  };
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

interface useGetTymeByTimeZoneReturn {
  time: string;
  dateText: string;
}

type HourData = {
  time: string;
  temp_c: number;
  condition: { text: string };
};

interface ForecastHourProp {
  forecastTemp: HourData[];
}

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: {
    time: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  }[];
}


interface ForecastWeekProps {
  forecastDays: ForecastDay[]; // data.forecast.forecastday
}

export type { WeatherData, WeatherCardPorps, UseWeatherReturn, useGetTymeByTimeZoneReturn, ForecastHourProp, ForecastWeekProps }