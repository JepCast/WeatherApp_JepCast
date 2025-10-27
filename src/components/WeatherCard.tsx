import { PiDropBold, PiThermometerLight } from "react-icons/pi";
import { useGetTymeByTimeZone } from "../hooks/useGetTymeByTimeZone"
import type { WeatherCardPorps } from "../types/weather"
import { FiWind } from "react-icons/fi";
import { useWeatherGraphic } from "../hooks/useWeatherGraphic";
import { IoSunnyOutline } from "react-icons/io5";
import ForecastHour from "./ForecastHour";
import { TbError404 } from "react-icons/tb";
import ForecastWeek from "./ForecastWeek";

function WeatherCard({ data, error, isLoading }: WeatherCardPorps) {

  const { time, dateText } = useGetTymeByTimeZone(data?.timezone ?? 0);
  const Weather_graphic = useWeatherGraphic(data?.weather?.[0]?.main ?? null);
  if (isLoading || !data && isLoading) return (
    <div className="p-1 flex flex-col">
      <p
        className="animate-fade-in-up mt-10 flex justify-center p-9 text-[15rem] transition"
        style={{
          animation: "fadeInDown .8s ease-out, var(--spin-loading-animation)"
        }}>
        <IoSunnyOutline />
      </p>
      <p className="flex mt-15">
        Loading...
      </p>
    </div>
  )
  if (data) console.log(time)
  if (error || !data) return (
    <div className="p-1 flex flex-col mt-20 items-center">
      <p
        className="animate-fade-in-up text-[15rem] transition"
        style={{
          animation: "fadeInDown .8s ease-out, var(--fadeInDown-animation)"
        }}>
        <TbError404 />
      </p>
      <p className="text-sm">{error}</p>
    </div>
  )
  if (!data) return
  console.log(error, "Error text")
  console.log(data)

  const forecastTempC = data.forecast.forecastday[0].hour;
  // pass whole forecast object to ForecastWeek
  const forecast = data.forecast

  return (
    <div className="flex flex-col gap-5">
      <div className="md:ml-8 sm:ml-0">
        <ForecastWeek forecast={forecast} />
      </div>
      <main className="flex flex-col gap-5 ml-8">
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
                <span className="font-comfortaa temp-value text-9xl font-bold">
                  {(data.main.temp).toString().slice(0, 2)}
                </span>
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
            className="animate-fade-in-up pointer-events-none absolute right-15 top-0 text-[3rem] sm:top-0 sm:right-15 sm:text-[3rem] md:top-auto md:right-20 md:text-[13rem] transition-all ease-in duration-200"
            style={Weather_graphic.style}
          >
            <Weather_graphic.graphicElement />
          </div>
        </section>

        <ForecastHour forecastTemp={forecastTempC} />
      </main>
    </div>
  )
}

export default WeatherCard