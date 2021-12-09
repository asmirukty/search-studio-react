import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            paddingLeft: '12px'
        }
    })
);

export default function StudioInfoContent(props: {content: string}) {
    const classes = useStyles();

    return (
        <Typography variant={'body2'} className={classes.content}>
            {props.content}
        </Typography>
    );
}