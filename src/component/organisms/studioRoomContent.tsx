import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import ImgCarousel from "../atoms/imgCarousel";
import SlotTable from "../molecules/slotTable";
import SlotTime from "../molecules/slotTime";
import StudioRoomContentTop from "../molecules/studioRoomContentTop";
import ResultChip from "../atoms/resultChip";
import StudioReserveButton from "../atoms/studioReserveButton";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: '24px',
            color: '#5A4628'
        },
        flex: {
            display: 'flex'
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
            <StudioRoomContentTop name={room.room_name} area={room.floor_area}
                                  minPeople={room.min_people} maxPeople={room.max_people} floor={room.floor_material}/>
            <div className={classes.flex}>
                {
                    room.room_facilities.map((facility, index) => (
                        <ResultChip key={index} label={facility.name}/>
                    ))
                }
                {
                    room.amenities.map((amenity, index) => (
                        <ResultChip key={index} label={amenity.name}/>
                    ))
                }
            </div>
            <ImgCarousel img={room.room_img}/>
            <SlotTable slots={room.slots}/>
            <SlotTime minutes={room.min_reserve_minutes}/>
            <div className={classes.flex}>
                <StudioReserveButton/>
            </div>
        </div>
    );
}