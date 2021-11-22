import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
        }
    }));

export default function DialogCloseButton(props: { close: () => void }) {
    const classes = useStyles()

    return (
        <Button autoFocus onClick={props.close} className={classes.dialogClose}>
            <Close fontSize='small'/>
        </Button>

    )
}