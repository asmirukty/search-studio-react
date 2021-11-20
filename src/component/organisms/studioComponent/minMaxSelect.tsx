import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SelectOption from "./selectOption";

const useStyles = makeStyles(() =>
    createStyles({
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            marginBottom: 12
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
            <SelectOption label={minLabel} value={min} nullValue={minNullValue} onChange={props.changeMin}>
                {
                    minOptions.map((option: any, index) => (
                        <MenuItem value={option} key={index}
                                  disabled={option !== minNullValue && max && (disableEqual ? index >= maxOptions.indexOf(max) : index > maxOptions.indexOf(max))}>
                            {option}
                        </MenuItem>
                    ))
                }
            </SelectOption>
            <p>~</p>
            <SelectOption label={maxLabel} value={max} nullValue={maxNullValue} onChange={props.changeMax}>
                {
                    maxOptions.map((option: any, index) => (
                        <MenuItem value={option} key={index}
                                  disabled={option !== maxNullValue && min && (disableEqual ? index <= minOptions.indexOf(min) : index < minOptions.indexOf(min))}>
                            {option}
                        </MenuItem>
                    ))
                }
            </SelectOption>
        </div>
    )
}