import React from 'react';
import {Typography} from "@material-ui/core";

export default function StudioResultSearchCardTitle() {
    return (
        <Typography component={'span'}  variant='subtitle2' style={{fontWeight: 'bold'}}>
            検索条件
        </Typography>
    );
}