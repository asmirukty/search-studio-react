import React from 'react';
import {Checkbox, Typography} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MinPriceSelect from "./minPriceSelect";
import MaxPriceSelect from "./maxPriceSelect";

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

export default function Price() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        checked: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>料金</Typography>
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
                    label="キャンセル無料期間あり"
                />
                <div className={classes.select}>
                    <MinPriceSelect/>
                    <p>~</p>
                    <MaxPriceSelect/>
                </div>
            </div>
        </div>
    );
}
