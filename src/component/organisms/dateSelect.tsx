import React, {useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import MinMaxSelect from "../molecules/minMaxSelect";
import {endTimeOptions, startTimeOptions} from "../atoms/itemsAndOptions/timeOptions";
import SearchRadio from "../atoms/searchRadio";
import {dateState} from "../atom";
import SearchDatePicker from "../atoms/searchDatePicker";
import DateSelectBtn from "../molecules/dateSelectBtn";
import DialogTitle from "../atoms/dialogTitle";

export default function DateSelect(props: {index: number}) {
    const {index} = props;
    const [date, setDate] = useRecoilState<{date: Date, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateState);
    const [dateValue, setDateValue] = useState<Date|null>(null);
    const [startTimeValue, setStartTimeValue] = useState<string|null>(null);
    const [endTimeValue, setEndTimeValue] = useState<string|null>(null);
    const [matchTimeValue, setMatchValue] = useState<boolean>(false);

    useEffect(() => {
        setDateValue(date[index] ? date[index].date : null);
        setStartTimeValue(date[index] ? date[index].startTime : null);
        setEndTimeValue(date[index] ? date[index].endTime : null);
        setMatchValue(date[index] ? date[index].matchTime : false);
    }, [date])

    const changeDate = (newDate: Date|null) => {
        //すでにdate[index]があれば変える、なければ付け足す
        newDate && (
            date.length > index ?
                setDate(prevState => prevState.map((item, idx) =>
                    idx !== index ? item : {date: newDate, startTime: startTimeValue, endTime: endTimeValue, matchTime: matchTimeValue}
                ))
                :
                setDate(prevState =>
                    [...prevState, {date: newDate, startTime: startTimeValue, endTime: endTimeValue, matchTime: matchTimeValue}]
                )
        )
    };

    const changeStartTime = (event: any) => {
        //すでにdateがあれば変える、なければ付け足す
        dateValue ?
            setDate(prevState => prevState.map((item, idx) =>
                idx !== index ? item : {
                    date: dateValue,
                    startTime: event.target.value === startTimeOptions[24] ? null : event.target.value,
                    endTime: endTimeValue,
                    matchTime: event.target.value === startTimeOptions[24] ? false : matchTimeValue
            }))
            :
            setDate(prevState => [...prevState, {
                date: new Date(),
                startTime: event.target.value === startTimeOptions[24] ? null : event.target.value,
                endTime: endTimeValue,
                matchTime: event.target.value === startTimeOptions[24] ? false : matchTimeValue
            }])
    };

    const changeEndTime = (event: any) => {
        //すでにdateがあれば変える、なければ付け足す
        dateValue ?
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
    };

    const changeMatchTime = () => {
        dateValue &&
            setDate(prevState => prevState.map((item, idx) =>
                idx !== index ? item : {
                    date: dateValue, startTime: startTimeValue, endTime: endTimeValue, matchTime: !matchTimeValue
                })
            )
    };

    return (
        <div>
            <DialogTitle title={`日時${index+1}`}/>
            <SearchDatePicker value={dateValue} changeDate={changeDate}/>
            <MinMaxSelect minLabel={'開始時間'} maxLabel={'終了時間'} min={startTimeValue} max={endTimeValue}
                          minOptions={startTimeOptions} maxOptions={endTimeOptions}
                          minNullIndex={24} maxNullIndex={24} changeMin={changeStartTime} changeMax={changeEndTime}/>
            {
                date[index] && date[index].startTime && date[index].endTime &&
                    <SearchRadio beforeTyp={'指定時間の'} options={['一部', '全時間']} afterTyp={'で空いている'}
                                 value={matchTimeValue ? '全時間' : '一部'} handleChange={changeMatchTime}/>
            }
            <DateSelectBtn index={index} date={!dateValue}/>
        </div>
    );
}