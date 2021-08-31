import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import AreaDialog from "./studioComponent/areaDialog";
import StudioName from "./studioComponent/studioNameTextField";
import SpaceDialog from "./studioComponent/spaceDialog";
import DateDialog from "./studioComponent/dateDialog";
import DateMatchRadio from "./studioComponent/dateMatchRadio";
import DetailDialog from "./studioComponent/detailDialog";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: 275,
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

function StudioPage() {
    const classes = useStyles();

    return (
        <div style={{padding: 24}}>
            <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
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
        </div>
    )
}

export default StudioPage