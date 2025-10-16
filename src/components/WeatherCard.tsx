import type { WeatherCardPorps } from "../types/weather"

function WeatherCard({ data, error, isLoading }: WeatherCardPorps) {
  if (isLoading) return <p>Loading weather data...</p>
  if (error) return <p>{error}</p>
  if (!data) return

  return (
    <main className="flex gap-30">

      <header className="card-header">
        <div className="location">
          <span>Da Nang, Viet Nam</span>
          <i className="fas fa-pencil-alt"></i>
        </div>
        <div className="logo">
          <i className="fas fa-cloud-sun"></i>
          <span>WeatherDay</span>
        </div>
      </header>

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
      </section>

      <section className="main-content">
        <div className="current-weather">
          <p className="time-date">15:23 &middot; 15 March, Saturday</p>
          <div className="temperature-display">
            <span className="temp-value">21</span>
            <span className="temp-unit">°C</span>
          </div>
          <div className="weather-details">
            <p>Humidity: 90%</p>
            <p>Precipitation: 89%</p>
            <p>Wind: 15km/h</p>
          </div>
        </div>

        <div className="weather-graphic">
        </div>
      </section>

      <footer className="hourly-forecast">
        <div className="hour">
          <span>0:00</span>
          <span className="temp">17°C</span>
        </div>
        <div className="hour">
          <span>4:00</span>
          <span className="temp">18°C</span>
        </div>
        <div className="hour">
          <span>8:00</span>
          <span className="temp">20°C</span>
        </div>
        <div className="hour">
          <span>13:00</span>
          <span className="temp">21°C</span>
        </div>
        <div className="hour">
          <span>17:00</span>
          <span className="temp">20°C</span>
        </div>
        <div className="hour">
          <span>21:00</span>
          <span className="temp">18°C</span>
        </div>
      </footer>

    </main>
  )
}

export default WeatherCard