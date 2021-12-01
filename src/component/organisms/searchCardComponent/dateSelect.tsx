import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {Typography} from "@material-ui/core";
import MinMaxSelect from "../../molecules/minMaxSelect";
import {endTimeOptions, startTimeOptions} from "./itemsAndOptions/timeOptions";
import SearchRadio from "../../atoms/searchRadio";
import {dateState} from "./atom";
import SearchDatePicker from "../../atoms/searchDatePicker";
import DateSelectBtn from "../../molecules/dateSelectBtn";
import useDateEffect from "../../hooks/use-date-effect";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        }
    }));

export default function DateSelect(props: {index: number}) {
    const classes = useStyles();
    const {index} = props;
    const [date, setDate] = useRecoilState<{date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateState);
    const [dateValue, startTimeValue, endTimeValue, matchTimeValue] = useDateEffect(date, index)

    const changeDate = (newDate: Date|null) => {
        date.length > index ?
            setDate(prevState => prevState.map((item, idx) =>
                idx !== index ? item : {date: newDate, startTime: startTimeValue, endTime: endTimeValue, matchTime: matchTimeValue}
            )) :
            setDate(prevState => [...prevState, {date: newDate, startTime: startTimeValue, endTime: endTimeValue, matchTime: matchTimeValue}])
    }

    const changeStartTime = (event: any) => {
        date.length > index ?
            setDate(prevState => prevState.map((item, idx) =>
                idx !== index ? item : {
                    date: dateValue,
                    startTime: event.target.value === startTimeOptions[24] ? null : event.target.value,
                    endTime: endTimeValue,
                    matchTime: event.target.value === startTimeOptions[24] ? false : matchTimeValue
            })) :
            setDate(prevState => [...prevState, {
                date: new Date(),
                startTime: event.target.value === startTimeOptions[24] ? null : event.target.value,
                endTime: endTimeValue,
                matchTime: event.target.value === startTimeOptions[24] ? false : matchTimeValue
            }])
    }

    const changeEndTime = (event: any) => {
        date.length > index ?
            setDate(prevState => prevState.map((item, idx) =>
                idx !== index ? item : {
                    date: dateValue,
                    startTime: startTimeValue,
                    endTime: event.target.value === endTimeOptions[24] ? null : event.target.value,
                    matchTime: event.target.value === endTimeOptions[24] ? false : matchTimeValue
            })) :
            setDate(prevState => [...prevState, {
                date: new Date(),
                startTime: startTimeValue,
                endTime: event.target.value === endTimeOptions[24] ? null : event.target.value,
                matchTime: event.target.value === endTimeOptions[24] ? false : matchTimeValue
            }])
    }

    const changeMatchTime = () => {
        setDate(prevState => prevState.map((item, idx) =>
            idx !== index ? item : {
                date: dateValue, startTime: startTimeValue, endTime: endTimeValue, matchTime: !matchTimeValue
            })
        )
    }

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>日時{index+1}</Typography>
            <SearchDatePicker value={dateValue} changeDate={changeDate}/>
            <MinMaxSelect minLabel={'開始時間'} maxLabel={'終了時間'} min={startTimeValue} max={endTimeValue}
                          minOptions={startTimeOptions} maxOptions={endTimeOptions}
                          minNullValue={startTimeOptions[24]} maxNullValue={endTimeOptions[24]}
                          changeMin={changeStartTime} changeMax={changeEndTime}/>
            {
                date[index] && date[index].startTime && date[index].endTime &&
                    <SearchRadio beforeTyp={'指定時間の'} options={['一部', '全時間']} afterTyp={'で空いている'}
                                 value={matchTimeValue ? '全時間' : '一部'} handleChange={changeMatchTime}/>
            }
            <DateSelectBtn index={index} date={!dateValue}/>
        </div>
    );
}