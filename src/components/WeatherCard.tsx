import type { WeatherCardPorps } from "../types/weather"

function WeatherCard({data, error, isLoading}: WeatherCardPorps) {
  if(isLoading) return <p>Loading weather data...</p>
  if(error) return <p>{error}</p>
  if(!data) return

  return (
    <div>WeatherCard</div>
  )
}

export default WeatherCard