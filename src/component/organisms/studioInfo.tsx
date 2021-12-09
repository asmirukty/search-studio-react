import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import StudioInfoTitle from "../atoms/studioInfoTitle";
import StudioInfoContent from "../atoms/studioInfoContent";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '24px',
            color: '#5A4628'
        },
        facility: {
            padding: 8,
            fontSize: 14
        }
    })
);

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
            <StudioInfoTitle title={'スタジオ設備'}/>
            {
                props.facilities.map((facility) => (
                    <span key={facility.name} className={classes.facility}>{facility.name}</span>
                ))
            }
            <StudioInfoTitle title={'アクセス'}/>
            <StudioInfoContent content={props.address.address}/>
            <StudioInfoContent
                content={`${props.address.station.name}${props.address.exit.name}${props.address.minutes_from_station}分`}/>
            <StudioInfoTitle title={'注意事項'}/>
            <StudioInfoContent content={props.precaution}/>
            <StudioInfoTitle title={'ホームページ'}/>
            <link href={props.url}/>
        </div>
    );
}