import './styles/style.css'
import { useState } from "react"
import { useWeather } from "./hooks/useWeather"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"

function App() {
  const [city, setCity] = useState<string>("")

  const { data, error, isLoading } = useWeather(city)
  return (
    <div className='flex items-center justify-center min-h-screen bg-[#ebe4ff]'>
      <div className={`bg-[#988dbb] text-white p-6 rounded-2xl shadow-lg w-[30rem] md:w-[55rem] transition-all overflow-hidden  ${data ? 'h-[25rem]' : 'h-[8rem]'}`}>
        <div className='relative'>
          <SearchBar setCity={setCity} />
        </div>
        <div className='mt-6'>
          <WeatherCard data={data} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  )
}

export default App