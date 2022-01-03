import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuTab from "../molecules/menuTab";

const useStyles = makeStyles(() =>
    createStyles({
        tabs: {
            backgroundColor: '#FFF',
            color: '#5A4628',
            minHeight: 40
        },
        content: {
            color: '#5A4628',
            backgroundColor: '#FFF',
        }
    }))

interface StudioMenuTabProps {
    barTop: number,
    children: React.ReactNode[];
}

export default function StudioMenuTab(props: StudioMenuTabProps) {
    const classes = useStyles();

    return (
        <MenuTab labels={["部屋", "スタジオ情報"]}
                 barSStyle={{position: "sticky", top: props.barTop}}
                 tabsStyle={classes.tabs} contentStyle={classes.content}
                 tabFlexGrow={.5} tabMinHeight={44} tabFontSize={14}>
            {props.children}
        </MenuTab>
    );
}