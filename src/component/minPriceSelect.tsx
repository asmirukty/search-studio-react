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

export default function MinPriceSelect() {
    const classes = useStyles();
    const [price, setPrice] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPrice(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel shrink className={classes.label}>30分あたり</InputLabel>
                <Select
                    value={price}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>下限なし</em>
                    </MenuItem>
                    <MenuItem value={5}>500円</MenuItem>
                    <MenuItem value={10}>1000円</MenuItem>
                    <MenuItem value={15}>1500円</MenuItem>
                    <MenuItem value={20}>2000円</MenuItem>
                    <MenuItem value={25}>2500円</MenuItem>
                    <MenuItem value={30}>3000円</MenuItem>
                    <MenuItem value={35}>3500円</MenuItem>
                    <MenuItem value={40}>4000円</MenuItem>
                    <MenuItem value={45}>4500円</MenuItem>
                    <MenuItem value={50}>5000円</MenuItem>
                    <MenuItem value={60}>6000円</MenuItem>
                    <MenuItem value={70}>7000円</MenuItem>
                    <MenuItem value={80}>8000円</MenuItem>
                    <MenuItem value={90}>9000円</MenuItem>
                    <MenuItem value={100}>10000円</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
