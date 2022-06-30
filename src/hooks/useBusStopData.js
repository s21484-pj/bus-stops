import React from "react";

import { BusDBContext } from "../contexts/BusDBContext/BusDBContext";

export default function useBusStopData(busId) {
    const [arrivalBuses, setArrivalBuses] = React.useState([]);

    const bus_db = React.useContext(BusDBContext);

    const busStopData = bus_db.busStops.find(
        (busStop) => busStop.id === parseInt(busId)
    );

    React.useEffect(() => {
        busStopData.buses.forEach(({ busNumber, routeA, routeB }) => {
            routeA.arrivalTime.forEach((time) => {
                setArrivalBuses((prev) => [
                    ...prev,
                    {
                        busNumber: busNumber,
                        routeLabel: routeA.routeLabel,
                        arrivalTime: time,
                    },
                ]);
            });

            routeB.arrivalTime.forEach((time) => {
                setArrivalBuses((prev) => [
                    ...prev,
                    {
                        busNumber: busNumber,
                        routeLabel: routeB.routeLabel,
                        arrivalTime: time,
                    },
                ]);
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [busStopData, arrivalBuses];
}