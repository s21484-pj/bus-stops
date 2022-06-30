import useTime from "./useTime";

export default function useArrivalArray(arrivalBuses, time) {
    const { sortArrivalBuses } = useTime();

    if (arrivalBuses.length > 0) {
        const arrivalArray = arrivalBuses
            .sort((a, b) => sortArrivalBuses(a, b))
            .filter((bus) => bus.arrivalTime >= time);

        let i = 0;

        if (arrivalArray.length < 5) {
            while (arrivalArray.length < 5) {
                arrivalArray.push(arrivalBuses[i]);
                i++;
            }

            return arrivalArray;
        } else return arrivalArray.slice(0, 5);
    }
}