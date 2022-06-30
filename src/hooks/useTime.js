import React from "react";

export default function useTime() {
    const timeFormat = (dateObjValue) =>
        dateObjValue < 10 ? "0" + dateObjValue : dateObjValue;

    const [time, setTime] = React.useState(
        `${timeFormat(new Date().getHours())}:${timeFormat(
            new Date().getMinutes()
        )}`
    );

    const refreshClock = React.useCallback(() => {
        setTime(
            `${timeFormat(new Date().getHours())}:${timeFormat(
                new Date().getMinutes()
            )}`
        );
    }, []);

    const parseDate = (time) =>
        Date.parse("1970/01/01 " + time.slice(0, -2) + " " + time.slice(-2));

    const sortArrivalBuses = (a, b) =>
        parseDate(a.arrivalTime) - parseDate(b.arrivalTime);

    // Timer refresh
    React.useEffect(() => {
        const timerID = setInterval(refreshClock, 1000);
        return () => clearInterval(timerID);
    }, [refreshClock]);

    return { time, sortArrivalBuses };
}