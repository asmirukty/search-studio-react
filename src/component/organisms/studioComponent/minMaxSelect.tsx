import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {InputLabel} from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            marginBottom: 12
        },
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

interface MinMaxSelectProps {
    minLabel?: string, maxLabel?: string,
    min: any, max: any,
    minOptions: any[], maxOptions: any[],
    minNullValue: any, maxNullValue: any, disableEqual?: boolean,
    changeMin: (event: any) => void, changeMax: (event: any) => void
}

export default function MinMaxSelect(props: MinMaxSelectProps) {
    const classes = useStyles()
    const {minLabel, maxLabel, min, max, minOptions, maxOptions, minNullValue, maxNullValue, disableEqual} = props;

    return (
        <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                            {
                                minLabel && <InputLabel shrink className={classes.label}>{minLabel}</InputLabel>
                            }
                            <Select
                                value={min ? min : minNullValue}
                                onChange={props.changeMin}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    minOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={option !== minNullValue && max && (disableEqual ? index >= maxOptions.indexOf(max) : index > maxOptions.indexOf(max))}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <p>~</p>
                        <FormControl className={classes.formControl}>
                            {
                                maxLabel && <InputLabel shrink className={classes.label}>{maxLabel}</InputLabel>
                            }
                            <Select
                                value={max ? max : maxNullValue}
                                onChange={props.changeMax}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    maxOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={option !== maxNullValue && min && (disableEqual ? index <= minOptions.indexOf(min) : index < minOptions.indexOf(min))}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
    )
}