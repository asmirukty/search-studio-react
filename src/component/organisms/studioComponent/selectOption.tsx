import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import {FormControl, InputLabel} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        formControl: {
            margin: 4,
            minWidth: 120,
        },
        label: {
            color: '#5A4628'
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px'
        },
        menuPaper: {
            maxHeight: 300
        }
    }));

interface SelectOptionProps {
    label?: any,
    value: any,
    nullValue: any,
    onChange: (event: any) => void,
    children: React.ReactNode
}

export default function SelectOption(props: SelectOptionProps) {
    const classes = useStyles()

    return (
        <FormControl className={classes.formControl}>
            {
                props.label && <InputLabel shrink className={classes.label}>{props.label}</InputLabel>
            }
        <Select
            value={props.value ? props.value : props.nullValue}
            onChange={props.onChange}
            displayEmpty
            className={classes.selectEmpty}
            MenuProps={{ classes: { paper: classes.menuPaper } }}>
            {props.children}
        </Select>
        </FormControl>
    )
}