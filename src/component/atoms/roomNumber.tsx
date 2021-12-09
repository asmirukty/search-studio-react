import React from "react";
import {Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        fontBold: {
            paddingRight: 12,
            fontWeight: 'bold'
        }
    })
);

export default function RoomNumber(props: {count: number}) {
    const classes = useStyles();

    return (
        <Typography component={'span'} variant={'caption'} className={classes.fontBold}>
            {props.count > 0 ? `他${props.count}部屋` : null}
        </Typography>
    );
}