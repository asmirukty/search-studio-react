import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuTabBar from "../molecules/menuTabBar";
import ImgCarousel from "../atoms/imgCarousel";
import StudioRoomContent from "./studioComponent/studioRoomContent";
import StudioInfo from "./studioComponent/studioInfo";
import {studio} from "./studioComponent/studioData";

const useStyles = makeStyles(() =>
    createStyles({
        studio: {
            position: 'sticky',
            top: 120,
            zIndex: 1000,
            margin: 16
        },
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
            <h3 className={classes.studio}>{studio.studio_name}</h3>
            <div className={classes.img}>
                <ImgCarousel img={studio.studio_img}/>
            </div>
            <div className={classes.root}>
                <MenuTabBar labels={["空き部屋", "スタジオ情報"]} divStyle={classes.tabBar} barStyle={classes.tabBar}
                            tabStyle={classes.tabs} paperStyle={classes.paper}>
                    {
                        studio.rooms.map((room,index) =>
                            <StudioRoomContent room={room} key={index}/>
                        )
                    }
                    <StudioInfo intro={studio.studio_introduction} facilities={studio.studio_facilities}
                                address={studio.address} precaution={studio.studio_precaution} url={studio.homepage_url}/>
                </MenuTabBar>
            </div>
        </div>
    );
}