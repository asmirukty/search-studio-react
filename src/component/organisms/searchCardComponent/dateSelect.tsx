import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from "date-fns/locale/ja";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MinMaxSelect from "../../molecules/minMaxSelect";
import useDateTime from "../../hooks/use-date-time";
import {endTimeOptions, startTimeOptions} from "./itemsAndOptions/timeOptions";
import SearchRadio from "../../atoms/searchRadio";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        root: {
            color: "#5A4628",
            marginLeft: 12,
            paddingBottom: 8,
        },
        dateInput: {
            color: '#5A4628',
            borderColor: '#5A4628',
            textAlign: 'center'
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center'
        },
        btn: {
            borderColor: '#D7D2C8',
            color: '#5A4628',
            fontSize: '14px',
            padding: 0,
            margin: 4
        }
    }));

interface DateSelectProps {
    open: boolean,
    addBtn: boolean,
    last?: boolean,
    date: {date: Date, startTime: string, endTime: string, match: string}|null;
    label: string;
    dateChange: (newDate: { date: Date, startTime: any, endTime: any, match: string }|null) => void;
    addDate: () => void;
}

export default function DateSelect(props: DateSelectProps) {
    const classes = useStyles();
    const { open, dateChange, addDate, date, label, addBtn, last } = props;
    const [selectDate, startTime, endTime, match, changeSelectDate, changeStartTime, changeEndTime, changeMatch, reset] = useDateTime(open, date, dateChange)

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>{label}</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
            <DatePicker
                className={classes.root} disableToolbar variant="dialog" id="date-picker-inline"
                cancelLabel='キャンセル' okLabel='決定'
                format="yyyy/MM/dd" emptyLabel='日にちを選択'
                minDate={new Date()}
                maxDate={new Date().setMonth(new Date().getMonth() + 2)}
                value={selectDate}
                inputProps={{className: classes.dateInput}}
                onChange={changeSelectDate}
            />
            </MuiPickersUtilsProvider>
            <MinMaxSelect minLabel={'開始時間'} maxLabel={'終了時間'} min={startTime} max={endTime}
                          minOptions={startTimeOptions} maxOptions={endTimeOptions}
                          minNullValue={startTimeOptions[24]} maxNullValue={endTimeOptions[24]}
                          changeMin={changeStartTime} changeMax={changeEndTime}/>
            {
                startTime && endTime &&
                <SearchRadio beforeTyp={'指定時間の'} afterTyp={'で空いている'} value={match} options={['一部', '全時間']} handleChange={changeMatch}/>
            }
            <div className={classes.buttons}>
                <Button onClick={reset} className={classes.btn} variant="outlined">× 削除</Button>
                {
                    !last && addBtn &&
                    <Button onClick={addDate} disabled={!selectDate} className={classes.btn} variant="outlined">+ 追加</Button>
                }
            </div>
        </div>
    );
}