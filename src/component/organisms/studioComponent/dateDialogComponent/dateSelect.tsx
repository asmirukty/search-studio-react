import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginLeft: 12
        }
    }));

export default function DateSelect() {
    const classes = useStyles();
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                className={classes.root}
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                id="date-picker-inline"
                value={selectedDate}
                inputProps={{
                    style: {color: '#5A4628',
                            borderColor: '#5A4628'}
                }}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                    style: {color: '#5A4628',}
                }}
            />
        </MuiPickersUtilsProvider>
    );
}
