import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            borderColor: '#D7D2C8',
            color: '#5A4628',
            fontSize: '14px',
            padding: 0,
            margin: 4
        }
    }));

interface SearchOutlineButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean
}

export default function SearchOutlineButton(props: SearchOutlineButtonProps) {
    const classes = useStyles();

    return (
        <Button onClick={props.onClick} disabled={props.disabled} className={classes.btn} variant="outlined">
            {props.label}
        </Button>
    )
}