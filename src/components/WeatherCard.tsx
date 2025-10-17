import { PiDropBold, PiThermometerLight } from "react-icons/pi";
import { useGetTymeByTimeZone } from "../hooks/useGetTymeByTimeZone"
import type { WeatherCardPorps } from "../types/weather"
import { FiWind } from "react-icons/fi";
import { IoPartlySunny, IoSunnyOutline } from "react-icons/io5";
import { LuCloudSunRain } from "react-icons/lu";
import { BsCloudRain, BsCloudSnow, BsFillCloudsFill } from "react-icons/bs";

function WeatherCard({ data, error, isLoading }: WeatherCardPorps) {

  const { time, dateText } = useGetTymeByTimeZone(data?.timezone ?? 0);
  if (isLoading) return <p>Loading weather data...</p>
  if (error) return <p>{error}</p>
  if (!data) return
  if (data) console.log(time)
  console.log(data)

  let weather_graphic;

  switch(data.weather[0].main) { 
                case 'Clear':
                    weather_graphic= <IoSunnyOutline/>;
                    break;
    
                case 'Clouds':
                    weather_graphic = <BsFillCloudsFill/>;
                    break;
    
                case 'Rain':
                    weather_graphic = <BsCloudRain/>;
                    break;
    
                case 'Snow':
                    weather_graphic = <BsCloudSnow/>;
                    break;
                    
                case 'Mist':
                    weather_graphic = <IoPartlySunny/>;
                    break;
    
                case 'Drizzle':
                    weather_graphic = <LuCloudSunRain/>;
                    break;
    
                    default:
                        weather_graphic = <IoSunnyOutline/>;
            }


  return (
    <main className="flex flex-col gap-5 ml-8">
      {/* 
      <header>
        <ul className="flex gap-20 ml-8">
          <li>Hola</li>
          <li>Hola</li>
          <li>Hola</li>
          <li>Hola</li>
          <li>Hola</li>
        </ul>
      </header> */}

      {/* 
      <section className="weekly-forecast">
        <div className="day">
          <span>Mon</span>
          <i className="fas fa-cloud-sun"></i>
          <span>23°</span>
        </div>
        <div className="day">
          <span>Tue</span>
          <i className="fas fa-sun"></i>
          <span>21°</span>
        </div>
        <div className="day">
          <span>Wed</span>
          <i className="fas fa-cloud"></i>
          <span>25°</span>
        </div>
        <div className="day">
          <span>Thu</span>
          <i className="fas fa-sun"></i>
          <span>24°</span>
        </div>
        <div className="day">
          <span>Fri</span>
          <i className="fas fa-cloud-sun"></i>
          <span>27°</span>
        </div>
        <div className="day active">
          <span>Sat</span>
          <i className="fas fa-cloud-showers-heavy"></i>
          <div className="precipitation-percent">20%</div>
        </div>
        <div className="day">
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
      <section className="flex items-center justify-between relative">
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
          <p className="font-sans ml-2 p-2 absolute rounded-4xl bg-blue-50/5">
            {data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </p>
        </div>

        <div className="weather-graphic text-[13rem] transition-all ease-in duration-200 absolute right-20">
          {weather_graphic}
        </div>
      </section>

      <footer className="flex justify-between mt-20 mr-4">
        <div className="flex flex-col">
          <span>0:00</span>
          <span className="temp">17°C</span>
        </div>
        <div className="flex flex-col">
          <span>4:00</span>
          <span className="temp">18°C</span>
        </div>
        <div className="flex flex-col">
          <span>8:00</span>
          <span className="temp">20°C</span>
        </div>
        <div className="flex flex-col">
          <span>13:00</span>
          <span className="temp">21°C</span>
        </div>
        <div className="flex flex-col">
          <span>17:00</span>
          <span className="temp">20°C</span>
        </div>
        <div className="flex flex-col">
          <span>21:00</span>
          <span className="temp">18°C</span>
        </div>
      </footer>

    </main>
  )
}

export default WeatherCard