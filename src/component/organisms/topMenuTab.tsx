import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuTab from "../molecules/menuTab";
import {useMedia} from "use-media";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minHeight: '100vh',
            backgroundColor: '#F9F5F0',
            color: '#5A4628',
            minWidth: 320
        },
        div: {
            minWidth: 320,
            position: 'sticky',
            top: 56,
        },
        tabBar: {
            minWidth: 320,
            position: 'sticky',
            top: 56,
            boxShadow: '0px .2px 8px rgba(0, 0, 0, .2)'
        },
        tabs: {
            backgroundColor: '#F9F5F0',
            color: '#5A4628',
            minHeight: 40,
        }
}));

interface TopMenuTabProps {
    children: React.ReactNode[],
}

export default function TopMenuTab(props: TopMenuTabProps) {
    const isSmall = useMedia({ maxWidth: "370px" });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuTab labels={["スタジオ", "レッスン・練習会", "ナンバー・イベント"]}
                     divStyle={classes.div}
                     barStyle={classes.tabBar}
                     tabsStyle={classes.tabs}
                     tabFontSize={isSmall ? 12 : 14} tabFlexGrow={1/3} tabMinHeight={isSmall ? 40 : 48}>
                {props.children}
            </MenuTab>
        </div>
    );
}
