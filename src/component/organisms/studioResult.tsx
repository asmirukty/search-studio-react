import React, {useState, useEffect} from "react";
import {Card, Chip, CardContent, Button, Typography, Dialog, CardActionArea,} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import axios from 'axios';
import StudioTitle from "./studioResultComponent/studioTitle";
import RoomTitle from "./studioResultComponent/roomTitle";
import RoomContent from "./studioResultComponent/roomContent";
import {useParams} from 'react-router-dom'
import Studio from "./studio";
import {Close} from "@material-ui/icons";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles(() =>
    createStyles({
        topCard: {
            zIndex: 10000,
            position:'sticky',
            top: 110
        },
        card: {
            color: "#5A4628",
            padding: '12px 16px',
            '&:last-child': {
                paddingBottom: 12
            }
        },
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        },
        chip: {
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            marginRight: 4,
        },
        changeBtn: {
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            fontSize: 14,
            padding: 0,
            marginLeft: 4,
            right: 0,
            '&:hover': {
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                opacity: .8
            }
        },
        btn: {
            color: '#5A4628',
            fontSize: 12,
            padding: '0px',
            margin: 0,
            fontWeight: 'bold'
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'block'
        },
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
        },
        content: {
            padding: '12px 16px'
        },
        roomTop: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 8
        },
        reserveBtn: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            display: 'flex',
            margin: '4px auto 8px',
            padding: '6px 16px',
            '&:hover': {
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                opacity: .8
            }
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

interface Room {
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

let initialRoom: Room = {
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

interface Studio {
    studio_id: string,
    studio_name: string,
    address: Address,
    studio_facilities: StudioFacility[],
    room_count: number,
    rooms: Room[]
}

let initialStudio: Studio = {
    studio_id: '',
    studio_name: '',
    address: initialAddress,
    studio_facilities: [
        initialStudioFacility,
    ],
    room_count: 0,
    rooms: [
        initialRoom
    ]
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

export default function StudioResult(props: { state: any}) {
    const id: {id: string}  = useParams();
    const classes = useStyles();
    const [searchResult, setSearchResult] = useState(initialSearchResult);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const items = id.id.split(',');

    useEffect(() => {
        axios.get('http://localhost:3000/sample.json')
            .then(response => {
                setSearchResult(response.data)
            })
    })

    return (
        <div style={{padding: 24}}>
            <Card className={classes.topCard}>
                <CardContent className={classes.card}>
                    <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>検索条件</Typography>
                    <div style={{display: 'flex', justifyContent: 'space-between',}}>
                        <div className={classes.wrapChip}>
                            {
                                items.map((item,index) =>
                                    <Chip size='small' key={index} label={item.replace('_', '/')} className={classes.chip}/>)
                            }
                        </div>
                        <Button className={classes.changeBtn} onClick={handleClickOpen}>変更</Button>
                    </div>
                </CardContent>
            </Card>
            <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}} open={open}>
                <DialogActions className={classes.dialogBtn}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button autoFocus onClick={() => setOpen(false)} className={classes.dialogClose}>
                            <Close fontSize='small'/>
                        </Button>
                    </div>
                    <Typography variant='subtitle1' style={{color: '#5A4628', fontWeight: 'bold', textAlign: 'center'}}>検索条件</Typography>
                </DialogActions>
                <Studio close={() => setOpen(false)} state={props.state}/>
            </Dialog>
            <h3 style={{textAlign: 'center'}}>
                検索結果
                <div style={{fontSize: 12}}>全{searchResult.total_pages}件</div>
            </h3>
            {
                searchResult.studios.map((row, index, array) => (
                    <Card style={{marginBottom: 24}}>
                        <CardActionArea>
                            <CardContent className={classes.card}>
                            <StudioTitle studio={row.studio_name}
                                         station={row.address.station.name}
                                         exit={row.address.exit.name}
                                         fromStation={row.address.minutes_from_station}/>
                                {
                                    row.rooms.map((room) =>
                                        <div  style={{padding: '0 8px'}}>
                                            <div className={classes.roomTop}>
                                                <RoomTitle room={room.room_name} floorArea={room.floor_area}/>
                                                <Button className={classes.btn}>詳細を見る {'>'}</Button>
                                            </div>
                                            <RoomContent roomImg={room.room_img}
                                                         minReserveMinutes={room.min_reserve_minutes}
                                                         slots={room.slots}/>
                                        </div>
                                    )
                                }
                                {
                                    row.room_count - row.rooms.length > 0 ?
                                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Typography component={'span'} variant={'caption'} style={{paddingRight: 12, fontWeight: 'bold'}}>
                                                他{row.room_count - row.rooms.length}部屋
                                            </Typography>
                                            <Button className={classes.btn}>詳細を見る {'>'}</Button>
                                        </div>
                                        :
                                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                            <Button className={classes.btn}>詳細を見る {'>'}</Button>
                                        </div>
                                }
                        </CardContent>
                        </CardActionArea>
                    </Card>
                ))
            }
        </div>
    )
}