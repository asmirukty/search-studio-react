import {Chip, Typography} from "@material-ui/core";
import {Place} from "@material-ui/icons";
import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        header: {
            padding: '12px 16px',
            boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.1)'
        },
        top: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #D7D2C8',
            marginBottom: 4
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
    facilities: {
        name: string,
        count: number,
        price: number,
    }[];
}

export default function StudioTitle(props: StudioTitleProps) {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.top}>
                <Typography variant='subtitle1'>{props.studio}</Typography>
                <Typography variant='caption'>
                    <Place fontSize='small'/>
                    {props.station}{props.exit}徒歩{props.fromStation}分
                </Typography>
            </div>
            {
                props.facilities.map(facility => (
                    <Chip size="small" label={facility.name} className={classes.chip}/>
                ))
            }
        </div>
    )
}