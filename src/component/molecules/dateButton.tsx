import React from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import SearchCardButton from "../atoms/searchCardButton";
import {addDateOpenState, dateChipState, dateOpenState, dateState} from "../atom";
import SearchChip from "../atoms/searchChip";
import DateConvert from "../atoms/dateConvert";
import RangeLabel from "../atoms/rangeLabel";

export default function DateButton() {
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
        <SearchCardButton dialogOpen={dateDialogOpen} label={'日時'} chipDisplay={dateChip.length > 0}>
            {
                dateChip.map((item, index) =>
                    <SearchChip label={DateConvert(item.date)} key={index}
                                after={RangeLabel({min: item.startTime, max: item.endTime})}
                                onDelete={dateChipDelete(index)}/>
                )
            }
        </SearchCardButton>
    );
}