import React from "react";
import {Card, CardContent, CardActionArea} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultStudioTitle from "../molecules/studioResultStudioTitle";
import RoomTop from "../molecules/roomTop";
import {Link} from 'react-router-dom';
import {Studio} from "../atoms/seachResultType";
import ImgCarousel from "../atoms/imgCarousel";
import SlotTable from "../molecules/slotTable";
import StudioResultCardDetail from "../atoms/studioResultCardDetail";
import RoomNumber from "../atoms/roomNumber";
import SlotTime from "../molecules/slotTime";

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            color: "#5A4628",
            padding: '12px 16px',
            '&:last-child': {
                paddingBottom: 12
            }
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
        },
        spaceBetween: {
            display: 'flex',
            justifyContent: 'space-between'
        }
    })
);

export default function StudioResultCard(props: {studio: Studio}) {
    const {studio} = props;
    const classes = useStyles();

    return (
        <Card style={{marginBottom: 24}}>
            <CardActionArea component={Link} to={{pathname: `/studios/${studio.studio_name}`}}>
                <CardContent className={classes.card}>
                    <StudioResultStudioTitle studio={studio.studio_name} station={studio.address.station.name}
                                             exit={studio.address.exit.name} fromStation={studio.address.minutes_from_station}/>
                    {
                        studio.rooms.map((room, index) =>
                            <div style={{padding: '0 8px'}}>
                                <RoomTop key={index} room={room.room_name} floorArea={room.floor_area}/>
                                <ImgCarousel img={room.room_img}/>
                                <SlotTable slots={room.slots}/>
                                <SlotTime minutes={room.min_reserve_minutes}/>
                            </div>
                        )
                    }
                    <div className={classes.spaceBetween}>
                        <RoomNumber count={studio.room_count - studio.rooms.length}/>
                        <StudioResultCardDetail/>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}