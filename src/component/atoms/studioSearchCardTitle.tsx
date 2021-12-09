import React from 'react';
import {Typography} from "@material-ui/core";

export default function StudioSearchCardTitle(props: { label: string }) {
    return (
        <Typography component={'span'} variant='subtitle1' style={{color: "#5A4628"}}>
            {props.label}
        </Typography>
    );
}