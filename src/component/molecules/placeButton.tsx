import React from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import StudioSearchCardButton from "../atoms/studioSearchCardButton";
import {
    cityChipState, lineChipState, lineStationState, placeChipState, placeOpenState,
    prefectureChipState, prefectureCityState, stationChipState
} from "../atom";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {lineItem} from "../atoms/itemsAndOptions/lineItems";
import {prefItem} from "../atoms/itemsAndOptions/prefItems";
import SearchChip from "../atoms/searchChip";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 4
        }
    })
);

export default function PlaceButton() {
    const classes = useStyles();
    const setPlaceOpen = useSetRecoilState<boolean>(placeOpenState);
    const setPrefectureCity = useSetRecoilState<{name: string, id: string}[]|any[]>(prefectureCityState);
    const [prefectureChip, setPrefectureChip] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureChipState);
    const [cityChip, setCityChip] = useRecoilState<{name: string, id: string}[]|any[]>(cityChipState);
    const setLineStation = useSetRecoilState<{name: string, id: string}[]|any[]>(lineStationState);
    const [lineChip, setLineChip] = useRecoilState<{name: string, id: string}[]|any[]>(lineChipState);
    const [stationChip, setStationChip] = useRecoilState<{name: string, id: string}[]|any[]>(stationChipState);
    const placeChip = useRecoilValue(placeChipState);

    const placeDialogOpen = () => {
        setPlaceOpen(true);

        //pref(line)が入っていたらcity(station)も入れる
        setPrefectureCity([...prefectureChip, ...cityChip]);
        prefItem.map((item) =>
            prefectureChip.includes(item.pref) && setPrefectureCity(prevState => [...prevState, ...item.cities])
        );

        setLineStation([...lineChip, ...stationChip]);
        lineItem.map((item) =>
            lineChip.includes(item.line) && setLineStation(prevState => [...prevState, ...item.stations])
        );
    };

    const prefectureChipDelete = (item: {id: string, name: string}) => () => {
        setPrefectureChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    const cityChipDelete = (item: {id: string, name: string}) => () => {
        setCityChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    const lineChipDelete = (item: {id: string, name: string}) => () => {
        setLineChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    const stationChipDelete = (item: {id: string, name: string}) => () => {
        setStationChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    return (
        <StudioSearchCardButton dialogOpen={placeDialogOpen} label={'エリア/沿線、駅を選択'}
                                chipDisplay={placeChip.length > 0}>
            <div className={classes.wrapChip}>
                {
                    prefectureChip.map((item) =>
                        <SearchChip key={item.id} label={item.name} onDelete={prefectureChipDelete(item)}/>
                    )
                }
                {
                    cityChip.map((item) =>
                        <SearchChip key={item.id} label={item.name} onDelete={cityChipDelete(item)}/>
                    )
                }
                {
                    lineChip.map((item) =>
                        <SearchChip key={item.id} label={item.name} onDelete={lineChipDelete(item)}/>
                    )
                }
                {
                    stationChip.map((item) =>
                        <SearchChip key={item.id} label={item.name} onDelete={stationChipDelete(item)}/>
                    )
                }
            </div>
        </StudioSearchCardButton>
    );
}