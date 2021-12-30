import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {People} from "@material-ui/icons";
import RangeLabel from "../rangeLabel";

const useStyles = makeStyles(() =>
    createStyles({
        roomTop: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 4
        },
        people:{
            margin: '0px 8px',
            display: 'flex',
            alignItems: 'center'
        },
        floor: {
            border: '1px solid #D7D2C8',
            fontSize: 12,
            padding: 2,
            margin: '0 8px'
        }
    })
);

interface StudioRoomContentTopProps {
    name: string;
    area: number;
    minPeople: number;
    maxPeople: number;
    floor: string;
}

export default function StudioRoomContentTop(props: StudioRoomContentTopProps) {
    const classes = useStyles();

    return (
        <div className={classes.roomTop}>
            <Typography variant={'body1'} style={{fontWeight: 'bold'}}>{props.name}</Typography>
            <Typography variant='body2' style={{margin: '0px 8px'}}>⊿ {props.area}m²</Typography>
            {
                (props.minPeople > 0 || props.maxPeople > 0) &&
                <Typography variant='body2' className={classes.people}>
                    <People fontSize={'small'}/>
                    {RangeLabel({min: props.minPeople, max: props.maxPeople, unit: '人'})}
                </Typography>
            }
            <div className={classes.floor}>{props.floor}</div>
        </div>
    );
}