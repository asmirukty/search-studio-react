import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import StudioResultCardDetail from "../atoms/studioResultCardDetail";

const useStyles = makeStyles(() =>
    createStyles({
        roomTop: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 8
        }
    })
);

interface RoomContentProps {
    room: string;
    floorArea: number;
}

export default function RoomTop(props: RoomContentProps) {
    const classes = useStyles();

    return (
        <div className={classes.roomTop}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>{props.room}</Typography>
                <Typography variant='caption' style={{margin: '0px 8px'}}>⊿ {props.floorArea}m²</Typography>
            </div>
            <StudioResultCardDetail/>
        </div>
    );
}