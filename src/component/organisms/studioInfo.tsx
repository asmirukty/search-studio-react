import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import BoldTypography from "../atoms/boldTypography";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 24,
            color: '#5A4628'
        },
        flex: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    })
);

export interface StudioInfoProps {
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

function ContentTypography(props: {children: any}) {
    return <Typography variant={'body2'} style={{paddingLeft: 12}}>
        {props.children}
    </Typography>
}

export default function StudioInfo(props: StudioInfoProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'body2'}>{props.intro}</Typography>
            <BoldTypography sub margin={'16px 0 0'}>スタジオ設備</BoldTypography>
            <div className={classes.flex}>
                {
                    props.facilities.map((facility) => (
                        <ContentTypography key={facility.name}>{facility.name}</ContentTypography>
                    ))
                }
            </div>
            <BoldTypography sub margin={'16px 0 0'}>アクセス</BoldTypography>
            <ContentTypography>{props.address.address}</ContentTypography>
            <ContentTypography>
                {props.address.station.name}{props.address.exit.name}{props.address.minutes_from_station}分
            </ContentTypography>
            <BoldTypography sub margin={'16px 0 0'}>注意事項</BoldTypography>
            <ContentTypography>{props.precaution}</ContentTypography>
            <BoldTypography sub margin={'16px 0 0'}>ホームページ</BoldTypography>
            <link href={props.url}/>
        </div>
    );
}