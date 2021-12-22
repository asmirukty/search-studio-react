import React from "react";
import StudioSearchButton from "../atoms/studioSearchButton";
import StudioPlace from "../molecules/studioPlace";
import StudioSpace from "../molecules/studioSpace";
import StudioDate from "../molecules/studioDate";
import StudioDetail from "../molecules/studioDetail";
import {Paper} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import PlaceDialog from "./placeDialog";
import SpaceDialog from "./spaceDialog";
import DateDialog from "./dateDialog";
import DetailDialog from "./detailDialog";

const useStyles = makeStyles(() =>
    createStyles({
        widePaper: {
            color: "#5A4628",
            minWidth: 520,
            maxWidth: 800,
            margin: 'auto',
            padding: '20px 24px 24px'
        },
        paper: {
            color: "#5A4628",
            boxShadow:'4px 4px 4px #F9F5F0',
            minWidth: 200,
            maxWidth: 400,
            margin: 'auto',
            padding: '16px 16px 20px'
        },
        spaceDateWrap: {
            display: 'flex',
            marginBottom: 8
        },
        btnWrap: {
            margin: '8px auto 0',
            width: 'fit-content'
        },
        none: {}
    })
);

export default function StudioSearchPaper(props: {isWide?: boolean}) {
    const classes = useStyles();
    const {isWide} = props;

    return (
            <Paper elevation={0} className={isWide ? classes.widePaper : classes.paper}>
                <StudioPlace isWide={isWide}/>
                <div className={isWide ? classes.spaceDateWrap : classes.none}>
                    <StudioSpace isWide={isWide}/>
                    <StudioDate isWide={isWide}/>
                </div>
                <StudioDetail isWide={isWide}/>
                <div className={classes.btnWrap}>
                    <StudioSearchButton/>
                </div>
                <PlaceDialog/>
                <SpaceDialog/>
                <DateDialog/>
                <DetailDialog/>
            </Paper>
    );
}