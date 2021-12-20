import React from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {dateState, dateChipState, dateOpenState, addDateOpenState} from "../atom";
import StudioDialog from "../molecules/studioDialog";
import DateSelect from "./dateSelect";
import {sortDate} from "../atoms/sortDate";

export default function DateDialog() {
    const [dateOpen, setDateOpen] = useRecoilState<boolean>(dateOpenState);
    const addDateOpen = useRecoilValue<boolean[]>(addDateOpenState);
    const date = useRecoilValue<{date: Date, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateState);
    const setDateChip = useSetRecoilState<{date: Date, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateChipState);

    const dateOk = () => {
        setDateOpen(false);
        setDateChip(sortDate(date));
    };

    const dateCancel = () => {
        setDateOpen(false);
    };

    return (
        <StudioDialog open={dateOpen} handleCancel={dateCancel} handleOk={dateOk}>
            <div style={{padding: '4px 20px 20px'}}>
                {
                    [0, 1, 2, 3, 4].map((i) =>
                        addDateOpen[i] && <DateSelect key={i} index={i}/>
                    )
                }
            </div>
        </StudioDialog>
    );
}