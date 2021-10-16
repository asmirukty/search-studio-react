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
        require: {
            color: "#5A4628",
            fontSize: 10,
            marginLeft: 8
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
            '&.Mui-disabled': {
                color: '#F9F5F0',
                opacity: .6
            }
        }
    }));

export default function Studio() {
    const classes = useStyles();
    const [area, setArea] = useState<any[]>([]);
    const [studio, setStudio] = useState<string | null>(null);
    const [place, setPlace] = useState<any[]>([])
    const [space, setSpace] = useState('');
    const [people, setPeople] = useState('');
    const [date, setDate] = useState('');
    const [fromStation, setFromStation] = useState('');
    const [price, setPrice] = useState('');
    const [mirror, setMirror] = useState('');
    const [checkedItem, setCheckedItem] = useState<string[]>([]);

    const addArea = (newArea?: string[]) => {
        if (newArea) {
            setArea(newArea)
            setPlace([...newArea, studio])
        }
    };

    const deleteArea = (area?: string) => {
        if (area) {
            setArea(prevState => (
                prevState.filter((element: string) => element != area)
            ))
            setPlace(prevState => (
                prevState.filter((element: string) => element != area)
            ))
        }
    };

    const studioText = (text?: string) => {
        if (text === '') {
            setPlace([...area])
        }
        else if (text) {
            setStudio(text)
            setPlace([...area, text])
        }
    };

    const addSpace = (newSpace?: string) => {
        if (newSpace) {
            setSpace(','+newSpace)
        }
        else {
            setSpace('')
        }
    };

    const addPeople = (newPeople?: string) => {
        if (newPeople) {
            setPeople(','+newPeople)
        }
        else {
            setPeople('')
        }
    };

    const addDate = (newDate?: string) => {
        if (newDate) {
            setDate(','+newDate.replace('/', '_'))
        }
        else {
            setDate('')
        }
    };

    const addFromStation = (newFromStation?: string) => {
        if (newFromStation) {
            setFromStation(','+newFromStation)
        }
        else {
            setFromStation('')
        }
    };

    const addPrice = (newPrice?: string) => {
        if (newPrice) {
            setPrice(','+newPrice)
        }
        else {
            setPrice('')
        }
    };

    const addMirror = (newMirror?: string) => {
        if (newMirror) {
            setMirror(','+newMirror)
        }
        else {
            setMirror('')
        }
    };

    const addCheckedItem = (newCheckedItem?: any) => {
        if (newCheckedItem) {
            setCheckedItem([ '', ...newCheckedItem])
        }
    };

    const deleteCheckedItem = (checkedItem?: string) => {
        if (checkedItem) {
            setCheckedItem(prevState => (
                prevState.filter((element: string) => element != checkedItem)
            ))
        }
    };

    return (
        <div style={{padding: 24}}>
            <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
            <Card className={classes.root}>
                <CardContent>
                    <Space/>
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <Typography variant='subtitle1' className={classes.title}>
                            場所
                        </Typography>
                        <Typography variant='caption' className={classes.require}>
                            ※必ず<span style={{fontSize: 12}}>エリア/沿線、駅</span>または<span style={{fontSize: 12}}>スタジオ</span>を指定
                        </Typography>
                    </div>
                    <NewAreaDialog label={'エリア/沿線、駅を選択'} btn={'btn'} addItems={addArea} deleteItems={deleteArea}/>
                    <StudioName studioText={studioText}/>
                    <Typography variant='subtitle1' className={classes.title}>
                        広さ
                    </Typography>
                    <NewSpaceDialog label={'面積/人数を選択'} btn={'btn'} addSpace={addSpace} addPeople={addPeople}/>
                    <Typography variant='subtitle1' className={classes.title}>
                        日時
                    </Typography>
                    <NewDateDialog label={'日時を選択'} btn={'btn'} addDate={addDate}/>
                    <NewDetailDialog label={'もっとしぼり込む >'} btn={'detailBtn'}
                                     addFromStation={addFromStation} addPrice={addPrice} addMirror={addMirror}
                                     addCheckedItem={addCheckedItem} deleteCheckedItem={deleteCheckedItem}/>
                    <div style={{display: 'flex'}}>
                        <Button className={classes.searchBtn}
                                disabled={place.length === 0}
                                component={Link}
                                to={`/studios/${place}${space}${people}${date}${fromStation}${price}${mirror}${checkedItem}`}>
                            検 索
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}