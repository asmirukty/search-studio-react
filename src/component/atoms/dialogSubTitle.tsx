import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            paddingTop: 12
        }
    })
);

export default function DialogSubTitle(props: {title: string}) {
    const classes = useStyles();

    return (
        <Typography className={classes.typ} variant={'subtitle2'}>
            {props.title}
        </Typography>
    );
}