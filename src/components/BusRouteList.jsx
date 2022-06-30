import "../styles/BusRouteList.css";

import List from "../components/List";
import BusRouteListItem from "./BusRouteListItem";

export default function BusRouteList({ routeLabel, busStops }) {
    return (
        <li className="bus-route-list">
            <List title={`Kierunek: ${routeLabel}`}>
                {busStops.map(({ id, busStopName, arrivalTime }, index) => (
                    <BusRouteListItem
                        key={`${busStopName}-${id}`}
                        id={id}
                        to={`/bus-stop/${id}`}
                        busStopLabel={`${index + 1}. ${busStopName}`}
                        index={index}
                        arrivalTime={arrivalTime}
                    />
                ))}
            </List>
        </li>
    );
}