import React from "react";

import { useParams } from "react-router-dom";

import useBusStopData from "../hooks/useBusStopData";

import PageLayout from "../layouts/PageLayout";

import ArrivalTable from "../components/ArrivalTable";
import BusesList from "../components/BusesList";

export default function BusStop() {
    let { id } = useParams();

    const [busStopData, arrivalBuses] = useBusStopData(id);

    return (
        <PageLayout backLink={true}>
            <ArrivalTable arrivalBuses={arrivalBuses} />
            {busStopData ? (
                <BusesList
                    busStopLabel={`Przystanek "${busStopData.busStopName}"`}
                    buses={busStopData.buses}
                />
            ) : (
                <p>Loading...</p>
            )}
        </PageLayout>
    );
}