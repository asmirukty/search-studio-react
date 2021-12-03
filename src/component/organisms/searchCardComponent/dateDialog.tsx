import React from 'react';
import {useRecoilState} from "recoil";
import {dateState, dateChipState, dateOpenState, addDateOpenState} from "./atom";
import StudioDialog from "../../templates/studioDialog";
import DateSelect from "./dateSelect";
import DateDialogChip from "./dateDialogChip"
import DateMatchRadio from "./dateMatchRadio";

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

export default function DateDialog() {
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
        console.log(date[0].date && Date.UTC(date[0].date.getFullYear(), date[0].date.getMonth()))
        console.log(date[0].startTime && Number(date[0].startTime.split(':')[0]))
    }

    const dateCancel = () => {
        setDateOpen(false)
    }

    return (
        <div>
            <StudioDialog open={dateOpen} dialogOpen={dateDialogOpen}
                          handleCancel={dateCancel} handleOk={dateOk}
                          title={'日時'}
                          labelCheck={dateChip.length === 0}
                          label={'日時を選択'}
                          chips={<DateDialogChip/>}
                          dialogContent={
                                 <div style={{padding: '20px 24px'}}>
                                     {
                                         [0, 1, 2, 3, 4].map((i) => addDateOpen[i] && <DateSelect index={i}/>)
                                     }
                                 </div>
                             }/>

            {dateChip.length > 1 && <DateMatchRadio/>}
        </div>
    )
}