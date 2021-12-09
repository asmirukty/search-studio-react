import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            color: '#5A4628',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }))

export default function StudioResultDialogTitle() {
    const classes = useStyles();

    return (
        <Typography variant='subtitle1' className={classes.title}>
            検索条件
        </Typography>
    );
}