import type { JSX } from "react"
import type { ForecastHourProp } from "../types/weather"

function ForecastHour({forecastTemp} : ForecastHourProp): JSX.Element {
    return (
        <footer className="flex justify-between mt-15 mr-4">
            <div className="flex items-center flex-col">
                |
                <span className="text-sm font-bold">0:00</span>
                <span className="temp">{forecastTemp[0].temp_c.toString().slice(0, 2)}°C</span>
            </div>
            <div className="flex items-center flex-col">
                |
                <span className="text-sm font-bold">4:00</span>
                <span className="temp">{forecastTemp[4].temp_c.toString().slice(0, 2)}°C</span>
            </div>
            <div className="flex items-center flex-col">
                |
                <span className="text-sm font-bold">8:00</span>
                <span className="temp">{forecastTemp[8].temp_c.toString().slice(0, 2)}°C</span>
            </div>
            <div className="flex items-center flex-col">
                |
                <span className="text-sm font-bold">13:00</span>
                <span className="temp">{forecastTemp[13].temp_c.toString().slice(0, 2)}°C</span>
            </div>
            <div className="flex items-center flex-col">
                |
                <span className="text-sm font-bold">17:00</span>
                <span className="temp">{forecastTemp[17].temp_c.toString().slice(0, 2)}°C</span>
            </div>
            <div className="flex items-center flex-col">
                |
                <span className="text-sm font-bold">21:00</span>
                <span className="temp">{forecastTemp[21].temp_c.toString().slice(0, 2)}°C</span>
            </div>
        </footer>
    )
}

export default ForecastHour