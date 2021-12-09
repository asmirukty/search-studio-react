import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        btnChip: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
            justifyContent: 'start',
            padding: '0 5px'
        }
    })
);

interface StudioSearchCardButtonProps {
    dialogOpen: () => void;
    label: string;
    chipDisplay: boolean;
    children: React.ReactNode;
}

export default function StudioSearchCardButton(props: StudioSearchCardButtonProps) {
    const classes = useStyles();

    return (
        <div>
            {
                props.chipDisplay ?
                    <Button fullWidth variant="outlined" className={classes.btnChip} onClick={props.dialogOpen}>
                        {props.children}
                    </Button>
                    :
                    <Button fullWidth variant="outlined" className={classes.btn} onClick={props.dialogOpen}>
                        {props.label}
                    </Button>
            }
        </div>
    );
}