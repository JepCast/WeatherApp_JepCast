import { useEffect, useState } from "react";
import type { useGetTymeByTimeZoneReturn } from "../types/weather";

export const useGetTymeByTimeZone = (offSet: number): useGetTymeByTimeZoneReturn => {
    const [timeData, setTimeData] = useState({time: "", dateText: ""});

    useEffect(() => {
        if (offSet == null || offSet == 0) return;

        const updateTime = () => {
            const now = new Date();
            const utcMs = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
            const localMs = utcMs + offSet * 1000;
            const localTime = new Date(localMs);

            const time = new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }).format(localTime);

            const dateText = new Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                weekday: "long",
                month: "long",
            }).format(localTime);

            setTimeData({ time, dateText });
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, [offSet])

    return timeData;
}