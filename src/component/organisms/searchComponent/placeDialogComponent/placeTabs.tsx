import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuTabBar from "../../../molecules/menuTabBar";

const useStyles = makeStyles(()=>
    createStyles( {
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
        },
        tab: {
            flexGrow: 1
        }
}));

interface AreaTabsProps {
    area: React.ReactNode;
    line: React.ReactNode;
}

export default function PlaceTabs(props: AreaTabsProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuTabBar labels={["エリア", "沿線・駅"]}
                        barStyle={classes.appBar} tabStyle={classes.tabs}>
                {props.area}{props.line}
            </MenuTabBar>
        </div>
    );
}