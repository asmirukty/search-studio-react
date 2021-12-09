import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuTab from "../molecules/menuTab";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minHeight: '100vh',
            backgroundColor: '#F9F5F0',
            color: '#5A4628'
        },
        tabBar: {
            marginTop: 56,
            position: 'fixed'
        },
        tabs: {
            backgroundColor: '#F9F5F0',
            color: '#5A4628',
        },
        content: {
            paddingTop: 108
        }
}));

interface TopMenuTabProps {
    children: React.ReactNode[],
}

export default function TopMenuTab(props: TopMenuTabProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuTab labels={["スタジオ", "レッスン・練習会", "ナンバー・イベント"]}
                     barStyle={classes.tabBar}
                     tabStyle={classes.tabs}
                     contentStyle={classes.content}>
                {props.children}
            </MenuTab>
        </div>
    );
}
