import React from "react";

import { useParams } from "react-router-dom";

import { BusDBContext } from "../contexts/BusDBContext/BusDBContext";

import PageLayout from "../layouts/PageLayout";

import List from "../components/List";
import BusRouteList from "../components/BusRouteList";
import BusRoutesLayout from "../layouts/BusRoutesLayout";

export default function Bus() {
    let params = useParams();
    const bus_db = React.useContext(BusDBContext);

    const busData = bus_db.buses.find((bus) => bus.id === parseInt(params.id));

    return (
        <PageLayout backLink={true}>
            {busData ? (
                <List title={`Linia ${busData.busNumber}`}>
                    <BusRoutesLayout>
                        <BusRouteList
                            routeLabel={busData.busRoutes.routeA.routeLabel}
                            busStops={busData.busRoutes.routeA.busStops}
                        />
                        <BusRouteList
                            routeLabel={busData.busRoutes.routeB.routeLabel}
                            busStops={busData.busRoutes.routeB.busStops}
                        />
                    </BusRoutesLayout>
                </List>
            ) : (
                <p>Loading...</p>
            )}
        </PageLayout>
    );
}