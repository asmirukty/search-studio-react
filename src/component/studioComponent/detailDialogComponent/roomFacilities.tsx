import {Typography} from "@material-ui/core";
import React from "react";
import Mirror from "./roomFacilitiesComponent/mirror";
import LightAndFilming from "./roomFacilitiesComponent/lightAndFilming";
import SoundAndMovie from "./roomFacilitiesComponent/soundAndMovie";
import FloorMaterial from "./roomFacilitiesComponent/floorMaterial";
import Amenities from "./roomFacilitiesComponent/amenities";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            fontWeight: 'bold'
        }
    }));

export default function RoomFacilities() {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>部屋設備・備品</Typography>
            <Mirror/>
            <LightAndFilming/>
            <SoundAndMovie/>
            <FloorMaterial/>
            <Amenities/>
        </div>
    );
}