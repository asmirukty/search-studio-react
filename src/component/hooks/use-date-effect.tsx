import {useEffect, useState} from 'react'

export default function useDateEffect (date: {date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[], index: number):
   [Date|null, string|null, string|null, boolean]{
    const [dateValue, setDateValue] = useState<Date|null>(null);
    const [startTimeValue, setStartTimeValue] = useState<string|null>(null);
    const [endTimeValue, setEndTimeValue] = useState<string|null>(null);
    const [matchTimeValue, setMatchValue] = useState<boolean>(false);

    useEffect(() => {
        setDateValue(date[index] ? date[index].date : null)
        setStartTimeValue(date[index] ? date[index].startTime : null)
        setEndTimeValue(date[index] ? date[index].endTime : null)
        setMatchValue(date[index] ? date[index].matchTime : false)
    }, [date])

    return [dateValue, startTimeValue, endTimeValue, matchTimeValue]
}