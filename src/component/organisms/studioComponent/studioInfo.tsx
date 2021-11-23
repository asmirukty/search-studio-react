import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '24px',
            color: '#5A4628'
        },
        title: {
            paddingTop: '16px',
            fontWeight: 'bold'
        },
        content: {
            paddingLeft: '12px'
        },
        facility: {
            padding: 8,
            fontSize: 14
        }
    }))

interface StudioInfoProps {
    intro: string,
    facilities: { "name": string, "count": number, "price": number }[],
    address: {
        "address": string,
        "prefecture": { "id": string, "name": string },
        "city": { "id": string, "name": string },
        "line": { "id": string, "name": string },
        "station": { "id": string, "name": string },
        "exit": { "id": string, "name": string },
        "minutes_from_station": number
    },
    precaution: string,
    url: string
}

export default function StudioInfo(props: StudioInfoProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'body2'}>{props.intro}</Typography>
            <Typography variant={'body2'} className={classes.title}>スタジオ設備</Typography>
            {
                props.facilities.map((facility) => (
                    <span key={facility.name} className={classes.facility}>{facility.name}</span>
                ))
            }
            <Typography variant={'body2'} className={classes.title}>アクセス</Typography>
            <Typography variant={'body2'} className={classes.content}>{props.address.address}</Typography>
            <Typography variant={'body2'} className={classes.content}>
                {props.address.station.name}{props.address.exit.name}{props.address.minutes_from_station}分
            </Typography>
            <Typography variant={'body2'} className={classes.title}>注意事項</Typography>
            <Typography variant={'body2'} className={classes.content}>{props.precaution}</Typography>
            <Typography variant={'body2'} className={classes.title}>ホームページ</Typography>
            <link href={props.url}/>
        </div>
    );
}