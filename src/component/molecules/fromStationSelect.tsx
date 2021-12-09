import React from 'react';
import {useRecoilState} from "recoil";
import {fromStationOptions} from "../atoms/itemsAndOptions/detailOptions";
import {fromStationState} from "../atom";
import SelectOption from "./selectOption";
import {MenuItem} from "@material-ui/core";

export default function FromStationSelect() {
    const [fromStation, setFromStation] = useRecoilState<number|null>(fromStationState);

    const changeFromStation = (event: any) => {
        event.target.value === fromStationOptions[0] ? setFromStation(null) : setFromStation(event.target.value);
    };

    return (
        <SelectOption value={fromStation} nullValue={fromStationOptions[0]} onChange={changeFromStation}>
            {
                fromStationOptions.map((option: any, index) =>
                    <MenuItem value={option} key={index}>{option}{index > 0 && '分以内'}</MenuItem>
                )
            }
        </SelectOption>
    );
}