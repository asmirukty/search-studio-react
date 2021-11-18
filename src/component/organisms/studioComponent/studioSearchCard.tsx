import React, {useEffect, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
import StudioDialog from "./studioDialog";
import StudioName from "./studioNameTextField";
import {Link} from "react-router-dom";
import useArrayValue from "../use-array-value";
import PlaceDialog from "./placeDialog";
import useRangeValue from "../use-range-value";
import SpaceDialog from "./spaceDialog";
import DateDialog from "./dateDialog";
import useDateValue from "../use-date-value";
import DateMatchRadio from "./dateMatchRadio";
import DetailDialog from "./detailDialog";
import useValue from "../use-value";
import useDetailValue from "../use-detail-value";
import {floorMaterialOptions, reservationOptions, roomFacilityOptions, studioFacilityOptions} from "./detailOptions";


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
    const [date, changeDate, deleteDate] = useDateValue([]);
    const [fromStation, changeFromStation, deleteFromStation] = useValue(null);
    const [minPrice, maxPrice, changeMinPrice, changeMaxPrice, deletePrice] = useRangeValue(null, null);
    const [minMirror, maxMirror, changeMinMirror, changeMaxMirror, deleteMirror] = useRangeValue(null, null);
    const [detailCheck, changeDetailCheck, deleteDetailCheck] = useArrayValue([]);
    const cancel = useDetailValue(detailCheck, ['キャンセル無料期間あり']);
    const halfHourSlot = useDetailValue(detailCheck, [reservationOptions[0]]);
    const fromHalfHour = useDetailValue(detailCheck, [reservationOptions[1]]);
    const reservation = useDetailValue(detailCheck, [reservationOptions[2], reservationOptions[3]]);
    const studioFacility = useDetailValue(detailCheck, studioFacilityOptions);
    const roomFacility = useDetailValue(detailCheck, roomFacilityOptions);
    const floorMaterial = useDetailValue(detailCheck, floorMaterialOptions);

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
                {/**<StudioName studioText={studioText} text={text}/>*/}
                <Typography component={'span'} variant='subtitle1' className={classes.title}>
                    広さ
                </Typography>
                <SpaceDialog minArea={minArea} maxArea={maxArea} minPeople={minPeople} maxPeople={maxPeople}
                             changeMinArea={changeMinArea} changeMaxArea={changeMaxArea} changeMinPeople={changeMinPeople} changeMaxPeople={changeMaxPeople}
                             deleteArea={deleteArea} deletePeople={deletePeople}/>
                <Typography component={'span'} variant='subtitle1' className={classes.title}>
                    日時
                </Typography>
                <DateDialog date={date} changeDate={changeDate} deleteDate={deleteDate}/>
                {date.length > 1 && <DateMatchRadio/>}
                <DetailDialog fromStation={fromStation} minPrice={minPrice} maxPrice={maxPrice} minMirror={minMirror} maxMirror={maxMirror} detailCheck={detailCheck}
                              changeFromStation={changeFromStation} changeMinPrice={changeMinPrice} changeMaxPrice={changeMaxPrice} changeMinMirror={changeMinMirror} changeMaxMirror={changeMaxMirror} changeDetailCheck={changeDetailCheck}
                              deleteFromStation={deleteFromStation} deletePrice={deletePrice} deleteMirror={deleteMirror} deleteDetailCheck={deleteDetailCheck}/>
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