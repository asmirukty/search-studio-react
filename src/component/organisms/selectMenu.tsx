import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {InputLabel} from "@material-ui/core";
import useActionValue from "./use-action";

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
        },
        menuPaper: {
            maxHeight: 300
        }

    }));

interface SelectMenuProps {
    label: string;
    initialState: string;
    options: any[];
}

export default function SelectMenu(props: SelectMenuProps) {
    const classes = useStyles();
    const [select, changeSelect] = useActionValue(props.initialState);

    //const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //    setState(event.target.value as string);
    //};
    return (
        <FormControl className={classes.formControl}>
            {props.label !== 'none' && (
                <InputLabel shrink className={classes.label}>{props.label}</InputLabel>
            )}
            <Select
                value={select}
                onChange={changeSelect}
                displayEmpty
                className={classes.selectEmpty}
                MenuProps={{ classes: { paper: classes.menuPaper } }}
            >
                {props.options.map((option) => (
                    <MenuItem value={option}>{option}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
