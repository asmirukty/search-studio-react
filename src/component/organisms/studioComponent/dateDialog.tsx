import React, {useState} from 'react';
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";
import StudioDialog from "./studioDialog";
import useDateSelect from "../use-date-select";
import DateTimeConvert from "../dateTimeConvert";
import NewDateSelect from "./newDateSelect";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

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

type dateType = {date: Date, startTime: string, endTime: string}

interface DateDialogProps {
    date: dateType[],
    changeDate: (value: any[]) => void;
    deleteDate: (value: any) => void;
}

export default function DateDialog(props: DateDialogProps) {
    const classes = useStyles()
    const {date} = props;
    const [open, setOpen] = useState(false)
    const [selectDate, opens, addDate, changeDate, deleteDate] = useDateSelect(open, date, props.deleteDate)

    return (
        <StudioDialog
            funcs={[props.changeDate]}
            state={[selectDate]}
            openCheck={(open) => {setOpen(open)}}
            labelCheck={date.length === 0}
            label={'日時を選択'}
            chips={
                <div className={classes.wrapChip}>
                    {
                        date.length > 0 &&
                        date.map((date: dateType, index: number) => (
                            <Chip size="small" key={index} onDelete={deleteDate(date)}
                                  label={DateTimeConvert({date: date.date, startTime: date.startTime, endTime: date.endTime})}/>
                        ))
                    }
                </div>}
            content={
                <div style={{padding: '20px 24px'}}>
                    {[0, 1, 2, 3, 4].map((i) =>
                        opens[i] &&
                        <NewDateSelect open={open} date={selectDate[i]} label={`日時${i+1}`} dateChange={changeDate(i)}
                                       addBtn={i !== 4 && !opens[i+1]} last={i === 4} addDate={addDate(i+1)}/>
                    )}
                </div>
            }/>
    )
}