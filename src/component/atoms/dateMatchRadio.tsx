import React, {useEffect} from 'react';
import SearchRadio from "./searchRadio";
import {useRecoilState, useRecoilValue} from "recoil";
import {dateChipState, dateMatchState} from "../atom";

export default function DateMatchRadio() {
    const [dateMatch, setDateMatch] = useRecoilState<boolean>(dateMatchState);
    const dateChip = useRecoilValue(dateChipState);

    useEffect(() => {
        if (dateChip.length < 2) {
            setDateMatch(false)
        }
    }, [dateChip])

    const handleChange = () => {
        setDateMatch(prevState => !prevState);
    };

    return (
        <SearchRadio afterTyp={'の日時で空いている'} value={dateMatch ? 'すべて' : 'いずれか'}
                     options={['いずれか', 'すべて']} handleChange={handleChange}/>
    );
}
