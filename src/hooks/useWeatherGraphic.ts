import { IoPartlySunnyOutline } from "react-icons/io5";
import { LuCloudSunRain } from "react-icons/lu";
import { BsCloudRain, BsClouds, BsCloudSnow, BsSun } from "react-icons/bs";
import type { CSSProperties, ElementType } from "react";

interface WeatherGraphic {
    graphicElement: ElementType;
    style: CSSProperties;
    bg_color?: string;
}

export const useWeatherGraphic = (condition: string | null): WeatherGraphic => {
    switch (condition) {
        case 'Clear':
            return {
                graphicElement: BsSun,
                style: {
                    animation: "var(--spin-animation)"
                }
            };

        case 'Clouds':
            return {
                graphicElement: BsClouds,
                style: {
                    animation: "var(--bounce-animation)"
                }
            };

        case 'Rain':
            return {
                graphicElement: BsCloudRain,
                style: {
                    animation: "var(--bounce-animation)"
                }
            };

        case 'Snow':
            return {
                graphicElement: BsCloudSnow,
                style: {
                    animation: "var(--bounce-animation)"
                }
            };

        case 'Mist':
            return {
                graphicElement: IoPartlySunnyOutline,
                style: {
                    animation: "var(--bounce-animation)"
                }
            };

        case 'Drizzle':
            return {
                graphicElement: LuCloudSunRain,
                style: {
                    animation: "var(--bounce-animation)"
                }
            };

        default:
            return {
                graphicElement: BsSun,
                style: {
                    animation: "var(--spin-animation)"
                }
            };
    }
}