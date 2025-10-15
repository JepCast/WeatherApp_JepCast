import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TiWeatherPartlySunny } from "react-icons/ti";

interface SearchBarProps {
    setCity: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ setCity }: SearchBarProps) {
    const [inputValue, setInputValue] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValue)
        setCity(inputValue.toLowerCase())
    }
    return (
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
            <div>
                <TiWeatherPartlySunny/>
                <p>WeatherDay</p>
            </div>
        </header>
    )
}

export default SearchBar