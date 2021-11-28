import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuTabBar from "../../molecules/menuTabBar";
import AreaAccordion from "./areaAccordion";
import LineAccordion from "./lineAccordion";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: '#F9F5F0',
            flexGrow: 1,
            height: '80vh',
            color: "#5A4628",
        },
        appBar: {
            borderColor: "#5A4628",
            position: 'static'
        },
        tabs: {
            borderColor: "#5A4628",
            backgroundColor: '#F9F5F0',
            color: "#5A4628",
        }
    }));

export default function NewPlaceDialogContent() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MenuTabBar labels={["エリア", "沿線・駅"]} barStyle={classes.appBar} tabStyle={classes.tabs}>
                <AreaAccordion/>
                <LineAccordion/>
            </MenuTabBar>
        </div>
    )
}