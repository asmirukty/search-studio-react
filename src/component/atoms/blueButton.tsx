import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface BlueButtonProps{
    children: any,
    fontSize?: number,
    padding?: any,
    margin?: any,
    onClick?: () => void,
    disabled?: boolean,
    component?: any,
    to?: any
}

export default function BlueButton(props: BlueButtonProps) {
    const useStyles = makeStyles(() =>
        createStyles({
            btn: {
                fontSize: props.fontSize,
                padding: props.padding,
                margin: props.margin,
                minWidth: 48,
                width: 'fit-content',
                display: 'flex',
                fontWeight: 'bold',
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                '&.Mui-disabled': {
                    color: '#F9F5F0',
                    opacity: .6
                },
                '&:hover': {
                    color: '#F9F5F0',
                    backgroundColor: '#1D356A',
                    opacity: .8
                }
            }
        })
    );

    const classes = useStyles();

    return (
        <Button className={classes.btn} onClick={props.onClick}
                disabled={props.disabled} component={props.component} to={props.to}>
            {props.children}
        </Button>
    );
}