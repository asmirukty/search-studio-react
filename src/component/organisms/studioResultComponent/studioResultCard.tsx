import React from "react";
import {Card, CardContent, Typography, CardActionArea,} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioTitle from "./studioTitle";
import RoomContent from "./roomContent";
import {Link} from 'react-router-dom';
import {Studio} from "./seachResultType";

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
        },
        fontBold: {
            paddingRight: 12,
            fontWeight: 'bold'
        }
    }))

export default function StudioResultCard(props: {studio: Studio}) {
    const {studio} = props;
    const classes = useStyles();

    return (
        <Card style={{marginBottom: 24}}>
            <CardActionArea component={Link} to={{pathname: `/studio_page/${studio.studio_name}`}}>
                <CardContent className={classes.card}>
                    <StudioTitle studio={studio.studio_name} station={studio.address.station.name}
                                 exit={studio.address.exit.name} fromStation={studio.address.minutes_from_station}/>
                    {
                        studio.rooms.map((room, index) =>
                            <RoomContent key={index} room={room.room_name} floorArea={room.floor_area}
                                         roomImg={room.room_img} minReserveMinutes={room.min_reserve_minutes} slots={room.slots}/>
                        )
                    }
                    <div className={classes.spaceBetween}>
                        <Typography component={'span'} variant={'caption'} className={classes.fontBold}>
                            {
                                studio.room_count - studio.rooms.length > 0 ?
                                    `他${studio.room_count - studio.rooms.length}部屋` : null
                            }
                        </Typography>
                        <div className={classes.btn}>詳細を見る {'>'}</div>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}