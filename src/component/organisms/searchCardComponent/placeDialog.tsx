import React from 'react';
import {useRecoilState} from "recoil";
import {lineStationChipState, lineStationState, placeOpenState, prefectureCityChipState, prefectureCityState} from "./atom";
import StudioDialog from "../../templates/studioDialog";
import PlaceDialogContent from "./placeDialogContent";
import PlaceDialogChip from "./placeDialogChip";
import {prefItems} from "./itemsAndOptions/prefItems";
import {lineItems} from "./itemsAndOptions/lineItems";

const prefStateToChip = (states: {name: string, id: string}[]) => {
    let newChips: any[] = []

    prefItems.map((prefItem) =>
        prefItem.items.map((item) =>
            states.includes(item.pref) ? newChips.push(item.pref) :
                item.cities.map((city) => states.includes(city) && newChips.push(city))
        )
    )

    return newChips;
}

const prefChipToState = (chips: {name: string, id: string}[]) => {
    let newState: any[] = []

    prefItems.map((prefItem) =>
        prefItem.items.map((item) =>
            chips.includes(item.pref) ? newState.push(item.pref, ...item.cities) :
                item.cities.map((city) => chips.includes(city) && newState.push(city))
        )
    )

    return newState;
}


const lineStateToChip = (states: {name: string, id: string}[]) => {
    let newChips: any[] = []

    lineItems.map((lineItem) =>
        lineItem.items.map((item) =>
            states.includes(item.line) ? newChips.push(item.line) :
                item.stations.map((station) => states.includes(station) && newChips.push(station))
        )
    )

    return newChips;
}

const lineChipToState = (chips: {name: string, id: string}[]) => {
    let newState: any[] = []

    lineItems.map((lineItem) =>
        lineItem.items.map((item) =>
            chips.includes(item.line) ? newState.push(item.line, ...item.stations) :
                item.stations.map((station) => chips.includes(station) && newState.push(station))
        )
    )

    return newState;
}

export default function PlaceDialog() {
    const [placeOpen, setPlaceOpen] = useRecoilState<boolean>(placeOpenState);
    const [prefectureCity, setPrefectureCity] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureCityState);
    const [prefectureCityChip, setPrefectureCityChip] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureCityChipState);
    const [lineStation, setLineStation] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationState);
    const [lineStationChip, setLineStationChip] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationChipState);

    const placeDialogOpen = () => {
        setPlaceOpen(true)
        setPrefectureCity(prefChipToState(prefectureCityChip))
        setLineStation(lineChipToState(lineStationChip))
    }

    const placeOk = () => {
        setPlaceOpen(false)
        setPrefectureCityChip(prefStateToChip(prefectureCity))
        setLineStationChip(lineStateToChip(lineStation))
    }

    const placeCancel = () => {
        setPlaceOpen(false)
    }

    return (
        <StudioDialog open={placeOpen} dialogOpen={placeDialogOpen}
                      handleCancel={placeCancel} handleOk={placeOk}
                      title={'場所 ※'}
                      labelCheck={prefectureCityChip.length === 0 && lineStationChip.length === 0}
                      label={'エリア/沿線、駅を選択'}
                      chips={<PlaceDialogChip/>}
                      dialogContent={<PlaceDialogContent/>}/>
    )
}