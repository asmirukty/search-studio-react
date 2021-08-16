import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StudioPage from './studioPage'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: '#F9F5F0',
            color: '#5A4628'
        },
        tabs: {
            backgroundColor: '#F9F5F0',
            color: '#5A4628',
        }
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MenuTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs className={classes.tabs}
                      TabIndicatorProps={{style: {backgroundColor: '#1D356A'}}}
                      value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="スタジオ" {...a11yProps(0)} />
                    <Tab label="レッスン・練習会" {...a11yProps(1)} />
                    <Tab label="ナンバー・イベント" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <StudioPage/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                レッスン・練習会を探す
            </TabPanel>
            <TabPanel value={value} index={2}>
                ナンバー・イベントを探す
            </TabPanel>
        </div>
    );
}
