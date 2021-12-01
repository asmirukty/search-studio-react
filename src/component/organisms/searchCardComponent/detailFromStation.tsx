import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {fromStationState} from "./atom";
import SelectOption from "../../atoms/selectOption";
import {fromStationOptions} from "./itemsAndOptions/detailOptions";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        }
    }));

export default function DetailFromStation() {
    const classes = useStyles()
    const [fromStation, setFromStation] = useRecoilState<string|null>(fromStationState);

    const changeFromStation = (event: any) => {
        event.target.value === fromStationOptions[0] ? setFromStation(null) : setFromStation(event.target.value)
    }
    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>駅から徒歩</Typography>
            <SelectOption value={fromStation} nullValue={fromStationOptions[0]} onChange={changeFromStation}>
                {
                    fromStationOptions.map((option: any, index) =>
                        <MenuItem value={option} key={index}>{option}</MenuItem>
                    )
                }
            </SelectOption>
        </div>
    )
}