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
import NewSpaceDialog from "./studioComponent/newSpaceDialog";
import NewAreaDialog from "./studioComponent/newAreaDialog";
import NewDateDialog from "./studioComponent/newDateDialog";
import Space from "./studioComponent/Space";
import NewDetailDialog from "./studioComponent/newDetailDialog";

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

function Studio() {
    const classes = useStyles();

    return (
        <div style={{padding: 24}}>
            <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
            <Card className={classes.root}>
                <CardContent>
                    <Space/>
                    <Typography variant='subtitle1' className={classes.title}>
                        場所
                    </Typography>
                    <AreaDialog/>
                    <NewAreaDialog label={'エリア/沿線、駅を選択'} btn={'btn'}/>
                    <StudioName/>
                    <Typography variant='subtitle1' className={classes.title}>
                        広さ
                    </Typography>
                    <SpaceDialog/>
                    <NewSpaceDialog label={'面積/人数を選択'} btn={'btn'}/>
                    <Typography variant='subtitle1' className={classes.title}>
                        日時
                    </Typography>
                    <DateDialog/>
                    <NewDateDialog label={'日時を選択'} btn={'btn'}/>
                    <DateMatchRadio/>
                    <DetailDialog/>
                    <NewDetailDialog label={'もっとしぼり込む >'} btn={'detailBtn'}/>
                    <Button className={classes.searchBtn}>検索</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Studio