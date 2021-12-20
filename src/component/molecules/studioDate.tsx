import React from "react";
import {Typography} from "@material-ui/core";
import {useRecoilValue} from "recoil";
import {dateChipState} from "../atom";
import DateButton from "../molecules/dateButton";
import DateMatchRadio from "../atoms/dateMatchRadio";

export default function StudioDate(props: {isWide?: boolean}) {
    const {isWide} = props;
    const dateChip = useRecoilValue(dateChipState);

    return (
        <div style={isWide ? {width: '50%'} : {marginBottom: 8}}>
            <Typography>日時</Typography>
            <DateButton/>
            {dateChip.length > 1 && <DateMatchRadio/>}
        </div>
    );
}