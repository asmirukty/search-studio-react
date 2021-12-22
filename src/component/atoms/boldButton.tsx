import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
    createStyles({
        dialogOk: {
            color: '#5A4628',
            fontWeight: 'bold',
            minWidth: 20,
            padding: '0 6px'
        }
    }));

export default function BoldButton(props: {label: any, onClick: () => void}) {
    const classes = useStyles();

    return (
        <Button onClick={props.onClick} className={classes.dialogOk}>
            {props.label}
        </Button>

    )
}