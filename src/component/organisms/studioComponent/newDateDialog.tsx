import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import React from "react";
import NewDateDialogRaw from "./newDateDialogRaw";
import Button from "@material-ui/core/Button";
import MuiChip from "@material-ui/core/Chip";
import DateMatchRadio from "./dateMatchRadio";
import DateTimeConvert from "../dateTimeConvert";

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
    addDate: (value?: any[]) => void;
}

export default function NewDateDialog(props: SpaceDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<any[]>([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const dateHandleClose = (newDate?: {date: Date, startTime: string, endTime: string}[]) => {
        setOpen(false);

        if (newDate) {
            newDate.sort(function(a,b) {
                if (a.date.getFullYear() > b.date.getFullYear()) {
                    return -1
                }
                if (a.date.getFullYear() < b.date.getFullYear()) {
                    return 1
                }
                // yearが同じの時
                if (a.date.getMonth() > b.date.getMonth()) {
                    return -1
                }
                if (a.date.getMonth() < b.date.getMonth()) {
                    return 1
                }
                // monthが同じの時
                if (a.date.getDate() > b.date.getDate()) {
                    return -1
                }
                if (a.date.getDate() < b.date.getDate()) {
                    return 1
                }
                // dateが同じの時
                if (a.startTime > b.startTime) {
                    return -1
                }
                if (a.startTime < b.startTime) {
                    return 1
                }
                //startTimeが同じ時
                if (a.endTime < b.endTime) {
                    return -1
                }
                if (a.endTime < b.endTime) {
                    return 1
                }
                return 0
            })
            setDate(newDate);
            conlose.log(newDate)
            props.addDate(newDate)
        }
    };

    const handleDateDelete = () => {
        setDate([]);
        props.addDate()
    }

    return (
        <div>
            <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                {
                    date.length === 0 ? (props.label) :
                    date.map((date: {date: Date, startTime: string, endTime: string}) => (
                        <Chip size="small" label={DateTimeConvert({date: date.date, startTime: date.startTime, endTime: date.endTime})} onDelete={handleDateDelete}/>
                    ))
                }
            </Button>
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
            {date.length > 0 && <DateMatchRadio/>}
        </div>
    );
}