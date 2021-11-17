import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import NewDateSelect from "./newDateSelect";

const useStyles = makeStyles(() =>
    createStyles( {
        right: {
            textAlign: 'right'
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
        },
        addBtn: {
            borderColor: '#D7D2C8',
            color: '#5A4628',
            fontSize: '14px',
            padding: 0,
            margin: 4
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
    const [date, setDate] = React.useState<any[]>([]);
    const [openB, setOpenB] = React.useState(false);
    const [openC, setOpenC] = React.useState(false);
    const [openD, setOpenD] = React.useState(false);
    const [openE, setOpenE] = React.useState(false);

    React.useEffect(() => {
        if (!open) {
            setDate(dateProp)
            !dateProp[1] && setOpenB(false)
            !dateProp[2] && setOpenC(false)
            !dateProp[3] && setOpenD(false)
            !dateProp[4] && setOpenE(false)
        }
    }, [dateProp, open]);

    const handleCancel = () => {
        dateOnClose();
    };

    const handleOk = () => {
        dateOnClose(date);
    };

    const dateChange = (index: number) => (newDate: { date: Date, startTime: string, endTime: string }|null) => {
        if (newDate !== null) {
            date.length > index ?
                setDate(prevState => (
                    prevState.splice(index, index, newDate)
                ))
                :
                setDate(prevState => [...prevState, newDate])
        }
        else {
            setDate(prevState => (
                prevState.filter((element, idx) => idx !== index)
            ))
            date.length < 6 && setOpenE(false)
            date.length < 5 && setOpenD(false)
            date.length < 4 && setOpenC(false)
            date.length < 3 && setOpenB(false)
        }
    };

    const addDate = (index: number) => () => {
        index === 0 && setOpenB(true)
        index === 1 && setOpenC(true)
        index === 2 && setOpenD(true)
        index === 3 && setOpenE(true)
    }

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
                <NewDateSelect open={open} date={date[0]} label={'日時1'} dateChange={dateChange(0)} addBtn={!openB} addDate={addDate(0)}/>
                {openB && <NewDateSelect open={open} date={date[1]} label={'日時2'} dateChange={dateChange(1)} addBtn={!openC} addDate={addDate(1)}/>}
                {openC && <NewDateSelect open={open} date={date[2]} label={'日時3'} dateChange={dateChange(2)} addBtn={!openD} addDate={addDate(2)}/>}
                {openD && <NewDateSelect open={open} date={date[3]} label={'日時4'} dateChange={dateChange(3)} addBtn={!openE} addDate={addDate(3)}/>}
                {openE && <NewDateSelect open={open} date={date[4]} label={'日時5'} dateChange={dateChange(4)} addBtn={false} last addDate={addDate(4)}/>}
            </DialogContent>

        </Dialog>
    );
}

