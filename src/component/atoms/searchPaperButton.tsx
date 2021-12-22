import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            backgroundColor: '#fff',
            margin: '0 2%',
            width: '96%',
        },
        btnChip: {
            borderColor: '#D7D2C8',
            backgroundColor: '#fff',
            justifyContent: 'start',
            padding: '0 4px',
            margin: '0 2%',
            width: '96%',
        },
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 4
        }
    })
);

interface SearchCardButtonProps {
    dialogOpen: () => void;
    label: string;
    chipDisplay: boolean;
    children: React.ReactNode;
}

export default function SearchPaperButton(props: SearchCardButtonProps) {
    const classes = useStyles();

    return (
        <Button variant="outlined" className={props.chipDisplay ? classes.btnChip : classes.btn}
                onClick={props.dialogOpen}>
            {
                props.chipDisplay ?
                    <div className={classes.wrapChip}>{props.children}</div>
                    : props.label + 'を選択'
            }
        </Button>
    );
}