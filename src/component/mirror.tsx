import React from 'react';
import {Checkbox, Typography} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MinMirrorSelect from "./minMirrorSelect";
import MaxMirrorSelect from "./maxMirrorSelect";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 4
        },
        select: {
            color: "#5A4628",
            display: 'flex',
            alignItems: 'flex-end',
            marginBottom: 12
        },
        content: {
            marginLeft: 4
        },
        typ: {
            fontWeight: 'bold'
        }
    }));

const FormControlLabel = withStyles({
    root: {
        margin: 0
    },
    label: {
        fontSize: 14
    }
})(MuiFormControlLabel);

export default function Mirror() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        checked: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>鏡</Typography>
            <div className={classes.content}>
                <FormControlLabel
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checked}
                            onChange={handleChange}
                            name="checked"
                            color="primary"
                        />
                    }
                    label="2面"
                />
                <div className={classes.select}>
                    <MinMirrorSelect/>
                    <p>~</p>
                    <MaxMirrorSelect/>
                </div>
            </div>
        </div>
    );
}
