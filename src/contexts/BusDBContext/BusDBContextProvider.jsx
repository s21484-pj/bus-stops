import React from "react";

import { BusDBContext } from "./BusDBContext";

import bus_db from "../../db/bus_db.json";

export default function BusDBContextProvider({ children }) {
    return (
        <BusDBContext.Provider value={bus_db}>{children}</BusDBContext.Provider>
    );
}