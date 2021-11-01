import {Typography} from "@material-ui/core";
import {PeopleAlt} from "@material-ui/icons";
import React from "react";

interface RoomTitleProps {
    room: string;
    floorArea: number;
    minPeople: number;
    maxPeople: number;
}

export default function RoomTitle(props: RoomTitleProps) {

    return (
        <div style={{display: 'flex'}}>
            <Typography variant='subtitle2'>{props.room}</Typography>
            <Typography variant='caption' style={{margin: '0px 8px'}}>⊿ {props.floorArea}m²</Typography>
            {(props.minPeople > 0 && props.maxPeople > 0) && (
                <div>
                    <PeopleAlt fontSize='small'/>
                    <Typography variant='caption'>{props.minPeople}人~{props.maxPeople}人</Typography>
                </div>
            )}
            {(props.minPeople > 0 && props.maxPeople === 0) && (
                <div>
                    <PeopleAlt fontSize='small'/>
                    <Typography variant='caption'>{props.minPeople}人~</Typography>
                </div>
            )}
            {(props.minPeople === 0 && props.maxPeople > 0) && (
                <div>
                    <PeopleAlt fontSize='small'/>
                    <Typography variant='caption'>~{props.maxPeople}人</Typography>
                </div>
            )}
        </div>
    )
}