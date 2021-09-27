import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginLeft: 12,
            paddingBottom: 8
        }
    }));

interface DateSelectProps {
    date: any;
    dateOnClose: (value?: any) => void;
}

export default function NewDateSelect(props: DateSelectProps) {
    const classes = useStyles();
    // The first commit of Material-UI
    const { dateOnClose, date: dateProp,  ...other } = props;
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

    React.useEffect(() => {
            setSelectedDate(dateProp);
    }, [dateProp]);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        dateOnClose(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                className={classes.root}
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                id="date-picker-inline"
                emptyLabel='年/月/日'
                value={selectedDate}
                inputProps={{
                    style: {color: '#5A4628',
                            borderColor: '#5A4628'}
                }}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    );
}
