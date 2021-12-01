import React from 'react';
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {dateChipState} from "./atom";
import DateTimeConvert from "../../atoms/dateTimeConvert";
import MuiChip from "@material-ui/core/Chip";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4,
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

export default function NewDateDialogChip() {
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
                        item.date !== null &&
                            <Chip size='small'
                                  label={DateTimeConvert({date: item.date, startTime: item.startTime, endTime: item.endTime})}
                                  onDelete={dateChipDelete(index)}/>)
             }
        </div>
    )
}