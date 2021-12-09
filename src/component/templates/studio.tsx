import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuTab from "../molecules/menuTab";
import ImgCarousel from "../atoms/imgCarousel";
import StudioRoomContent from "../organisms/studioRoomContent";
import StudioInfo from "../organisms/studioInfo";
import {studio} from "../atoms/studioData";
import StudioTitle from "../atoms/studioTitle";

const useStyles = makeStyles(() =>
    createStyles({
        img: {
            margin: 16,
            position: 'sticky',
            top: 100
        },
        root: {
            flexGrow: 1,
            minHeight: '100vh',
            color: '#5A4628',
        },
        tabBar: {
            position: "sticky",
            top: 200,
        },
        tabs: {
            backgroundColor: '#FFF',
            color: '#5A4628',
        },
        paper: {
            minHeight: 580,
            maxHeight: 580,
            overflow: 'scroll',
        }
    }))

export default function Studio() {
    const classes = useStyles();

    return (
        <div>
            <StudioTitle studio={studio.studio_name}/>
            <div className={classes.img}>
                <ImgCarousel img={studio.studio_img}/>
            </div>
            <div className={classes.root}>
                <MenuTab labels={["空き部屋", "スタジオ情報"]} divStyle={classes.tabBar} barStyle={classes.tabBar}
                         tabStyle={classes.tabs} paperStyle={classes.paper}>
                    {
                        studio.rooms.map((room,index) =>
                            <StudioRoomContent room={room} key={index}/>
                        )
                    }
                    <StudioInfo intro={studio.studio_introduction} facilities={studio.studio_facilities}
                                address={studio.address} precaution={studio.studio_precaution} url={studio.homepage_url}/>
                </MenuTab>
            </div>
        </div>
    );
}