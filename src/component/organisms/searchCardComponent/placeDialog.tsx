import React from 'react';
import {useRecoilState} from "recoil";
import {
    placeOpenState,
    prefectureCityState,
    prefectureChipState,
    cityChipState,
    lineChipState,
    stationChipState, lineStationState,
} from "./atom";
import StudioDialog from "../../templates/studioDialog";
import PlaceDialogContent from "./placeDialogContent";
import PlaceDialogChip from "./placeDialogChip";
import {prefItems} from "./itemsAndOptions/prefItems";
import {lineItems} from "./itemsAndOptions/lineItems";

export default function PlaceDialog() {
    const [placeOpen, setPlaceOpen] = useRecoilState<boolean>(placeOpenState);
    const [prefectureCity, setPrefectureCity] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureCityState);
    const [prefectureChip, setPrefectureChip] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureChipState);
    const [cityChip, setCityChip] = useRecoilState<{name: string, id: string}[]|any[]>(cityChipState);
    const [lineStation, setLineStation] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationState);
    const [lineChip, setLineChip] = useRecoilState<{name: string, id: string}[]|any[]>(lineChipState);
    const [stationChip, setStationChip] = useRecoilState<{name: string, id: string}[]|any[]>(stationChipState);

    const placeDialogOpen = () => {
        setPlaceOpen(true)

        setPrefectureCity([...prefectureChip, ...cityChip])
        prefItems.map((prefItem) =>
            prefItem.items.map((item) =>
                prefectureChip.includes(item.pref) && setPrefectureCity(prevState => [...prevState, ...item.cities])
            )
        )

        setLineStation([...lineChip, ...stationChip])
        lineItems.map((lineItem) =>
            lineItem.items.map((item) =>
                lineChip.includes(item.line) && setLineStation(prevState => [...prevState, ...item.stations])
            )
        )
    }

    const placeOk = () => {
        setPlaceOpen(false)

        setPrefectureChip([])
        setCityChip([])
        prefItems.map((prefItem) =>
            prefItem.items.map((item) =>
                prefectureCity.includes(item.pref) ? setPrefectureChip(prevState => [...prevState, item.pref]) :
                    item.cities.map((city) =>
                        prefectureCity.includes(city) && setCityChip(prevState => [...prevState, city])
                    )
            )
        )

        setLineChip([])
        setStationChip([])
        lineItems.map((lineItem) =>
            lineItem.items.map((item) =>
                lineStation.includes(item.line) ? setLineChip(prevState => [...prevState, item.line]) :
                    item.stations.map((station) =>
                        lineStation.includes(station) && setStationChip(prevState => [...prevState, station])
                    )
            )
        )
    }

    const placeCancel = () => {
        setPlaceOpen(false)
    }

    return (
        <StudioDialog open={placeOpen} dialogOpen={placeDialogOpen}
                      handleCancel={placeCancel} handleOk={placeOk}
                      title={'場所 ※'}
                      labelCheck={prefectureChip.length === 0 && cityChip.length === 0 && lineChip.length === 0 && stationChip.length === 0}
                      label={'エリア/沿線、駅を選択'}
                      chips={<PlaceDialogChip/>}
                      dialogContent={<PlaceDialogContent/>}/>
    )
}