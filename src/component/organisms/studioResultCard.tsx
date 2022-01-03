import React from "react";
import {Card, CardContent, CardActionArea} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultCardTop from "../molecules/studioResultCardTop";
import RoomTop from "../molecules/roomTop";
import {Link} from 'react-router-dom';
import {StudioType} from "../seachResultType";
import ImgCarousel from "../atoms/imgCarousel";
import SlotTable from "../molecules/slotTable";
import StudioResultCardDetail from "../atoms/studioResultCardDetail";
import SlotTime from "../molecules/slotTime";
import SmallTypography from "../atoms/smallTypography";

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            color: "#5A4628",
            padding: '12px 20px',
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

interface StudioResultCardProps {
    studio: StudioType,
    search: string,
    isWide: boolean
}

export default function StudioResultCard(props: StudioResultCardProps) {
    const {studio} = props;
    const classes = useStyles();

    const restRoom = studio.room_count - studio.rooms.length

    return (
        <Card style={props.isWide ? {boxShadow: 'none', minWidth: 420, maxWidth: 800, margin: '12px auto'} : {boxShadow: 'none', minWidth: 250, maxWidth: 600, margin: '12px auto'}}>
            <CardActionArea component={Link} to={{pathname: `/studios/${studio.studio_name}${props.search}&studio_id=${studio.studio_id}`}}>
                <CardContent className={classes.card}>
                    <StudioResultCardTop studio={studio.studio_name} station={studio.address.station.name}
                                         exit={studio.address.exit.name} fromStation={studio.address.minutes_from_station}/>
                    {
                        studio.rooms.map((room, index) =>
                            <div key={index} style={{padding: '8px 0'}}>
                                <RoomTop room={room.room_name} floorArea={room.floor_area}/>
                                <ImgCarousel img={room.room_img}/>
                                <SlotTable slots={room.slots}/>
                                <SlotTime minutes={room.min_reserve_minutes}/>
                            </div>
                        )
                    }
                    <div className={classes.spaceBetween}>
                        <SmallTypography bold>{restRoom > 0 ? `他${restRoom}部屋` : null}</SmallTypography>
                        <StudioResultCardDetail/>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}