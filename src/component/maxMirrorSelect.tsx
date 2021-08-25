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
            fontSize: "14px",
            padding: '2px 7px'
        },
    }));

export default function MaxMirrorSelect() {
    const classes = useStyles();
    const [mirror, setMirror] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setMirror(event.target.value as string);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={mirror}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>上限なし</em>
                    </MenuItem>
                    <MenuItem value={5}>5m</MenuItem>
                    <MenuItem value={10}>10m</MenuItem>
                    <MenuItem value={15}>15m</MenuItem>
                    <MenuItem value={20}>20m</MenuItem>
                    <MenuItem value={25}>25m</MenuItem>
                    <MenuItem value={30}>30m</MenuItem>
                    <MenuItem value={35}>35m</MenuItem>
                    <MenuItem value={40}>40m</MenuItem>
                    <MenuItem value={45}>45m</MenuItem>
                    <MenuItem value={50}>50m</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
