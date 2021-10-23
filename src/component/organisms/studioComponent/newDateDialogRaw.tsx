import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import {Typography} from "@material-ui/core";
import NewDateSelect from "./newDateSelect";
import DateTimeConvert from "../dateTimeConvert";

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
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset',

        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        }
    }));

interface DateDialogRawProps {
    classes: Record<'paper', string>;
    id: string;
    keepMounted: boolean;
    date: any;
    open: boolean;
    dateOnClose: (value?: any[]) => void;
    }

export default function NewDateDialogRaw(props: DateDialogRawProps) {
    const classes = useStyles()
    const { dateOnClose, date: dateProp, open, ...other } = props;
    const [dateA, setDateA] = React.useState<any>();
    const [dateB, setDateB] = React.useState<any>();
    const [dateC, setDateC] = React.useState<any>();
    const [dateD, setDateD] = React.useState<any>();
    const [dateE, setDateE] = React.useState<any>();

    React.useEffect(() => {
        if (!open) {
            if (dateProp === '') {
                setDateA(null)
            }
        }
    }, [dateProp, open]);

    const handleCancel = () => {
        dateOnClose();
    };

    const handleOk = () => {
        if (dateA) {
            dateOnClose([dateA, dateB, dateC, dateD, dateE]);
        }
        else {
            dateOnClose();
        }
    };

    const dateChangeA = (newDate: Date, newStartTime: string, newEndTime: string) => {
        setDateA({date: newDate, startTime: newStartTime, endTime: newEndTime})
    };

    const dateChangeB = (newDate: Date, newStartTime: string, newEndTime: string) => {
        setDateB({date: newDate, startTime: newStartTime, endTime: newEndTime})
    };

    const dateChangeC = (newDate: Date, newStartTime: string, newEndTime: string) => {
        setDateC({date: newDate, startTime: newStartTime, endTime: newEndTime})
    };

    const dateChangeD = (newDate: Date, newStartTime: string, newEndTime: string) => {
        setDateD({date: newDate, startTime: newStartTime, endTime: newEndTime})
    };

    const dateChangeE = (newDate: Date, newStartTime: string, newEndTime: string) => {
        setDateE({date: newDate, startTime: newStartTime, endTime: newEndTime})
    };
    return (
        <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}}
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
                <NewDateSelect date={dateA} dateChange={dateChangeA}/>
                <NewDateSelect date={dateB} dateChange={dateChangeB}/>
                <NewDateSelect date={dateC} dateChange={dateChangeC}/>
                <NewDateSelect date={dateD} dateChange={dateChangeD}/>
                <NewDateSelect date={dateE} dateChange={dateChangeE}/>
            </DialogContent>

        </Dialog>
    );
}

