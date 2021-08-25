import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles( {
        formControl: {
            marginLeft: 80,
            minWidth: 120,
            marginBottom: 12
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px',
        },
        content:{
            display: 'flex',
        },
        typ: {
            fontWeight: 'bold'
        }
    }));

export default function FromStation() {
    const classes = useStyles();
    const [station, setStation] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStation(event.target.value as string);
    };

    return (
        <div className={classes.content}>
            <Typography className={classes.typ} variant={'subtitle1'}>駅から徒歩</Typography>
            <FormControl className={classes.formControl}>
                <Select
                    value={station}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>指定なし</em>
                    </MenuItem>
                    <MenuItem value={3}>3分以内</MenuItem>
                    <MenuItem value={5}>5分以内</MenuItem>
                    <MenuItem value={7}>7分以内</MenuItem>
                    <MenuItem value={10}>10分以内</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
