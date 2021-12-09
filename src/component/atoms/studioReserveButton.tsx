import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
    createStyles({
        reserveBtn: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            display: 'flex',
            margin: 'auto',
            padding: '6px 12px'
        }
    })
);

export default function StudioReserveButton() {
    const classes = useStyles();

    return (
        <Button className={classes.reserveBtn}>
            予約画面へ
        </Button>
    );
}