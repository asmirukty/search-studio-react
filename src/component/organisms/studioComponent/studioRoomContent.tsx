import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Chip, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {People} from "@material-ui/icons";
import ImgCarousel from "../../atoms/imgCarousel";
import SlotTable from "../../molecules/slotTable";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '24px',
            color: '#5A4628'
        },
        roomTop: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 4
        },
        people:{
            margin: '0px 8px',
            display: 'flex',
            alignItems: 'center'
        },
        floor: {
            border: '1px solid #D7D2C8',
            fontSize: 12,
            padding: 2,
            margin: '0 8px'
        },
        chip: {
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            marginRight: 4
        },
        reserveBtn: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            display: 'flex',
            margin: 'auto',
            padding: '6px 12px'
        }
    }))

type Room = {
            "room_name": string,
            "floor_area": number,
            "mirror_length": number,
            "min_people": number,
            "max_people": number,
            "room_img": {
                    "name": string,
                    "description": string,
                    "path": string
                }[],
            "free_cancel": boolean,
            "reservation": string[],
            "room_facilities": {
                    "name": string,
                    "count": number,
                    "price": number
                }[],
            "amenities": {
                    "name": string,
                    "count": number,
                    "price": number
                }[],
            "floor_material": string,
            "slots": {
                    "workload": number,
                    "time_begin": number,
                    "time_end": number,
                    "price": number,
                    "count": number
                }[],
            "min_reserve_minutes": number,
            "reserve_url": string
        }

export default function StudioRoomContent(props: {room: Room}) {
    const classes = useStyles();
    const {room} =props;

    return (
        <div className={classes.root}>
            <div className={classes.roomTop}>
                <Typography variant={'body1'} style={{fontWeight: 'bold'}}>{room.room_name}</Typography>
                <Typography variant='body2' style={{margin: '0px 8px'}}>⊿ {room.floor_area}m²</Typography>
                {
                    (room.min_people > 0 || room.max_people > 0) &&
                    <Typography variant='body2' className={classes.people}>
                        <People fontSize={'small'}/>
                        {room.min_people > 0 && room.min_people + '人'}~{room.max_people > 0 && room.max_people + '人'}
                    </Typography>
                }
                <div className={classes.floor}>{room.floor_material}</div>
            </div>
            {
                room.room_facilities.map((facility, index) => (
                    <Chip size="small" key={index} label={facility.name} className={classes.chip}/>
                ))
            }
            {
                room.amenities.map((amenity, index) => (
                    <Chip size="small" key={index} label={amenity.name} className={classes.chip}/>
                ))
            }
            <ImgCarousel img={room.room_img}/>
            <SlotTable slots={room.slots} minReserveMinutes={room.min_reserve_minutes}/>
            <div style={{display: 'flex'}}>
                <Button className={classes.reserveBtn}>
                    予約画面へ
                </Button>
            </div>
        </div>
    );
}