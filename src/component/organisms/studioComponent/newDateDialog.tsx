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
}

export default function NewDateDialog(props: SpaceDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | null>(null);
    const [startTime, setStartTime] = React.useState('指定なし');
    const [endTime, setEndTime] = React.useState('指定なし');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const dateHandleClose = (newDate?: any) => {
        setOpen(false);

        if (newDate) {
            setDate(newDate);
        }
    };
    const startTimeHandleClose = (newStartTime?: string) => {
        setOpen(false);

        if (newStartTime) {
            setStartTime(newStartTime);
        }
    };

    const endTimeHandleClose = (newEndTime?: string) => {
        setOpen(false);

        if (newEndTime) {
            setEndTime(newEndTime);
        }
    };

    const handleDateDelete = () => {
        setDate(null);
        setStartTime('指定なし');
        setEndTime('指定なし');
    }

    const dayString = (date: Date) => {
        if (date.getDay() === 0){ return '日'}
        if (date.getDay() === 1){ return '月'}
        if (date.getDay() === 2){ return '火'}
        if (date.getDay() === 3){ return '水'}
        if (date.getDay() === 4){ return '木'}
        if (date.getDay() === 5){ return '金'}
        if (date.getDay() === 6){ return '土'}
    }

    return (
        <div>
            {props.btn === 'btn' && (
                <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                    {date === null && startTime === '指定なし' && endTime === '指定なし' && (props.label) }
                    {date !== null && startTime === '指定なし' && endTime === '指定なし' &&
                    (<Chip size="small" label={<span>{date.getMonth()+1}/{date.getDate()}({dayString(date)})</span>} onDelete={handleDateDelete}/>)}
                    {date !== null && startTime === '指定なし' && endTime !== '指定なし' &&
                        (<Chip size="small" label={<span>{date.getMonth()+1}/{date.getDate()}({dayString(date)}) ~{endTime}</span>} onDelete={handleDateDelete}/>)}
                    {date !== null && startTime !== '指定なし' && endTime === '指定なし' &&
                    (<Chip size="small" label={<span>{date.getMonth()+1}/{date.getDate()}({dayString(date)}) {startTime}~</span>} onDelete={handleDateDelete}/>)}
                    {date !== null && startTime !== '指定なし' && endTime !== '指定なし' &&
                    (<Chip size="small" label={<span>{date.getMonth()+1}/{date.getDate()}({dayString(date)}) {startTime}~{endTime}</span>} onDelete={handleDateDelete}/>)}
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
                    startTimeOnClose={startTimeHandleClose}
                    endTimeOnClose={endTimeHandleClose}
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                />
            {!(date === null && startTime === '指定なし' && endTime === '指定なし') &&
            <DateMatchRadio/>}
        </div>
    );
}