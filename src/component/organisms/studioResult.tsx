import React, {useState, useEffect} from "react";
import {Card, Chip, CardContent, Button, Typography,} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import axios from 'axios';
import StudioTitle from "./studioResultComponent/studioTitle";
import RoomTitle from "./studioResultComponent/roomTitle";
import RoomContent from "./studioResultComponent/roomContent";

import {useParams} from 'react-router-dom'

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            color: "#5A4628",
            padding: 0,
            '&:last-child': {
                paddingBottom: 0
            }
        },
        chip: {
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            marginRight: 4
        },
        btn: {
            color: '#5A4628',
            fontSize: 12,
            padding: '0px 8px',
            margin: 0,
            border: '1px solid #D7D2C8',
            boxShadow: '0.5px 0.5px 4px 2px rgba(0, 0, 0, 0.1)'
        },
        content: {
            padding: '12px 16px'
        },
        roomTop: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        reserveBtn: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            display: 'flex',
            margin: '4px auto 8px',
            padding: '6px 16px'
        }
    }))

interface Prefecture {
    id: string,
    name: string,
}

let initialPrefecture: Prefecture = {
    id: '',
    name: '',
}

interface City {
    id: string,
    name: string,
}

let initialCity: City = {
    id: '',
    name: '',
}

interface Line {
    id: string,
    name: string,
}

let initialLine: Line = {
    id: '',
    name: '',
}

interface Station {
    id: string,
    name: string,
}

let initialStation: Station= {
    id: '',
    name: '',
}

interface Exit {
    id: string,
    name: string,
}

let initialExit: Exit = {
    id: '',
    name: '',
}

interface Address {
    address: string,
    prefecture: Prefecture,
    city: City,
    line: Line,
    station: Station,
    exit: Exit,
    minutes_from_station: number,
}

let initialAddress: Address = {
    address: '',
    prefecture: initialPrefecture,
    city: initialCity,
    line: initialLine,
    station: initialStation,
    exit: initialExit,
    minutes_from_station: 0,
}

interface StudioFacility {
    name: string,
    count: number,
    price: number,
}

let initialStudioFacility: StudioFacility = {
    name: '',
    count: 0,
    price: 0,
}

interface RoomImg {
    name: string,
    description: string,
    path :string,
}

let initialRoomImg: RoomImg = {
    name: '',
    description: '',
    path: '',
}

interface RoomFacility {
    name: string,
    count: number,
    price: number,
}

let initialRoomFacility: RoomFacility = {
    name: '',
    count: 0,
    price: 0,
}

interface Amenity {
    name: string,
    count: number,
    price: number,
}

let initialAmenity: Amenity = {
    name: '',
    count: 0,
    price: 0,
}

interface Slot {
    workload: number,
    time_begin: number,
    time_end: number,
    price: number,
    count: number,
}

let initialSlot: Slot = {
    workload: 0,
    time_begin: 0,
    time_end: 0,
    price: 0,
    count: 0,
}

interface Studio {
    studio_id: string,
    studio_name: string,
    address: Address,
    studio_facilities: StudioFacility[],
    room_name: string,
    floor_area: number,
    mirror_length: number,
    min_people: number,
    max_people: number,
    room_img: RoomImg[],
    free_cancel: boolean,
    reservation: string[],
    room_facilities: RoomFacility[],
    amenities: Amenity[],
    floor_material: string,
    slots: Slot[],
    min_reserve_minutes: number,
    reserve_url: string,
}

let initialStudio: Studio = {
    studio_id: '',
    studio_name: '',
    address: initialAddress,
    studio_facilities: [
        initialStudioFacility,
    ],
    room_name: '',
    floor_area: 0,
    mirror_length: 0,
    min_people: 0,
    max_people: 0,
    room_img: [
        initialRoomImg,
    ],
    free_cancel: false,
    reservation: [],
    room_facilities: [
        initialRoomFacility,
    ],
    amenities: [
        initialAmenity,
    ],
    floor_material: '',
    slots: [
        initialSlot,
    ],
    min_reserve_minutes: 0,
    reserve_url: '',
}

interface SearchResult {
    total_pages: number,
    studios: Studio[],
}

let initialSearchResult: SearchResult = {
    total_pages: 0,
    studios: [
        initialStudio,
    ]
}


export default function StudioResult() {
    const id: {id: string}  = useParams();
    const classes = useStyles();
    const [searchResult, setSearchResult] = useState(initialSearchResult);

    const items = id.id.split(',');

    useEffect(() => {
        axios.get('http://localhost:3000/sample.json')
            .then(response => {
                setSearchResult(response.data)
            })
    })

    return (
        <div style={{padding: 24}}>
            <Card style={{padding: 12}}>
                <CardContent className={classes.card}>
                    <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>検索条件</Typography>
                    {items.map((item) =>
                    <Chip size='small' label={item.replace('_', '/')} className={classes.chip}/>)}
                </CardContent>
            </Card>
            <h3 style={{textAlign: 'center'}}>
                検索結果
                <div style={{fontSize: 12}}>全{searchResult.total_pages}件</div>
            </h3>
            {
                searchResult.studios.map((row, index, array) => (
                    <Card style={{marginBottom: 24}}>
                            <CardContent className={classes.card}>
                                <StudioTitle studio={row.studio_name}
                                             station={row.address.station.name}
                                             exit={row.address.exit.name}
                                             fromStation={row.address.minutes_from_station}
                                             facilities={row.studio_facilities}/>
                                <div className={classes.content}>
                                    <div className={classes.roomTop}>
                                        <RoomTitle room={row.room_name}
                                                   floorArea={row.floor_area}
                                                   minPeople={row.min_people}
                                                   maxPeople={row.max_people}/>
                                        <Button className={classes.btn}>詳しく見る</Button>
                                    </div>
                                    <RoomContent roomImg={row.room_img}
                                                 facilities={row.room_facilities}
                                                 amenities={row.amenities}
                                                 minReserveMinutes={row.min_reserve_minutes}
                                                 slots={row.slots}/>
                                    <Button className={classes.reserveBtn}>予約画面へ</Button>
                                </div>
                            </CardContent>
                        </Card>
                ))
            }
        </div>
    )
}