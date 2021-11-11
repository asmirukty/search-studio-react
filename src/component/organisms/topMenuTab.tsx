import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TabPanel from "./tabPanel";
import MenuTabBar from "../molecules/menuTabBar";

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
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <MenuTabBar labels={["スタジオ", "レッスン・練習会", "ナンバー・イベント"]}
                        barStyle={classes.tabBar}
                        tabStyle={classes.tabs}
                        valueChange={handleChange}
            />
            <div className={classes.content}>
                {
                    props.children.map((child,index) =>
                        <TabPanel value={value} index={index} key={index}>{child}</TabPanel>
                    )
                }
            </div>
        </div>
    );
}
