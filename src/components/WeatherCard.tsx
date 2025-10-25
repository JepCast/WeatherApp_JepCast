import { PiDropBold, PiThermometerLight } from "react-icons/pi";
import { useGetTymeByTimeZone } from "../hooks/useGetTymeByTimeZone"
import type { WeatherCardPorps } from "../types/weather"
import { FiWind } from "react-icons/fi";
import { useWeatherGraphic } from "../hooks/useWeatherGraphic";
import { IoSunnyOutline } from "react-icons/io5";
import ForecastHour from "./ForecastHour";

function WeatherCard({ data, error, isLoading }: WeatherCardPorps) {

  const { time, dateText } = useGetTymeByTimeZone(data?.timezone ?? 0);
  // const Weather_graphic = useWeatherGraphic(data?.weather?.[0]?.main ?? null);
  const Weather_graphic = useWeatherGraphic("Mist");
  if (isLoading || !data && isLoading) return (
    <div className="p-1">
      <p
        className="flex justify-center p-9 text-[15rem] transition animate-fade-in-up"
        style={{ animation: "spin 3s linear infinite" }}>
        <IoSunnyOutline />
      </p>
      Loading...
    </div>
  )
  if (error) return <p>{error}</p>
  if (!data) return
  if (data) console.log(time)
  console.log(data)

  const forecastTempC = data.forecast.forecastday[0].hour;

  return (
    <main className="flex flex-col gap-5 ml-8">
      {/* 

      <section className="flex justify-between mb-5 mr-[50%]">
        <div className="flex flex-col">
          <span>Mon</span>
          <i className="fas fa-cloud-sun"></i>
          <span>23°</span>
        </div>
        <div className="flex flex-col">
          <span>Tue</span>
          <i className="fas fa-sun"></i>
          <span>21°</span>
        </div>
        <div className="flex flex-col">
          <span>Wed</span>
          <i className="fas fa-cloud"></i>
          <span>25°</span>
        </div>
        <div className="flex flex-col">
          <span>Thu</span>
          <i className="fas fa-sun"></i>
          <span>24°</span>
        </div>
        <div className="flex flex-col">
          <span>Fri</span>
          <i className="fas fa-cloud-sun"></i>
          <span>27°</span>
        </div>
        <div className="flex flex-col">
          <span>Sat</span>
          <i className="fas fa-cloud-showers-heavy"></i>
          <div className="precipitation-percent">20%</div>
        </div>
        <div className="flex flex-col">
          <span>Sun</span>
          <i className="fas fa-cloud"></i>
          <span>28°</span>
        </div>
      </section> */}

      <section aria-label="time-section">
        <div className="flex items-center ml-2 gap-2">
          <p className="text-4xl font-comfortaa font-bold">{time}</p>
          •
          <span>{dateText}</span>
        </div>
      </section>
      <section className="flex items-center relative">
        <div>
          <div className="current-weather flex gap-6 items-center">
            <div className="temperature-display">
              <span className="font-comfortaa temp-value text-9xl font-bold">{(data.main.temp).toString().slice(0, 2)}</span>
              <span className="text-9xl font-extralight">°</span>
              <span className="temp-unit text-8xl">C</span>
            </div>

            <div className="weather-details text-sm mt-10">
              <p className="flex items-center">
                <PiThermometerLight className="mr-1" />
                Real Feel: {data.main.feels_like.toString().slice(0, 2)}°</p>
              <p className="flex items-center">
                <PiDropBold className="mr-1" />
                Humidity: {data.main.humidity}%
              </p>
              <p className="flex items-center">
                <FiWind className="mr-1" />
                Wind: {data.wind.speed}km/h
              </p>
            </div>
          </div>
          <p className="font-sans ml-2 p-2 pr-3 pl-3 absolute rounded-4xl bg-blue-50/5">
            {data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </p>
        </div>

        <div
          className="absolute
    sm:top-0 sm:right-15 sm:text-[3rem]
    md:top-auto md:right-20 md:text-[13rem]
    transition-all ease-in duration-200"
          style={Weather_graphic.style}>
          <Weather_graphic.graphicElement />
        </div>
      </section>

      <ForecastHour forecastTemp={forecastTempC} />
    </main>
  )
}

export default WeatherCard