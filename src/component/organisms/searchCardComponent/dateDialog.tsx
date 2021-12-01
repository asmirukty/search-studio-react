import React, {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import StudioDialog from "../../molecules/studioDialog";
import useDateSelect from "../../hooks/use-date-select";
import DateTimeConvert from "../../atoms/dateTimeConvert";
import DateSelect from "./dateSelect";
import SearchChip from "../../atoms/searchChip";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

type dateType = {date: Date, startTime: any, endTime: any, match: string}

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
            funcs={[props.changeDate]} state={[selectDate]} openCheck={setOpen}
            title={'日時'}
            labelCheck={date.length === 0} label={'日時を選択'}
            chips={
                <div className={classes.wrapChip}>
                    {
                        date.length > 0 &&
                        date.map((date: dateType, index: number) => (
                            <SearchChip key={index} onDelete={deleteDate(date)}
                                  label={DateTimeConvert({date: date.date, startTime: date.startTime, endTime: date.endTime})}/>
                        ))
                    }
                </div>}
            content={
                <div style={{padding: '20px 24px'}}>
                    {
                        [0, 1, 2, 3, 4].map((i) =>
                            opens[i] &&
                            <DateSelect key={i} open={open} date={selectDate[i]} label={`日時${i+1}`} dateChange={changeDate(i)}
                                        addBtn={!opens[i+1]} last={i === 4} addDate={addDate(i+1)}/>
                        )
                    }
                </div>
            }/>
    )
}