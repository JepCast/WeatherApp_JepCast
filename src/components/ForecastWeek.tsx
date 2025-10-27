import type { JSX } from "react"
import type { ForecastWeekProps } from "../types/weather"

const ForecastWeek = ({ forecast }: ForecastWeekProps): JSX.Element => {
    return (
        <section className="flex justify-between mb-3 p-2 pr-5 pl-5 rounded-2xl bg-blue-50/5 md:mr-[50%] ">
            {forecast.forecastday.map((day) => (
                <div key={day.date} className="flex flex-col items-center">
                    <span className="text-sm">{Math.round(day.day.avgtemp_c)}°</span>
                    <span className="text-sm">
                        {new Date(day.date + "T00:00").toLocaleDateString(undefined, { weekday: 'short' })}
                    </span>
                </div>
            ))}
        </section>
    )
}

export default ForecastWeek