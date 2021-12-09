import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            color: '#5A4628',
            fontSize: 12,
            padding: '0px',
            margin: 0,
            fontWeight: 'bold',
            '&:hover': {
                borderBottom: '1px solid #5A4628'
            }
        }
    })
);

export default function StudioResultCardDetail() {
    const classes = useStyles();

    return (
        <Typography className={classes.btn}>詳細を見る {'>'}</Typography>
    );
}