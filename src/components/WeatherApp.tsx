import React, { useState } from "react"
import { IoSearch } from "react-icons/io5";
import { useWeather } from "../hooks/useWeather";

function WeatherApp() {
    const [inputValue, setInputValue] = useState<string>("")
    const [city, setCity] = useState<string>("")

    const { data, error, isLoading } = useWeather(city)

    if (isLoading) return <p>Loading...</p>
    if (error) return (
            <div>
                <p>:(</p>
                {error.message}
            </div>
    )
    // if (!data) return <p>Ups something went wrong...</p>

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValue)
        setCity(inputValue.toLowerCase())
    }
    return (
        <div>
            <header>
                <form onSubmit={handleSubmit}>
                    <input
                        type="search"
                        name="city_searchbar"
                        id="city_searchbar"
                        placeholder="Enter a city"
                        aria-label="Seach city"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <button type="submit" disabled={!inputValue}>
                        <IoSearch />
                    </button>
                </form>
            </header>
        </div>
    )
}

export default WeatherApp