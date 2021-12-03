import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {prefectureChipState, cityChipState, lineChipState, stationChipState} from "./atom";
import SearchChip from "../../atoms/searchChip";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

export default function PlaceDialogChip() {
    const classes = useStyles()
    const [prefectureChip, setPrefectureChip] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureChipState);
    const [cityChip, setCityChip] = useRecoilState<{name: string, id: string}[]|any[]>(cityChipState);
    const [lineChip, setLineChip] = useRecoilState<{name: string, id: string}[]|any[]>(lineChipState);
    const [stationChip, setStationChip] = useRecoilState<{name: string, id: string}[]|any[]>(stationChipState);

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
         <div className={classes.wrapChip}>
             {
                 prefectureChip.length > 0 && prefectureChip.map((item) =>
                     <SearchChip label={item.name} onDelete={prefectureChipDelete(item)}/>
                 )
             }
             {
                 cityChip.length > 0 && cityChip.map((item) =>
                     <SearchChip label={item.name} onDelete={cityChipDelete(item)}/>
                 )
             }
             {
                 lineChip.length > 0 && lineChip.map((item) =>
                     <SearchChip label={item.name} onDelete={lineChipDelete(item)}/>
                 )
             }
             {
                 stationChip.length > 0 && stationChip.map((item) =>
                     <SearchChip label={item.name} onDelete={stationChipDelete(item)}/>
                 )
             }
         </div>
    )
}