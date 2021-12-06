import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import ImgCarousel from "../../atoms/imgCarousel";
import SlotTable from "../../molecules/slotTable";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        roomTop: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 8
        },
        btn: {
            color: '#5A4628',
            fontSize: 12,
            padding: '0px',
            margin: 0,
            fontWeight: 'bold',
            '&:hover': {
                borderBottom: '1px solid #5A4628'
            }
        }
    }))

interface RoomContentProps {
    room: string;
    floorArea: number;
    roomImg: {
        name: string,
        description: string,
        path :string,
    }[],
    minReserveMinutes: number;
    slots: {
        workload: number,
        time_begin: number,
        time_end: number,
        price: number,
        count: number,
    }[];
}

export default function ResultRoomContent(props: RoomContentProps) {
    const classes = useStyles();

    return (
        <div style={{padding: '0 8px'}}>
            <div className={classes.roomTop}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='subtitle1' style={{fontWeight: 'bold'}}>{props.room}</Typography>
                    <Typography variant='caption' style={{margin: '0px 8px'}}>⊿ {props.floorArea}m²</Typography>
                </div>
                <div className={classes.btn}>詳細を見る {'>'}</div>
            </div>
            <ImgCarousel img={props.roomImg}/>
            <SlotTable slots={props.slots} minReserveMinutes={props.minReserveMinutes}/>
        </div>
    )
}