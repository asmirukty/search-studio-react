import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import {InputLabel, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NewDateSelect from "./newDateSelect";

const useStyles = makeStyles(() =>
    createStyles( {
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
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
        },
        dialogOk: {
            color: '#5A4628',
            fontSize: 14,
            fontWeight: 'bold',
            minWidth: 20,
            padding: '0 4px'
        },
        content: {
            color: "#5A4628",
            padding: '24px 24px 8px',
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        },
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            marginBottom: 12
        },
        formControl: {
            margin: 4,
            minWidth: 120,
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px'
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        label: {
            color: '#5A4628'
        },
        menuPaper: {
            maxHeight: 300
        }
    }));

interface DateDialogRawProps {
    classes: Record<'paper', string>;
    id: string;
    keepMounted: boolean;
    date: any;
    startTime: string;
    endTime: string;
    open: boolean;
    dateOnClose: (value?: any) => void;
    startTimeOnClose: (value?: any) => void;
    endTimeOnClose: (value?: any) => void;
    }

const startTimeOptions = [
    '0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30',
    '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30',
    '10:00', '10:30', '11:00', '11:30', '指定なし', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
];

const endTimeOptions = [
    '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30',
    '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30',
    '10:00', '10:30', '11:00', '11:30', '12:00', '指定なし', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',　'24:00'
];

export default function NewDateDialogRaw(props: DateDialogRawProps) {
    const classes = useStyles()
    const { dateOnClose, startTimeOnClose, endTimeOnClose,
        date: dateProp, startTime: startTimeProp, endTime: endTimeProp,
        open, ...other } = props;
    const [date, setDate] = React.useState<Date | null>(null);
    const [startTime, setStartTime] = React.useState('指定なし');
    const [endTime, setEndTime] = React.useState('指定なし');
   //const radioGroupRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        if (!open) {
            setDate(dateProp);
            setStartTime(startTimeProp);
            setEndTime(endTimeProp);
        }
    }, [dateProp, startTimeProp, endTimeProp, open]);

    //const handleEntering = () => {
    //    if (radioGroupRef.current != null) {
    //        radioGroupRef.current.focus();
    //    }};

    const handleCancel = () => {
        dateOnClose();
        startTimeOnClose();
        endTimeOnClose();
    };

    const handleOk = () => {
        dateOnClose(date);
        startTimeOnClose(startTime);
        endTimeOnClose(endTime);
    };

    const startTimeHandleChange = (event: any) : void => {
        setStartTime((event.target as HTMLInputElement).value);
        if (date === null) {
            setDate(new Date())
        }
    };

    const endTimeHandleChange = (event: any) : void => {
        setEndTime((event.target as HTMLInputElement).value);
        if (date === null) {
            setDate(new Date())
        }
    };

    const dateHandleClose = (newDate?: any) => {
        if (newDate) {
            setDate(newDate)
        }
    };

    return (
        <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}}
               // onEntering={handleEntering}
            aria-labelledby="confirmation-dialog-title"
            open={open}
            {...other}
        >
            <DialogActions className={classes.dialogBtn}>
                <Button autoFocus onClick={handleCancel} className={classes.dialogClose}>
                    <Close fontSize='small'/>
                </Button>
                <Button onClick={handleOk} className={classes.dialogOk}>
                    決定
                </Button>
            </DialogActions>
            <DialogContent className={classes.content}>
                <Typography className={classes.typ} variant={'subtitle1'}>日時</Typography>
                <NewDateSelect date={date} dateOnClose={dateHandleClose}/>
                <div className={classes.select}>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.label}>開始時間</InputLabel>
                        <Select
                            //ref={radioGroupRef}
                            value={startTime}
                            onChange={startTimeHandleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {startTimeOptions.map((option: any) => (
                                <MenuItem value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                        </FormControl>
                    <p>~</p>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.label}>終了時間</InputLabel>
                        <Select
                            //ref={radioGroupRef}
                                value={endTime}
                                onChange={endTimeHandleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {endTimeOptions.map((option: any) => (
                                <MenuItem value={option}>{option}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

            </DialogContent>

        </Dialog>
    );
}

