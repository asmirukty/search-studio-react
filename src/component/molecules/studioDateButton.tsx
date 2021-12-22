import React from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import SearchPaperButton from "../atoms/searchPaperButton";
import {addDateOpenState, dateChipState, dateOpenState, dateState} from "../atom";
import SearchChip from "../atoms/searchChip";
import RangeLabel from "../atoms/rangeLabel";
import DateConvert from "../atoms/dateConvert";

export default function StudioDateButton() {
    const setDateOpen = useSetRecoilState<boolean>(dateOpenState);
    const setAddDateOpen = useSetRecoilState<boolean[]>(addDateOpenState);
    const setDate = useSetRecoilState<{date: Date, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateState);
    const [dateChip, setDateChip] = useRecoilState<{date: Date, startTime: string|null, endTime: string|null, matchTime: boolean}[]>(dateChipState);

    const dateDialogOpen = () => {
        setDateOpen(true);
        setDate(dateChip);
        setAddDateOpen([true]);
        for (let i = 0; i < dateChip.length - 1; i ++) {
            setAddDateOpen(prevState => [...prevState, true])
        }
    };

    const dateChipDelete = (index: number) => () => {
        setDateChip(prevState =>
            prevState.filter((element, idx) => idx !== index)
        );
    };

    return (
        <SearchPaperButton dialogOpen={dateDialogOpen} label={'日時'} chipDisplay={dateChip.length > 0}>
            {
                dateChip.map((item, index) =>
                    <SearchChip label={DateConvert(item.date)} key={index}
                                after={RangeLabel({min: item.startTime, max: item.endTime})}
                                onDelete={dateChipDelete(index)}/>
                )
            }
        </SearchPaperButton>
    );
}