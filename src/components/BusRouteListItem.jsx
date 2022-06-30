import "../styles/BusRouteListItem.css";

import { Link } from "react-router-dom";

export default function BusRouteListItem({
                                             id,
                                             busStopLabel,
                                             index,
                                             arrivalTime,
                                         }) {
    return (
        <li className="bus-route-list-item">
            <div className="bus-route-list-item__wrapper">
                <Link to={`/bus-stop/${id}`}>{busStopLabel}</Link>
                {index === 0 && (
                    <ul className="bus-route-list-item__wrapper--arrival-list">
                        {arrivalTime.map((time) => (
                            <li key={time}>{time}</li>
                        ))}
                    </ul>
                )}
            </div>
        </li>
    );
}