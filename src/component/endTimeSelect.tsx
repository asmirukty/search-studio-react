import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {InputLabel} from "@material-ui/core";

const useStyles = makeStyles((theme:Theme) =>
    createStyles( {
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px'
        },
        label: {
            color: '#5A4628'
        }
    }));

export default function EndTimeSelect() {
    const classes = useStyles();
    const [time, setTime] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTime(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel shrink className={classes.label}>終了時間</InputLabel>
                <Select
                    value={time}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={5}>0:30</MenuItem>
                    <MenuItem value={10}>1:00</MenuItem>
                    <MenuItem value={15}>1:30</MenuItem>
                    <MenuItem value={20}>2:00</MenuItem>
                    <MenuItem value={25}>2:30</MenuItem>
                    <MenuItem value={30}>3:00</MenuItem>
                    <MenuItem value={35}>3:30</MenuItem>
                    <MenuItem value={40}>4:00</MenuItem>
                    <MenuItem value={45}>4:30</MenuItem>
                    <MenuItem value={50}>5:00</MenuItem>
                    <MenuItem value={55}>5:30</MenuItem>
                    <MenuItem value={60}>6:00</MenuItem>
                    <MenuItem value={65}>6:30</MenuItem>
                    <MenuItem value={70}>7:00</MenuItem>
                    <MenuItem value={75}>7:30</MenuItem>
                    <MenuItem value={80}>8:00</MenuItem>
                    <MenuItem value={85}>8:30</MenuItem>
                    <MenuItem value={90}>9:00</MenuItem>
                    <MenuItem value={95}>9:30</MenuItem>
                    <MenuItem value={100}>10:00</MenuItem>
                    <MenuItem value={105}>10:30</MenuItem>
                    <MenuItem value={110}>11:00</MenuItem>
                    <MenuItem value={115}>11:30</MenuItem>
                    <MenuItem value={120}>12:00</MenuItem>
                    <MenuItem value="">
                        <em>指定なし</em>
                    </MenuItem>
                    <MenuItem value={125}>12:30</MenuItem>
                    <MenuItem value={130}>13:00</MenuItem>
                    <MenuItem value={135}>13:30</MenuItem>
                    <MenuItem value={140}>14:00</MenuItem>
                    <MenuItem value={145}>14:30</MenuItem>
                    <MenuItem value={150}>15:00</MenuItem>
                    <MenuItem value={155}>15:30</MenuItem>
                    <MenuItem value={160}>16:00</MenuItem>
                    <MenuItem value={165}>16:30</MenuItem>
                    <MenuItem value={170}>17:00</MenuItem>
                    <MenuItem value={175}>17:30</MenuItem>
                    <MenuItem value={180}>18:00</MenuItem>
                    <MenuItem value={185}>18:30</MenuItem>
                    <MenuItem value={190}>19:00</MenuItem>
                    <MenuItem value={195}>19:30</MenuItem>
                    <MenuItem value={200}>20:00</MenuItem>
                    <MenuItem value={205}>20:30</MenuItem>
                    <MenuItem value={210}>21:00</MenuItem>
                    <MenuItem value={215}>21:30</MenuItem>
                    <MenuItem value={220}>22:00</MenuItem>
                    <MenuItem value={225}>22:30</MenuItem>
                    <MenuItem value={230}>23:00</MenuItem>
                    <MenuItem value={235}>23:30</MenuItem>
                    <MenuItem value={240}>24:00</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
