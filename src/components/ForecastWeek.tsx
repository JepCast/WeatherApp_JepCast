import type { JSX } from "react"
import type { ForecastWeekProps, ForecastDay } from "../types/weather"
import { useWeatherGraphic } from "../hooks/useWeatherGraphic"

// interface ForecastDayItemProps {
//     day: ForecastDay
// }

// const ForecastDayItem = ({ day }: ForecastDayItemProps): JSX.Element => {
//     const WeatherGraphic = useWeatherGraphic(day.day.condition.text)
//     console.log(day.day.condition, "condition")
//     return (
//         <div className="flex flex-col items-center gap-1.5">
//             <div className="text-[1.2rem]">
//                 <WeatherGraphic.graphicElement />
//             </div>
//             <span className="text-[1.2rem]">{Math.round(day.day.avgtemp_c)}°</span>
//             <span className="text-sm text-[#d8d1eb]">
//                 {new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}
//             </span>
//         </div>
//     )
// }

// const ForecastWeek = ({ forecast }: ForecastWeekProps): JSX.Element => {
//     return (
//         <section className="flex justify-between mb-5 sm:mr-0 md:mr-[50%]">
//             {forecast.forecastday.map((day) => (
//                 <ForecastDayItem key={day.date} day={day} />
//             ))}
//         </section>
//     )
// }


const ForecastWeek = ({forecast}: ForecastWeekProps): JSX.Element => {
    return (
        <section className="flex justify-between mb-5 sm:mr-0 md:mr-[50%]">
            {forecast.forecastday.map((day) => (
                <div key={day.date} className="flex flex-col items-center">
                    <span className="text-sm">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
                    {/* placeholder icon */}
                    <div className="text-2xl">
                    </div>
                    <span className="text-sm">{Math.round(day.day.avgtemp_c)}°</span>
                </div>
            ))}
        </section>
    )
}

// <section className="flex justify-between mb-5 sm:mr-0 md:mr-[50%]">
//     {forecast.forecastday.map((day) => (
//         <div key={day.date} className="flex flex-col items-center">
//             <span className="text-sm">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
//             {/* placeholder icon */}
//             <div className="text-2xl">
//             </div>
//             <span className="text-sm">{Math.round(day.day.avgtemp_c)}°</span>
//         </div>
//     ))}
// </section>
// <section className="flex justify-between mb-5 sm:mr-0 md:mr-[50%]">

//     {forecast.forecastday.map((day, i) => {
//         const WeatherGraphic = useWeatherGraphic(forecast.forecastday[i].day.condition.text);
//         return (
//             <div key={day.date} className="flex flex-col items-center">
//                 <span className="text-sm">{new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
//                 {/* placeholder icon */}
//                 <div className="text-2xl">
//                 </div>
//                 <span className="text-sm">{Math.round(day.day.avgtemp_c)}°</span>
//             </div>
//         )
//     })
//     }
// </section>




// <div>
//     <section className="flex justify-between mb-5 sm:mr-0 md:mr-[50%]">
//         <div className="flex flex-col">
//             <span>
//                 {date(0)}
//                 {new Date(forecast.forecastday[0].date).toLocaleDateString(undefined, { weekday: 'short' })}
//             </span>
//             <i className="fas fa-cloud-sun"></i>
//             <span>{tempeture_c(0)}°</span>
//         </div>
//         <div className="flex flex-col">
//             <span>Tue</span>
//             <i className="fas fa-sun"></i>
//             <span>{tempeture_c(1)}°</span>
//         </div>
//         <div className="flex flex-col">
//             <span>Wed</span>
//             <i className="fas fa-cloud"></i>
//             <span>{tempeture_c(2)}°</span>
//         </div>
//         <div className="flex flex-col">
//             <span>Thu</span>
//             <i className="fas fa-sun"></i>
//             <span>{tempeture_c(3)}°</span>
//         </div>
//         <div className="flex flex-col">
//             <span>Fri</span>
//             <i className="fas fa-cloud-sun"></i>
//             <span>{tempeture_c(4)}°</span>
//         </div>
//         <div className="flex flex-col">
//             <span>Fri</span>
//             <i className="fas fa-cloud-sun"></i>
//             <span>{tempeture_c(5)}°</span>
//         </div>
//         <div className="flex flex-col">
//             <span>Fri</span>
//             <i className="fas fa-cloud-sun"></i>
//             <span>{tempeture_c(6)}°</span>
//         </div>
//     </section>
// </div>


export default ForecastWeek