import {useLocation} from 'react-router-dom';
import {prefItem} from "./itemsAndOptions/prefItems";
import {lineItem} from "./itemsAndOptions/lineItems";

function unixToDate(props: {unix: string[], match: boolean}) {
    const start = new Date(Number(props.unix[0]) * 1000);
    const end = new Date(Number(props.unix[1]) * 1000);

    const startTime: string|null =
        !props.match && start.getHours() - 9 === 0 && start.getMinutes() === 0 ?
            null : `${start.getHours() - 9}:${('0' + start.getMinutes()).slice(-2)}`;

    const endTime: string|null =
        props.match ?
            end.getMinutes() === 59 ? '24:00' : `${end.getHours() - 9}:${('0' + end.getMinutes()).slice(-2)}`
            :
            end.getMinutes() === 59 ? null : `${end.getHours() - 9}:${('0' + end.getMinutes()).slice(-2)}`;

    return (
        {date: start, startTime: startTime, endTime: endTime, matchTime: props.match}
    )
}

export const FromQuery = () => {
    const search = useLocation().search;
    const query = new URLSearchParams(search);

    const prefectureQuery: string|null = query.get('prefecture_name');
    const cityQuery: string|null = query.get('city_name');
    const lineQuery: string|null = query.get('line_name');
    const stationQuery: string|null = query.get('station_name');
    const prefecture: {name: string, id: string}[] = [];
    const city: {name: string, id: string}[] = [];
    const line: {name: string, id: string}[] = [];
    const station: {name: string, id: string}[] = [];
    const studioName: string|null = query.get('studio_name');
    const areaMin: number|null = Number(query.get('area_min'));
    const areaMax: number|null = Number(query.get('area_max'));
    const peopleMin: number|null = Number(query.get('people_min'));
    const peopleMax: number|null = Number(query.get('people_max'));
    const dateQuery: string|null = query.get('date');
    const date: any[] = [];
    const dateMatch: boolean = date ? date.includes(' ') : false;
    const fromStation: number|null = Number(query.get('from_station_max'));
    const priceMin: number|null = Number(query.get('price_min'));
    const priceMax: number|null = Number(query.get('price_max'));
    const freeCancel: boolean = query.get('free_cancel') === 'true';
    const halfHourSlot: boolean = query.get('half_hour_slot') === 'true';
    const fromHalfHour: boolean = query.get('from_half_hour') === 'true';
    const reservationQuery: string|null = query.get('reservation');
    const reservation: string[] = reservationQuery ? reservationQuery.split(',') : [];
    const studioFacilityQuery: string|null = query.get('studio_facility');
    const studioFacility: string[] = studioFacilityQuery ? studioFacilityQuery.split(',') : [];
    const mirrorMin: number|null = Number(query.get('mirror_min'));
    const mirrorMax: number|null = Number(query.get('mirror_max'));
    const floorMaterialQuery: string|null = query.get('floor_material');
    const floorMaterial: string[] = floorMaterialQuery ? floorMaterialQuery.split(',') : [];
    const roomFacilityQuery: string|null = query.get('room_facility');
    const roomFacility: string[] = roomFacilityQuery ? roomFacilityQuery.split(',') : [];

    prefItem.map((item) =>
        prefectureQuery && prefectureQuery.split(',').map((id) => id === item.pref.id).includes(true) ?
            prefecture.push(item.pref)
            :
            item.cities.map((c) =>
                cityQuery && cityQuery.split(',').map((id) => id === c.id).includes(true) &&
                    city.push(c)
            )
    );

    lineItem.map((item) =>
        lineQuery && lineQuery.split(',').map((id) => id === item.line.id).includes(true) ?
            line.push(item.line)
            :
            item.stations.map((s) =>
                stationQuery && stationQuery.split(',').map((id) => id === s.id).includes(true) &&
                    !station.map((item) => item.id).includes(s.id) && station.push(s)
                )

    );

    dateQuery && dateQuery.split(/,|\s/).map((item) =>
        date.push(unixToDate({unix: item.split(/and|or/), match: item.includes('and')}))
    );

    return (
        {
            prefecture: prefecture, city: city, line: line, station: station, studioName: studioName,
            areaMin: areaMin, areaMax: areaMax, peopleMin: peopleMin, peopleMax: peopleMax,
            date: date, dateMatch: dateMatch, fromStation: fromStation, priceMin: priceMin, priceMax: priceMax,
            freeCancel: freeCancel, halfHourSlot: halfHourSlot, fromHalfHour: fromHalfHour,
            reservation: reservation, studioFacility: studioFacility,
            mirrorMin: mirrorMin, mirrorMax: mirrorMax, floorMaterial: floorMaterial, roomFacility: roomFacility
        }
    );
}