import { useEffect, useState } from "react"
const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

interface DailyTemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

// interface DailyForecast {

// }

interface WeatherData {
    name: string;
    coord: {
        lon: number;
        lat: number;
    }
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
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
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];

}

export const useWeather = (city: string) => {
    const [data, setData] = useState<WeatherData | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!city) return;
        const fetchData = async () => {
            try {
                const currentRes = await fetch(`${baseURL}weather?q=${city}&appid=${apiKey}&units=metric`)
                if (!currentRes.ok) throw new Error('Could not fetch weather API')
                const currentData = await currentRes.json();
                
                const { lat, lon } = currentData.coord;

                const forecastRes = await fetch(`${baseURL}forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
                if (!forecastRes.ok) throw new Error('Could not fetch forecast API')
                const forecastData = await forecastRes.json();
                
                console.log(forecastData)
                setData(currentData)
            } catch (error) {
                setError(error as Error)
                setIsLoading(false);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [city])

    return { data, error, isLoading }
}
