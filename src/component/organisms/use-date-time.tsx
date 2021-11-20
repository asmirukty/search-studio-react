import React, {useEffect, useState} from 'react'
import useEventTarget from "./use-event-target";

export default function useDateTime (open: boolean, initialDate: { date: Date, startTime: any, endTime: any }|null, dateChange: (newDate: { date: Date, startTime: any, endTime: any }|null) => void) : [
    Date|null, string|null, string|null,
    (date: Date|null) => void, (event: any) => void, (event: any) => void,
    () => void
]　{
    const [selectDate, setSelectDate] = useState<Date | null>(initialDate ? initialDate.date : null);
    const [startTime, setStartTime, changeStartTime] = useEventTarget(initialDate ? initialDate.startTime : null)
    const [endTime, setEndTime, changeEndTime] = useEventTarget(initialDate ? initialDate.endTime : null)

    useEffect(() => {
            setSelectDate(initialDate ? initialDate.date : null)
            setStartTime(initialDate ? initialDate.startTime : null)
            setEndTime(initialDate ? initialDate.endTime : null)
    }, [open, initialDate])

    useEffect(() => {
        (startTime || endTime) && !selectDate && setSelectDate(new Date())
        selectDate && dateChange({date: selectDate, startTime: startTime, endTime: endTime})
    }, [selectDate, startTime, endTime])

    const changeSelectDate = (date: Date|null) => {
        setSelectDate(date)
    }

    const reset = () => {
        dateChange(null)
    }

    return [selectDate, startTime, endTime, changeSelectDate, changeStartTime, changeEndTime, reset]
}