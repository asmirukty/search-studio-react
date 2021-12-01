import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {lineStationChipState, prefectureCityChipState} from "./atom";
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
    const [prefectureCityChip, setPrefectureCityChip] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureCityChipState);
    const [lineStationChip, setLineStationChip] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationChipState);

    const prefectureCityChipDelete = (item: {id: string, name: string}) => () => {
        setPrefectureCityChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    const lineStationChipDelete = (item: {id: string, name: string}) => () => {
        setLineStationChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    return (
         <div className={classes.wrapChip}>
             {
                 prefectureCityChip.length > 0 && prefectureCityChip.map((item) =>
                     <SearchChip label={item.name} onDelete={prefectureCityChipDelete(item)}/>
                 )
             }
             {
                 lineStationChip.length > 0 && lineStationChip.map((item) =>
                     <SearchChip label={item.name} onDelete={lineStationChipDelete(item)}/>
                 )
             }
         </div>
    )
}