import React from 'react';
import {AppBar, Paper, Tab, Tabs} from "@material-ui/core";
import TabPanel from "../atoms/tabPanel";

function a11yProps(index: any) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tab-panel-${index}`,
    };
}

interface TabBarProps {
    labels: string[];
    divStyle?: any;
    barStyle?: any;
    tabStyle?: any;
    paperStyle?: any;
    contentStyle?: any;
    children: React.ReactNode[]
}

export default function MenuTabBar(props: TabBarProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={props.divStyle}>
            <AppBar className={props.barStyle}>
                <Tabs className={props.tabStyle}
                      TabIndicatorProps={{style: {backgroundColor: '#1D356A'}}}
                      value={value} onChange={handleChange}>
                    {
                        props.labels.map((label, index) =>
                            <Tab label={label} key={index} {...a11yProps(index)} style={{flexGrow: 1}}/>
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
