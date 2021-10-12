import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import React from "react";
import NewDateDialogRaw from "./newDateDialogRaw";
import Button from "@material-ui/core/Button";
import MuiChip from "@material-ui/core/Chip";
import DateMatchRadio from "./dateMatchRadio";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

const useStyles = makeStyles(() =>
    createStyles({
        right: {
            textAlign: 'right'
        },
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        detailBtn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '3px 4px',
            margin: '0 0 8px',
        },
        paper: {
            margin: 12,
            flexGrow: 1
        },
        span: {
            display: 'inline'
        }
    }),
);

interface SpaceDialogProps {
    children?: React.ReactNode;
    label: string;
    btn: string;
    addDate: (value?: any) => void;
}

export default function NewDateDialog(props: SpaceDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const dateHandleClose = (newDate?: any) => {
        setOpen(false);

        if (newDate) {
            setDate(newDate);
            props.addDate(newDate)
        }
    };

    const handleDateDelete = () => {
        setDate('');
        props.addDate()
    }

    return (
        <div>
            {props.btn === 'btn' && (
                <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                    {date === '' && (props.label) }
                    {date !== '' &&
                    (<Chip size="small" label={date} onDelete={handleDateDelete}/>)}
                </Button>
                )}
            {props.btn === 'detailBtn' && (
                <div className={classes.right}>
                    <Button className={classes.detailBtn} onClick={handleClickOpen}>
                        {props.label}
                    </Button>
                </div>
            )}
                <NewDateDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    dateOnClose={dateHandleClose}
                    date={date}
                />
            {date !== '' && <DateMatchRadio/>}
        </div>
    );
}