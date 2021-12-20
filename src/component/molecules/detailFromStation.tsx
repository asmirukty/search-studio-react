import React from 'react';
import {useRecoilState} from "recoil";
import {fromStationOptions} from "../atoms/itemsAndOptions/detailOptions";
import {fromStationState} from "../atom";
import SelectOption from "./selectOption";
import {MenuItem} from "@material-ui/core";
import NormalTitle from "../atoms/NormalTitle";
import {useMedia} from "use-media";

export default function DetailFromStation() {
    const isWide = useMedia({ minWidth: 420 });
    const [fromStation, setFromStation] = useRecoilState<number|null>(fromStationState);

    const changeFromStation = (event: any) => {
        event.target.value === fromStationOptions[0] ? setFromStation(null) : setFromStation(event.target.value);
    };

    return (
        <div style={isWide ? {display:'flex'} : {}}>
            <NormalTitle>駅から徒歩</NormalTitle>
            <div style={isWide ? {paddingLeft: 24} : {}}>
                <SelectOption value={fromStation} nullValue={fromStationOptions[0]} onChange={changeFromStation}>
                    {
                        fromStationOptions.map((option: any, index) =>
                            <MenuItem value={option} key={index}>{option}{index > 0 && '分以内'}</MenuItem>
                        )
                    }
                </SelectOption>
            </div>
        </div>
    );
}