import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import {FormControl, InputLabel} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(() =>
    createStyles({
        formControl: {
            margin: '0 4px',
            minWidth: 120,
        },
        label: {
            color: '#5A4628'
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: 14,
            padding: '2px 7px'
        },
        menuPaper: {
            maxHeight: 300
        }
    }));

interface SelectOptionProps {
    label?: any,
    options: any[],
    nullIndex: number,
    unit?: string;
    value: any|null,
    min?: boolean,
    max?: boolean,
    anotherValue?: any,
    onChange: (event: any) => void;
}

export default function SelectOption(props: SelectOptionProps) {
    const classes = useStyles();
    const {label, options, nullIndex, unit, value, min, max, anotherValue, onChange} = props;

    return (
        <FormControl className={classes.formControl}>
            {
                label && <InputLabel shrink className={classes.label}>{label}</InputLabel>
            }
            <Select
                value={value ? value : options[nullIndex]}
                onChange={onChange} displayEmpty className={classes.selectEmpty}
                MenuProps={{ classes: { paper: classes.menuPaper } }}>
                {
                    options.map((option: any, index) =>
                        <MenuItem value={option} key={index}
                                  disabled={
                                      index !== nullIndex && anotherValue &&
                                      min  ? option >= anotherValue
                                          : max && option <= anotherValue
                                  }>
                            {option}{unit && index !== nullIndex && unit}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    );
}