import React from "react";
import {Box, Typography} from "@material-ui/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabPanel"
            hidden={value !== index}
            id={`simple-tabPanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}