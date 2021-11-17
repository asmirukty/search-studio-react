import React, {useEffect, useState} from 'react'

type dateType = {date: Date, startTime: string, endTime: string}

export default function useDateSelect (open: boolean, initialDate: dateType[]|[], deleteProp: (date: dateType) => void) : [
    any, boolean[],
    (openIndex: number) => () => void,
    (dateIndex: number) => (newDate: dateType|null) => void,
    (deleteDate: dateType) => () => void
]　{
    const [date, setDate] = useState(initialDate)
    const [opens, setOpens] = React.useState([true, false, false, false, false]);

    useEffect(() => {
        if (open) {
            setDate(initialDate)
            setOpens(prevState =>
                prevState.map((state, index) =>
                    index === 0 || index < initialDate.length
                )
            )
        }
    }, [open])

    const addDate = (opensIndex: number) => () => {
        setOpens(prevState =>
            prevState.map((state, index) => index <= opensIndex)
        )
    }

    const changeDate = (dateIndex: number) => (newDate: dateType|null) => {
        if (newDate !== null) {
            date.length > dateIndex ?
                setDate(prevState => (
                    prevState.map((state, index) =>
                        index === dateIndex ? newDate : state
                    )
                ))
                :
                setDate(prevState => [...prevState, newDate])
        }
        else {
            setDate(prevState => (
                prevState.filter((element, index) => index !== dateIndex)
            ))
            setOpens(prevState =>
                [...prevState.filter((element, index) => index !== dateIndex), false]
            )
        }
    };

    const deleteDate = (deleteDate: dateType) => () => {
        setDate((prevState) => (
            prevState.filter((element) => {
                return element !== deleteDate
            }))
        )
        deleteProp(deleteDate)
    }

    return [date, opens, addDate, changeDate, deleteDate]
}