import React, {useEffect, useState} from 'react'
import useEventTarget from "./use-event-target";

export default function useDateTime (open: boolean, initialDate: { date: Date, startTime: any, endTime: any, match: string }|null, dateChange: (newDate: { date: Date, startTime: any, endTime: any, match: string }|null) => void) : [
    Date|null, string|null, string|null, string,
    (date: Date|null) => void, (event: any) => void, (event: any) => void, (event: any) => void,
    () => void
]　{
    const [selectDate, setSelectDate] = useState<Date | null>(initialDate ? initialDate.date : null);
    const [startTime, setStartTime, changeStartTime] = useEventTarget(initialDate ? initialDate.startTime : null)
    const [endTime, setEndTime, changeEndTime] = useEventTarget(initialDate ? initialDate.endTime : null)
    const [match, setMatch] = React.useState(initialDate ? initialDate.endTime : '一部');

    useEffect(() => {
        setSelectDate(initialDate ? initialDate.date : null)
        setStartTime(initialDate ? initialDate.startTime : null)
        setEndTime(initialDate ? initialDate.endTime : null)
        setMatch(initialDate ? initialDate.match : '一部')
    }, [open, initialDate])

    useEffect(() => {
        (startTime || endTime) && !selectDate && setSelectDate(new Date())
        selectDate && dateChange({date: selectDate, startTime: startTime, endTime: endTime, match: match})
    }, [selectDate, startTime, endTime, match])

    const changeSelectDate = (date: Date|null) => {
        setSelectDate(date)
    }

    const changeMatch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMatch((event.target as HTMLInputElement).value);
        console.log(match)
    };

    const reset = () => {
        dateChange(null)
    }

    return [selectDate, startTime, endTime, match, changeSelectDate, changeStartTime, changeEndTime, changeMatch, reset]
}