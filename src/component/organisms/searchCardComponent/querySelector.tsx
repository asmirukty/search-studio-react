import {selector} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, dateMatchState, detailItemChipState, fromStationChipState,
    lineChipState, mirrorChipState, peopleChipState, prefectureChipState, priceChipState, stationChipState, studioNameState
} from "./atom";
import {
    floorMaterialOptions, reservationOptions, reserveOptions, roomFacilityOptions, studioFacilityOptions
} from "./itemsAndOptions/detailOptions";
import {endTimeOptions} from "./itemsAndOptions/timeOptions";

function dateConvert (date: {date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}) {
    const startHour = date.startTime ? date.startTime.split(':')[0] : 0 ;
    const startMin = date.startTime ? date.startTime.split(':')[1] : 0 ;
    const endHour = (date.endTime && endTimeOptions.indexOf(date.endTime) !== 48) ? date.endTime.split(':')[0] : 23 ;
    const endMin = (date.endTime && endTimeOptions.indexOf(date.endTime) !== 48) ? date.endTime.split(':')[1] : 59 ;
    const unixStart =  date.date && Date.UTC(date.date.getFullYear(), date.date.getMonth(), date.date.getDate(), Number(startHour), Number(startMin))/1000
    const unixEnd =  date.date && Date.UTC(date.date.getFullYear(), date.date.getMonth(), date.date.getDate(), Number(endHour), Number(endMin))/1000

    return date.date && `${unixStart}${date.matchTime ? 'and' : 'or'}${unixEnd}`
}

export const queryState = selector({
    key: 'queryState',
    get: ({get}) => {
        const prefecture = get(prefectureChipState);
        const city = get(cityChipState);
        const line = get(lineChipState);
        const station = get(stationChipState);
        const studioName = get(studioNameState);
        const area = get(areaChipState);
        const people = get(peopleChipState);
        const date = get(dateChipState).map((date) => dateConvert(date));
        const dateMatch = get(dateMatchState);
        const fromStation = get(fromStationChipState);
        const price = get(priceChipState);
        const mirror = get(mirrorChipState);
        const detailItem = get(detailItemChipState);
        const reservation: string[] = [];
        const studioF: string[] = [];
        const roomF: string[] = [];
        const floor: string[] = [];

        const query = [];

        reservationOptions.map((option) =>
            detailItem.includes(option) && reservation.push(option));

        studioFacilityOptions.map((option) =>
            detailItem.includes(option) && studioF.push(option));

        ['鏡2面', ...roomFacilityOptions].map((option) =>
            detailItem.includes(option) && roomF.push(option));

        floorMaterialOptions.map((option) =>
            detailItem.includes(option) && floor.push(option));

        prefecture.length > 0 && query.push(`prefecture_name=${prefecture.map((item) => item.id)}`)
        city.length > 0 && query.push(`city_name=${city.map((item) => item.id)}`)
        line.length > 0 && query.push(`line_name=${line.map((item) => item.id)}`)
        station.length > 0 && query.push(`station_name=${station.map((item) => item.id)}`)
        studioName && query.push(`studio_name=${studioName}`)
        area.min && query.push(`area_min=${area.min}`)
        area.max && query.push(`area_max=${area.max}`)
        people.min && query.push(`people_min=${people.min}`)
        people.max && query.push(`people_max=${people.max}`)
        date.length > 0 && (dateMatch ? query.push(`date=${date.join(' ')}`) : query.push(`date=${date}`))
        fromStation && query.push(`from_station_max=${fromStation}`)
        detailItem.includes('キャンセル無料期間あり') && query.push(`free_cancel=true`)
        price.min && query.push(`price_min=${price.min}`)
        price.max && query.push(`price_max=${price.max}`)
        detailItem.includes(reserveOptions[0]) && query.push(`half_hour_slot=true`)
        detailItem.includes(reserveOptions[1]) && query.push(`from_half_hour=true`)
        reservation.length > 0 && query.push(`reservation=${reservation.map((item) => item)}`)
        studioF.length > 0 && query.push(`studio_facility=${studioF.map((item) => item)}`)
        mirror.min && query.push(`mirror_min=${mirror.min}`)
        mirror.max && query.push(`mirror_max=${mirror.max}`)
        roomF.length > 0 && query.push(`room_facility=${roomF.map((item) => item)}`)
        floor.length > 0 && query.push(`floor_material=${floor.map((item) => item)}`)

        return query;
    },
});