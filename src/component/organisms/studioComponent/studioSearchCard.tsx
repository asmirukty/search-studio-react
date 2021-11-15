import React, {useEffect, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import StudioDialog from "./studioDialog";
import StudioName from "./studioNameTextField";
import {Link} from "react-router-dom";
import useArrayValue from "../use-array-value";
import PlaceDialog from "./placeDialog";
import useRangeValue from "../use-range-value";


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
        paper: {
            margin: 12,
            flexGrow: 1
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
            },
            '&:hover': {
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                opacity: .8
            }
        }
    }));

interface StudioSearchProps {
    close?: (value?: any) => void;
    state?: any
}

export default function StudioSearchCard(props: StudioSearchProps) {
    const classes = useStyles();
    const {close, state} = props;
    const [studio, setStudio] = useState()
    const [prefecture, changePrefecture, deletePrefecture] = useArrayValue([]);
    const [city, changeCity, deleteCity] = useArrayValue([]);
    const [line, changeLine, deleteLine] = useArrayValue([]);
    const [station, changeStation, deleteStation] = useArrayValue([]);
    const [minArea, maxArea, changeMinArea, changeMaxArea, deleteArea] = useRangeValue(null, null);
    const [minPeople, maxPeople, changeMinPeople, changeMaxPeople, deletePeople] = useRangeValue(null, null);
    const [date, setDate] = useState<any[]>([]);
    const [fromStation, setFromStation] = useState<any>(0);
    const [cancel, setCancel] = useState<boolean>(false);
    const [minPrice, maxPrice, changeMinPrice, changeMaxPrice, deletePrice] = useRangeValue(null, null);
    const [halfHour, setHalfHour] = useState<boolean>(false);
    const [reservation, changeReservation, deleteReservation] = useArrayValue([]);
    const [studioFacility, changeStudioFacility, deleteStudioFacility] = useArrayValue([]);
    const [minMirror, maxMirror, changeMinMirror, changeMaxMirror, deleteMirror] = useRangeValue(null, null);
    const [roomFacility, changeRoomFacility, deleteRoomFacility] = useArrayValue([]);
    const [floorMaterial, changeFloorMaterial, deleteFloorMaterial] = useArrayValue([]);

    useEffect(() => {
    },[])

    const handleClose = () => {
        if (close) {
            close()
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                    <Typography component={'span'} variant='subtitle1' className={classes.title}>
                        場所
                    </Typography>
                    <Typography component={'span'} variant='caption' className={classes.require}>
                        ※必ず<span style={{fontSize: 12}}>エリア/沿線、駅</span>または<span style={{fontSize: 12}}>スタジオ</span>を指定
                    </Typography>
                </div>
                <PlaceDialog pref={prefecture} city={city} line={line} station={station}
                             changePref={changePrefecture} changeCity={changeCity} changeLine={changeLine} changeStation={changeStation}
                             deletePref={deletePrefecture} deleteCity={deleteCity} deleteLine={deleteLine} deleteStation={deleteStation}/>
                {/**<StudioDialog label='エリア/沿線、駅を選択' chip={area} chipDelete={deletePrefecture} chipChange={changePrefecture}>
                </StudioDialog>
                <StudioName studioText={studioText} text={text}/>
                <Typography component={'span'} variant='subtitle1' className={classes.title}>
                    広さ
                </Typography>
                <StudioDialog label='面積/人数を選択' chip={space} chipDelete={deleteArea} chipChange={addSpace}>

                </StudioDialog>
                <Typography component={'span'} variant='subtitle1' className={classes.title}>
                    日時
                </Typography>
                <StudioDialog label='日時を選択' chip={date} chipDelete={deleteDate} chipChange={addDate}>

                </StudioDialog>
                <StudioDialog label='もっとしぼり込む >' detail chip={date} chipDelete={deleteDate} chipChange={addDate}>

                </StudioDialog>*/}
                <div style={{display: 'flex'}}>
                    <Button className={classes.searchBtn}
                            disabled={prefecture.length === 0 && city.length === 0}
                            onClick={handleClose}
                            component={Link}
                            to={{
                                pathname: `/studios/${date}${fromStation}`,
                                state: {date: date, fromStation: fromStation}
                            }}>
                        検 索
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}