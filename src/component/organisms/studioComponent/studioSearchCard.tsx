import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Typography} from "@material-ui/core";
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
        alignEnd: {
            display: 'flex',
            alignItems: 'flex-end'
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
    state: {
        prefecture: any[], city: any[], line: any[], station: any[], studioName: any,
        minArea: any, maxArea: any, minPeople: any, maxPeople: any, date: any[],
        fromStation: any, minPrice: any, maxPrice: any,
        minMirror: any, maxMirror: any, detailCheck: any[]

    }
}

export default function StudioSearchCard(props: StudioSearchProps) {
    const classes = useStyles();
    const {close, state} = props;
    const [prefecture, changePrefecture, deletePrefecture] = useArrayValue(state.prefecture);
    const [city, changeCity, deleteCity] = useArrayValue(state.city);
    const [line, changeLine, deleteLine] = useArrayValue(state.line);
    const [station, changeStation, deleteStation] = useArrayValue(state.station);
    const [studioName, setStudioName] = useState(state.studioName);
    const [minArea, maxArea, changeMinArea, changeMaxArea, deleteArea] = useRangeValue(state.minArea, state.maxArea);
    const [minPeople, maxPeople, changeMinPeople, changeMaxPeople, deletePeople] = useRangeValue(state.minPeople, state.maxPeople);
    const [date, changeDate, deleteDate] = useDateValue(state.date);
    const [fromStation, changeFromStation, deleteFromStation] = useValue(state.fromStation);
    const [minPrice, maxPrice, changeMinPrice, changeMaxPrice, deletePrice] = useRangeValue(state.minPrice, state.maxPrice);
    const [minMirror, maxMirror, changeMinMirror, changeMaxMirror, deleteMirror] = useRangeValue(state.minMirror, state.maxMirror);
    const [detailCheck, changeDetailCheck, deleteDetailCheck] = useArrayValue(state.detailCheck);
    const [search, setSearch] = useState(false)
    const cancel = useDetailValue(search, detailCheck, ['キャンセル無料期間あり']);
    const halfHourSlot = useDetailValue(search, detailCheck, [reservationOptions[0]]);
    const fromHalfHour = useDetailValue(search, detailCheck, [reservationOptions[1]]);
    const reservation = useDetailValue(search, detailCheck, [reservationOptions[2], reservationOptions[3]]);
    const studioFacility = useDetailValue(search, detailCheck, studioFacilityOptions);
    const roomFacility = useDetailValue(search, detailCheck, roomFacilityOptions);
    const floorMaterial = useDetailValue(search, detailCheck, floorMaterialOptions);

    const handleClose = () => {
        setSearch(true)
        if (close) {
            close()
        }
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.alignEnd}>
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
                <StudioName studioName={studioName} changeStudioName={setStudioName}/>
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
                            disabled={prefecture.length === 0 && city.length === 0 && !studioName}
                            onClick={handleClose}
                            component={Link}
                            to={{
                                pathname: `/studios/${cancel},${halfHourSlot},${fromHalfHour},${reservation},${studioFacility},${roomFacility},${floorMaterial}`,
                                //search: `?pref=${prefecture}`,
                                state: {
                                    prefecture: prefecture, city: city, line: line, station: station, studioName: studioName,
                                    minArea: minArea, maxArea: maxArea, minPeople: minPeople, maxPeople: maxPeople, date: date,
                                    fromStation: fromStation, minPrice: minPrice, maxPrice: maxPrice,
                                    minMirror: minMirror, maxMirror: maxMirror, detailCheck: detailCheck

                                }
                            }}>
                        検 索
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}