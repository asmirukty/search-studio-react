import {useState} from 'react'

type dateType = {date: Date, startTime: string, endTime: string, match: string}

export default function useDateValue (initialDate: dateType[]|[]):
    [dateType[]|[], (newDate: dateType[]|[]) => void, (deleteDate: dateType) => void]{
    const [date, setDate] = useState(initialDate)

    const changeDate = (newDate: dateType[]|[]) => {
        if (newDate.length > 1) {
            newDate.sort(function (a, b) {
                if (a.date && b.date) {
                    if (a.date.getFullYear() > b.date.getFullYear()) {
                        return 1
                    }
                    if (a.date.getFullYear() < b.date.getFullYear()) {
                        return -1
                    }
                    // yearが同じの時
                    if (a.date.getMonth() > b.date.getMonth()) {
                        return 1
                    }
                    if (a.date.getMonth() < b.date.getMonth()) {
                        return -1
                    }
                    // monthが同じの時
                    if (a.date.getDate() > b.date.getDate()) {
                        return 1
                    }
                    if (a.date.getDate() < b.date.getDate()) {
                        return -1
                    }
                    // dateが同じの時
                    if (a.startTime > b.startTime) {
                        return 1
                    }
                    if (a.startTime < b.startTime) {
                        return -1
                    }
                    //startTimeが同じ時
                    if (a.endTime < b.endTime) {
                        return 1
                    }
                    if (a.endTime < b.endTime) {
                        return -1
                    }
                }
                return 0
            })
        }
        setDate(newDate)
    }

    const deleteDate = (deleteDate: dateType) => {
        setDate(prevState => (
            prevState.filter((element: any) => element !== deleteDate)
        ))
    }

    return [date, changeDate, deleteDate]
}