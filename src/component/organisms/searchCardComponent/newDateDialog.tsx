import React from 'react';
import {useRecoilState} from "recoil";
import {dateState, dateChipState, dateOpenState, addDateOpenState} from "./atom";
import NewStudioDialog from "./newStudioDialog";
import NewDateSelect from "./newDateSelect";
import NewDateDialogChip from "./newDateDialogChip"

const sortDate = (date: {date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]) => {
    let newDate = date

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
                if (a.startTime && (!b.startTime || (b.startTime && a.startTime > b.startTime))) {
                    return 1
                }
                if (b.startTime && (!a.startTime ||(a.startTime && a.startTime < b.startTime))) {
                    return -1
                }
                //startTimeが同じ時
                if (a.endTime && (!b.endTime || (b.endTime && a.endTime < b.endTime))) {
                    return 1
                }
                if (b.endTime && (!a.endTime || (a.endTime && a.endTime < b.endTime))) {
                    return -1
                }
            }
            return 0
        })
    }

    return newDate
}

export default function NewDateDialog() {
    const [dateOpen, setDateOpen] = useRecoilState<boolean>(dateOpenState);
    const [addDateOpen, setAddDateOpen] = useRecoilState<boolean[]>(addDateOpenState)
    const [date, setDate] = useRecoilState<{date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateState);
    const [dateChip, setDateChip] = useRecoilState<{date: Date|null, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateChipState);

    const dateDialogOpen = () => {
        setDateOpen(true)
        setDate(dateChip)
        setAddDateOpen(prevState =>
            prevState.filter((element, idx) => idx === 0 || idx < dateChip.length)
        )
    }

    const dateOk = () => {
        setDateOpen(false);
        setDateChip(date)
    }

    const dateCancel = () => {
        setDateOpen(false)
    }

    return (
        <NewStudioDialog open={dateOpen} dialogOpen={dateDialogOpen}
                         handleCancel={dateCancel} handleOk={dateOk}
                         labelCheck={dateChip.length === 0}
                         label={'日時を選択'}
                         chips={<NewDateDialogChip/>}
                         dialogContent={
                             [0, 1, 2, 3, 4].map((i) => addDateOpen[i] && <NewDateSelect index={i}/>)
                         }/>
    )
}