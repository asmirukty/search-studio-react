import React, {useEffect} from "react";
import {Typography} from "@material-ui/core";
import {useRecoilState, useRecoilValue} from "recoil";
import {dateChipState, dateMatchState} from "../atom";
import StudioDateButton from "./studioDateButton";
import SearchRadio from "../atoms/searchRadio";

export default function StudioDate(props: {isWide?: boolean}) {
    const {isWide} = props;
    const dateChip = useRecoilValue(dateChipState);
    const [dateMatch, setDateMatch] = useRecoilState<boolean>(dateMatchState);

    useEffect(() => {
        if (dateChip.length < 2) {
            setDateMatch(false)
        }
    }, [dateChip])

    const handleChange = () => {
        setDateMatch(prevState => !prevState);
    };

    return (
        <div style={isWide ? {width: '50%'} : {marginBottom: 8}}>
            <Typography>日時</Typography>
            <StudioDateButton/>
            {
                dateChip.length > 1 &&
                <SearchRadio afterTyp={'の日時で空いている'} value={dateMatch ? 'すべて' : 'いずれか'}
                             options={['いずれか', 'すべて']} handleChange={handleChange}/>
            }
        </div>
    );
}