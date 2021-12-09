import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
    createStyles({
        dialogOk: {
            color: '#5A4628',
            fontSize: 14,
            fontWeight: 'bold',
            minWidth: 20,
            padding: '0 4px'
        }
    }));

export default function DialogOkButton(props: { onClick: () => void }) {
    const classes = useStyles()

    return (
        <Button autoFocus onClick={props.onClick} className={classes.dialogOk}>
            決定
        </Button>

    )
}