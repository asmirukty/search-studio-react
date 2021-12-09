import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            paddingTop: '16px',
            fontWeight: 'bold'
        }
    })
);

export default function StudioInfoTitle(props: {title: string}) {
    const classes = useStyles();

    return (
            <Typography variant={'body2'} className={classes.title}>
                {props.title}
            </Typography>
    );
}