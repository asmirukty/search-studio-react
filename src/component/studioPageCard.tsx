import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import StudioName from "./studioNameTextField";
import AreaDialog from "./areaDialog";
import SpaceDialog from "./spaceDialog";
import DateDialog from "./dateDialog";
import DetailDialog from "./detailDialog";
import DateMatchRadio from "./dateMatchRadio";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: 275
        },
        title: {
            color: "#5A4628"
        },
        box: {
            fieldset: {
                borderColor: '#D7D2C8'
            }},
        pos: {
            marginBottom: 12,
        },
        searchBtn: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            display: 'flex',
            margin: 'auto',
    }
}));

export default function StudioPageCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant='subtitle1' className={classes.title}>
                    場所
                </Typography>
                <AreaDialog/>
                <StudioName/>
                <Typography variant='subtitle1' className={classes.title}>
                    広さ
                </Typography>
                <SpaceDialog/>
                <Typography variant='subtitle1' className={classes.title}>
                    日時
                </Typography>
                <DateDialog/>
                <DateMatchRadio/>
                <DetailDialog/>
                <Button className={classes.searchBtn}>検索</Button>
            </CardContent>
        </Card>
    );
}
