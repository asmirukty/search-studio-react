import React from 'react';
import {Checkbox} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 4,
        },
        shortLabel: {
            width: 140
        },
        longLabel: {
            width: 280
        }
    }));

const FormControlLabel = withStyles({
    root: {
        margin: 0
    },
    label: {
        color: '#5A4628',
        fontSize: 14
    }
})(MuiFormControlLabel);

function count (str:string) {
    let count:number = 0
    for (let i = 0, len = str.length; i < len; i++){
        let c = str.charCodeAt(i)
        if (c >= 0x0 && c <= 0x7f) { // 全角半角判定
            count += 0.5
        } else {
            count += 1
        }
    }
    return count
}

interface SearchCheckboxProps{
    item: string;
    pref?: boolean;
}

export default function SearchCheckbox(props: SearchCheckboxProps) {
    const classes = useStyles()
    const {item, pref} = props;

    const [checked, setChecked] = React.useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked( event.target.checked );
    };

    return (
        <div>
            {(pref) ?
            (<FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={
                    <Checkbox
                        className={classes.root}
                        size='small'
                        checked={checked}
                        onChange={handleChange}
                        name={item}
                        color="primary"
                    />}
                label={item}
            />) :
            (<FormControlLabel
                className={count(item) < 8 ? classes.shortLabel : classes.longLabel}
                control={
                    <Checkbox
                        className={classes.root}
                        size='small'
                        checked={checked}
                        onChange={handleChange}
                        name={item}
                        color="primary"
                    />
                }
                label={item}
            />)}
        </div>
    );
}
