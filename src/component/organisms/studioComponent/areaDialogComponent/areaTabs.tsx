import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "../../tabPanel";

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

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
interface AreaTabsProps {
    area: any;
    line: any;
}

export default function AreaTabs(props: AreaTabsProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Tabs className={classes.tabs}
                      TabIndicatorProps={{style: {backgroundColor: '#1D356A'}}}
                      value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="エリア" {...a11yProps(0)} className={classes.tab}/>
                    <Tab label="沿線・駅" {...a11yProps(1)} className={classes.tab}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {props.area}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {props.line}
            </TabPanel>
        </div>
    );
}