import React, {useState} from 'react';
import {AppBar, Paper, Tab, Tabs} from "@material-ui/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabPanel" hidden={value !== index} id={`tabPanel${index}`} aria-labelledby={`tab${index}`} {...other}>
            {value === index && children}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `tab${index}`,
        'aria-controls': `tabPanel${index}`,
    };
}

interface TabBarProps {
    labels: string[];
    divStyle?: any;
    barStyle?: any;
    tabsStyle?: any;
    tabFontSize?: number;
    tabFlexGrow: number;
    tabMinHeight: number;
    paperStyle?: any;
    contentStyle?: any;
    children: React.ReactNode[];
}

export default function MenuTab(props: TabBarProps) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={props.divStyle}>
            <AppBar className={props.barStyle}>
                <Tabs className={props.tabsStyle}
                      TabIndicatorProps={{style: {backgroundColor: '#1D356A'}}}
                      value={value} onChange={handleChange} aria-label="menuTabs">
                    {
                        props.labels.map((label, index) =>
                            <Tab label={label} key={index} {...a11yProps(index)} wrapped
                                 style={{fontSize: props.tabFontSize, flexGrow: props.tabFlexGrow, minHeight: props.tabMinHeight,
                                     fontWeight: 'bold', padding: 6, maxWidth: 600}}/>
                        )
                    }
                </Tabs>
            </AppBar>
            {
                props.paperStyle ?
                    <Paper className={props.paperStyle}>
                        {
                            props.children.map((child, index) =>
                                <TabPanel value={value} index={index} key={index}>{child}</TabPanel>
                            )
                        }
                    </Paper>
                    :
                    <div className={props.contentStyle}>
                        {
                            props.children.map((child,index) =>
                            <TabPanel value={value} index={index} key={index}>{child}</TabPanel>
                            )
                        }
                    </div>
            }
        </div>
    );
}
