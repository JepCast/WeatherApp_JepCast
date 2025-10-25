import { useEffect, useState } from "react"
import type { UseWeatherReturn, WeatherData } from "../types/weather";

const baseURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const forecastApiKey = import.meta.env.VITE_WEATHER_FORECAST_API_KEY;
const forecastBaseUrl = import.meta.env.VITE_WEATHER_FORECAST_API_URL;

export const useWeather = (city: string): UseWeatherReturn => {
    const [data, setData] = useState<WeatherData | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!city) return;
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const currentRes = await fetch(`${baseURL}weather?q=${city}&appid=${apiKey}&units=metric`)
                const forecastRes = await fetch(`${forecastBaseUrl}?key=${forecastApiKey}&q=${city}`);
                if (!currentRes.ok && !forecastRes.ok) throw new Error('City was not found')
                const currentData = await currentRes.json();
                const forecastData = await forecastRes.json();
                setData({
                    ...currentData,
                    ...forecastData
                })
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknow Error")
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [city])

    return { data, error, isLoading }
}
