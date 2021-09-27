import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./tabPanel";
import Studio from './studio'
import StudioResult from "./studioResult";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            height: '100vh',
            backgroundColor: '#F9F5F0',
            color: '#5A4628'
        },
        appbar: {
          marginTop: 56
        },
        tabs: {
            backgroundColor: '#F9F5F0',
            color: '#5A4628',
        },
        content: {
            paddingTop: 104
        }
}));

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface MenuTabsProps {
    page: string
}

export default function MenuTabs(props: MenuTabsProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Tabs className={classes.tabs}
                      TabIndicatorProps={{style: {backgroundColor: '#1D356A'}}}
                      value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="スタジオ" {...a11yProps(0)} />
                    <Tab label="レッスン・練習会" {...a11yProps(1)} />
                    <Tab label="ナンバー・イベント" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <div className={classes.content}>
                <TabPanel value={value} index={0}>
                    {props.page == 'search' && <Studio/>}
                    {props.page == 'result' && <StudioResult/>}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    レッスン・練習会を探す
                </TabPanel>
                <TabPanel value={value} index={2}>
                    ナンバー・イベントを探す
                </TabPanel>
            </div>
        </div>
    );
}
