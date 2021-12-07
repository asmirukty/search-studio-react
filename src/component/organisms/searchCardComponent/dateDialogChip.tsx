import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {dateChipState} from "./atom";
import SearchChip from "../../atoms/searchChip";
import DateConvert from "../../atoms/dateConvert";
import RangeLabel from "../../atoms/rangeLabel";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

export default function DateDialogChip() {
    const classes = useStyles()
    const [dateChip, setDateChip] = useRecoilState<{date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateChipState);

    const dateChipDelete = (index: number) => () => {
        setDateChip(prevState =>
            prevState.filter((element, idx) => idx !== index))
    }

    return (
        <div className={classes.wrapChip}>
            {
                dateChip.length > 0 &&
                    dateChip.map((item, index) =>
                        item.date && (
                            (!item.startTime && !item.endTime) ?
                            <SearchChip label={DateConvert(item.date)} onDelete={dateChipDelete(index)}/>
                            :
                            <SearchChip
                                  label={DateConvert(item.date) + RangeLabel({min: item.startTime, max: item.endTime})}
                                  onDelete={dateChipDelete(index)}/>)
                    )
             }
        </div>
    )
}