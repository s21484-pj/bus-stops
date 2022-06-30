import "../styles/BusesList.css";

import { Link } from "react-router-dom";

import List from "./List";

import BusArrivalList from "./BusArrivalList";

export default function BusesList({ busStopLabel, buses }) {
    return (
        <List title={busStopLabel}>
            {buses.map(({ id, busNumber, routeA, routeB }) => (
                <li key={`${busNumber}-${id}`} className="buses-list__item">
                    <Link to={`/bus/${id}`}>
                        <h3>{busNumber}</h3>
                    </Link>
                    <>
                        <BusArrivalList
                            routeLabel={routeA.routeLabel}
                            arrivalTime={routeA.arrivalTime}
                        />
                        <BusArrivalList
                            routeLabel={routeB.routeLabel}
                            arrivalTime={routeB.arrivalTime}
                        />
                    </>
                </li>
            ))}
        </List>
    );
}