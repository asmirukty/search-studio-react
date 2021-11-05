import {Typography} from "@material-ui/core";
import React from "react";

interface RoomTitleProps {
    room: string;
    floorArea: number;
}

export default function RoomTitle(props: RoomTitleProps) {

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>{props.room}</Typography>
            <Typography variant='caption' style={{margin: '0px 8px'}}>⊿ {props.floorArea}m²</Typography>

        </div>
    )
}