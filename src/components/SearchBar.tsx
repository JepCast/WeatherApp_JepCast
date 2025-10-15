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
        <header className="flex items-center justify-between p-4">
            {/* Barra de búsqueda */}
            <form
                onSubmit={handleSubmit}
                className="relative flex items-center w-full max-w-md bg-white/10 rounded-2xl px-4 py-2
    backdrop-blur-sm mb-1 transition
    focus-within:ring-2 focus-within:ring-gray-200
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-full after:h-[2px] after:bg-gray-300 after:rounded-full
    focus-within:after:bg-transparent"
            >
                <input
                    type="search"
                    name="city_searchbar"
                    id="city_searchbar"
                    placeholder="Enter a city"
                    aria-label="Search city"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    className="w-full pl-10 pr-4 bg-transparent outline-none placeholder-gray-400"
                />

                <button
                    type="submit"
                    disabled={!inputValue}
                    className="absolute cursor-pointer right-3 text-gray-400 text-xl disabled:opacity-30 transition"
                >
                    <IoSearch />
                </button>
            </form>

            {/* 🌤️ Logo */}
            <div className="flex items-center gap-2 ml-4">
                <TiWeatherPartlySunny className="text-2xl" />
                <p className="font-semibold text-lg">WeatherDay</p>
            </div>
        </header>

    )
}

export default SearchBar