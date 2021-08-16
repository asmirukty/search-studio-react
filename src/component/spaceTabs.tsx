import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MinAreaSelect from "./minAreaSelect";
import MaxAreaSelect from "./maxAreaSelect";
import MinPeopleSelect from "./minPeopleSelect";
import MaxPeopleSelect from "./maxPeopleSelect";

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
                <Box p={3} style={{padding: 0}}>
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

const useStyles = makeStyles(() =>
    createStyles( {
        root: {
            flexGrow: 1,
            height: '100vh',
            backgroundColor: '#F9F5F0',
            color: "#5A4628"
        },
        tabs: {
            backgroundColor: '#F9F5F0',
            color: "#5A4628",
        },
        select: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            margin: '10px 2px'
        }
}));

export default function SpaceTabs() {
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
                    <Tab label="面積" {...a11yProps(0)} />
                    <Tab label="人数" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={classes.select}>
                    <MinAreaSelect/>
                    <p>~</p>
                    <MaxAreaSelect/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.select}>
                    <MinPeopleSelect/>
                    <p>~</p>
                    <MaxPeopleSelect/>
                </div>
            </TabPanel>
        </div>
    );
}