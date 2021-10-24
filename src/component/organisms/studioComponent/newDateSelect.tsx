import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import {InputLabel} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DateConvert from "../dateConvert";
import DateTimeConvert from "../dateTimeConvert";
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginLeft: 12,
            paddingBottom: 8
        },
        select: {
            display: 'flex',
            alignItems: 'baseline',
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
        label: {
            color: '#5A4628'
        },
        menuPaper: {
            maxHeight: 300
        },
        addBtn: {
            borderColor: '#D7D2C8',
            color: '#5A4628',
            fontSize: '14px',
            padding: 0,
            margin: 4
        },
        resetBtn: {
            color: '#5A4628',
            fontSize: 8,
            padding: 0,
        }
    }));

const startTimeOptions = [
    '0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '指定なし', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',
];

const endTimeOptions = [
    '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '指定なし', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30',　'24:00'
];

interface DateSelectProps {
    //open: boolean,
    date: {
        date: Date,
        startTime: string,
        endTime: string
    };
    dateChange: (Date: Date, startTime: string, endTime: string) => void;
}

export default function NewDateSelect(props: DateSelectProps) {
    const classes = useStyles();
    const { dateChange, date: dateProp } = props;
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
    const [startTime, setStartTime] = React.useState('指定なし');
    const [endTime, setEndTime] = React.useState('指定なし');
    //const [open, setOpen] = React.useState(true)

    React.useEffect(() => {
        //setOpen(openProp)

        if (!dateProp) {
            setSelectedDate(null)
            setStartTime('指定なし');
            setEndTime('指定なし');
        }
        else {
            setSelectedDate(dateProp.date)
            setStartTime(dateProp.startTime)
            setEndTime(dateProp.endTime)
        }
    }, [dateProp]);

    //const addClick = () => {setOpen(true)}

    const handleDateChange = (date: any) => {
        if (date) {
            setSelectedDate(date);
            dateChange(date, startTime, endTime)
        }
    };

    const resetClick = () => {
        setSelectedDate(null)
    //    setStartTime('指定なし')
    //    setEndTime('指定なし')
    }

    const startTimeHandleChange = (event: any) : void => {
        setStartTime((event.target as HTMLInputElement).value);

        if (selectedDate === null) {
            setSelectedDate(new Date())
            dateChange(new Date(), event.target.value, endTime)
        }
        else {
            dateChange(selectedDate, event.target.value, endTime)
        }
    };

    const endTimeHandleChange = (event: any) : void => {
        setEndTime((event.target as HTMLInputElement).value);

        if (selectedDate === null) {
            setSelectedDate(new Date())
            dateChange(new Date(), startTime, event.target.value)
        }
        else {
            dateChange(selectedDate, startTime, event.target.value)
        }
    };

    return (
        //(!open) ?
        //        <Button onClick={addClick} className={classes.addBtn} variant="outlined">+ 追加</Button>
        //        :
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        className={classes.root}
                        disableToolbar
                        variant="inline"
                        format="yyyy/MM/dd"
                        id="date-picker-inline"
                        emptyLabel='日にちを選択'
                        minDate={new Date()}
                        maxDate={new Date().setMonth(new Date().getMonth() + 2)}
                        value={selectedDate}
                        inputProps={{
                            style: {
                                color: '#5A4628',
                                borderColor: '#5A4628'
                            }
                        }}
                        onChange={handleDateChange}
                    />
                    {
                        selectedDate &&
                        <Button onClick={resetClick} className={classes.resetBtn}><ClearIcon/></Button>
                    }
                    </MuiPickersUtilsProvider>
                    <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.label}>開始時間</InputLabel>
                        <Select
                        value={startTime}
                        onChange={startTimeHandleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        MenuProps={{classes: {paper: classes.menuPaper}}}
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
                    value={endTime}
                    onChange={endTimeHandleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    MenuProps={{classes: {paper: classes.menuPaper}}}
                    >
                {endTimeOptions.map((option: any) => (
                    <MenuItem value={option}>{option}</MenuItem>
                    ))}
                    </Select>
                    </FormControl>
                        {/**<Button onClick={resetClick} disabled={!selectedDate && startTime === '指定なし' && endTime === '指定なし'} className={classes.addBtn} variant="outlined">リセット</Button>*/}
                    </div>
                </div>
        );
}