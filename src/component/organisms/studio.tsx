import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import {Typography} from "@material-ui/core";
import StudioName from "./studioComponent/studioNameTextField";
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
            padding: '6px 36px',
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            margin: 'auto',
        }
    }));

export default function Studio() {
    const classes = useStyles();
    const [items, setItems] = useState<any[]>([]);

    const addItems = (newItems?: any) => {
        if (newItems) {
            setItems(newItems)
        }
        console.log(items)
    };

    const deleteItems = (item?: string) => {
        if (item) {
            setItems(prevState => (
                prevState.filter((element: string) => element != item)
            ))
        }
    };

    return (
        <div style={{padding: 24}}>
            <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
            <Card className={classes.root}>
                <CardContent>
                    <Space/>
                    <Typography variant='subtitle1' className={classes.title}>
                        場所
                    </Typography>
                    <NewAreaDialog label={'エリア/沿線、駅を選択'} btn={'btn'} addItems={addItems} deleteItems={deleteItems}/>
                    <StudioName/>
                    <Typography variant='subtitle1' className={classes.title}>
                        広さ
                    </Typography>
                    <NewSpaceDialog label={'面積/人数を選択'} btn={'btn'}/>
                    <Typography variant='subtitle1' className={classes.title}>
                        日時
                    </Typography>
                    <NewDateDialog label={'日時を選択'} btn={'btn'}/>
                    <NewDetailDialog label={'もっとしぼり込む >'} btn={'detailBtn'}/>
                    <div style={{display: 'flex'}}>
                        <Button className={classes.searchBtn}
                                component={Link}
                                to={`/studios/${items}`}>
                            検 索
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}