import './styles/style.css'
import { useState } from "react"
import { useWeather } from "./hooks/useWeather"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"

function App() {
  const [city, setCity] = useState<string>("")

  const { data, error, isLoading } = useWeather(city)
  return (
    <div>
      <div className='shadow'>
        <SearchBar setCity={setCity} />
        <WeatherCard data={data} isLoading={isLoading} error={error} />
      </div>
    </div>
  )
}

export default App