import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from "date-fns/locale/ja";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: "#5A4628",
            marginLeft: 12,
            paddingBottom: 8,
        },
        dateInput: {
            color: '#5A4628',
            borderColor: '#5A4628',
            textAlign: 'center'
        }
    }));

interface SearchDatePickerProps {
    value: any;
    changeDate: (value: Date|null) => void;
}

export default function SearchDatePicker(props: SearchDatePickerProps) {
    const classes = useStyles();

    return (
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                <DatePicker
                    className={classes.root} disableToolbar variant="dialog" id="date-picker-inline"
                    cancelLabel='キャンセル' okLabel='決定'
                    format="yyyy/MM/dd" emptyLabel='日にちを選択'
                    minDate={new Date()}
                    maxDate={new Date().setMonth(new Date().getMonth() + 2)}
                    value={props.value}
                    inputProps={{className: classes.dateInput}}
                    onChange={props.changeDate}
                />
            </MuiPickersUtilsProvider>

    );
}