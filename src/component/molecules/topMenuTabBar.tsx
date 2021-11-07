import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index: any) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tab-panel-${index}`,
    };
}

interface TabBarProps {
    labels: string[];
    barStyle: any;
    tabStyle: any;
    indicatorStyle: any;
    valueChange: (value: number) => void;
}

export default function TopMenuTabBar(props: TabBarProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        props.valueChange(newValue)
    };

    return (
            <AppBar className={props.barStyle}>
                <Tabs className={props.tabStyle}
                      TabIndicatorProps={props.indicatorStyle}
                      value={value} onChange={handleChange}>
                    {
                        props.labels.map((label, index) =>
                            <Tab label={label} {...a11yProps(index)}/>
                        )
                    }
                </Tabs>
            </AppBar>
    );
}
