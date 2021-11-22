import {Typography} from "@material-ui/core";
import {Place} from "@material-ui/icons";
import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        top: {
            padding: '0px 4px',
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #D7D2C8',
        },
        chip: {
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            marginRight: 4
        },
        btn: {
            color: '#5A4628',
            fontSize: 12,
            padding: '0px 8px',
            margin: 0,
            border: '1px solid #D7D2C8',
            boxShadow: '0.5px 0.5px 4px 2px rgba(0, 0, 0, 0.1)'
        },
    }))

interface StudioTitleProps {
    studio: string;
    station: string;
    exit: string;
    fromStation: number;
}

export default function StudioTitle(props: StudioTitleProps) {
    const classes = useStyles();

    return (
            <div className={classes.top}>
                <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>{props.studio}</Typography>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Place fontSize='small'/>
                    <Typography variant='caption'>
                        {props.station}{props.exit}徒歩{props.fromStation}分
                    </Typography>
                </div>
            </div>
    )
}