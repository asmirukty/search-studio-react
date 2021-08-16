import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme:Theme) =>
    createStyles( {
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px"
        },

}));

export default function MaxAreaSelect() {
    const classes = useStyles();
    const [area, setArea] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setArea(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={area}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>上限なし</em>
                    </MenuItem>
                    <MenuItem value={10}>10m^2</MenuItem>
                    <MenuItem value={20}>15m^2</MenuItem>
                    <MenuItem value={30}>20m^2</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
