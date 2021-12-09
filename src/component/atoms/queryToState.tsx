import React from "react";
import {useLocation} from 'react-router-dom';
import {useSetRecoilState} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, dateMatchState, detailItemChipState,
    fromStationChipState, lineChipState, mirrorChipState, peopleChipState,
    prefectureChipState, priceChipState, stationChipState, studioNameState
} from "../atom";
import {prefItem} from "./itemsAndOptions/prefItems";
import {lineItem} from "./itemsAndOptions/lineItems";
import {reserveOptions} from "./itemsAndOptions/detailOptions";

function unixToDate(props: {unix: number[], match: boolean}) {
    const start = new Date(props.unix[0] * 1000);
    const end = new Date(props.unix[1] * 1000);

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
};

export const QueryToState = () => {
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const setPrefectureChip = useSetRecoilState(prefectureChipState);
    const setCityChip = useSetRecoilState(cityChipState);
    const setLineChip = useSetRecoilState(lineChipState);
    const setStationChip = useSetRecoilState(stationChipState);
    const setStudioName = useSetRecoilState(studioNameState);
    const setAreaChip = useSetRecoilState(areaChipState);
    const setPeopleChip = useSetRecoilState(peopleChipState);
    const setDateChip = useSetRecoilState(dateChipState);
    const setDateMatch = useSetRecoilState(dateMatchState);
    const setFromStationChip = useSetRecoilState(fromStationChipState);
    const setPriceChip = useSetRecoilState(priceChipState);
    const setMirrorChip = useSetRecoilState(mirrorChipState);
    const setDetailItemChip = useSetRecoilState(detailItemChipState);

    const prefName: string|null = query.get('prefecture_name');
    const cityName: string|null = query.get('city_name');
    const lineName: string|null = query.get('line_name');
    const stationName: string|null = query.get('station_name');
    const date: any = query.get('date');
    const reservation: string|null = query.get('reservation');
    const studioF: string|null = query.get('studio_facility');
    const roomF: string|null = query.get('room_facility');
    const floor: string|null = query.get('floor_material');

    const dateArray: any[] = date ? date.split(/,|\s/) : [];
    const reservationArray: any[] = reservation ? reservation.split(',') : [];
    const studioFArray: any[] = studioF ? studioF.split(',') : [];
    const roomFArray: any[] = roomF ? roomF.split(',') : [];
    const floorArray: any[] = floor ? floor.split(',') : [];

    setPrefectureChip([]);
    setCityChip([]);
    prefItem.map((item) =>
        prefName && prefName.split(',').map((id) => id === item.pref.id).includes(true) ?
            setPrefectureChip(prevState => [...prevState, item.pref])
            :
            item.cities.map((city) =>
                cityName && cityName.split(',').map((id) => id === city.id).includes(true) &&
                    setCityChip(prevState => [...prevState, city])
            )
    );

    setLineChip([]);
    setStationChip([]);
    lineItem.map((item) =>
        lineName && lineName.split(',').map((id) => id === item.line.id).includes(true) ?
            setLineChip(prevState => [...prevState, item.line])
            :
            item.stations.map((station) =>
                stationName && stationName.split(',').map((id) => id === station.id).includes(true) &&
                    setStationChip(prevState => [...prevState, station])
            )
    );

    setStudioName(query.get('studio_name') ? `${query.get('studio_name')}` : '');

    setAreaChip({min: Number(query.get('area_min')), max: Number(query.get('area_max'))});

    setPeopleChip({min: Number(query.get('people_min')), max: Number(query.get('people_max'))});

    setDateChip([]);
    dateArray.length > 0 && dateArray.map((item) =>
        setDateChip(prevState =>
            [...prevState, unixToDate({unix: item.split(/and|or/), match: item.includes('and')})]
        )
    );

    setDateMatch(date && date.includes(' '));

    setFromStationChip(Number(query.get('from_station_max')));

    (query.get('price_min') || query.get('price_max')) &&
    setPriceChip({min: Number(query.get('price_min')), max: Number(query.get('price_max'))});

    (query.get('mirror_min') || query.get('mirror_max')) &&
    setMirrorChip({min: Number(query.get('mirror_min')), max: Number(query.get('mirror_max'))});

    setDetailItemChip([]);
    query.get('free_cancel') && setDetailItemChip(prevState => [...prevState, 'キャンセル無料期間あり']);
    query.get('half_hour_slot') && setDetailItemChip(prevState => [...prevState, reserveOptions[0]]);
    query.get('from_half_hour') && setDetailItemChip(prevState => [...prevState, reserveOptions[1]]);
    setDetailItemChip(prevState =>
        [...prevState, ...reservationArray, ...studioFArray, ...roomFArray, ...floorArray]
    );

}