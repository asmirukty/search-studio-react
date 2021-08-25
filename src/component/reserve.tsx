import React from 'react';
import {Checkbox, Typography} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 4,
        },
        select: {
            color: "#5A4628",
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
        },
        content: {
            marginLeft: 4,
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 12
        },
        label: {
            width: 160
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

export default function Reserve() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>予約</Typography>
            <div className={classes.content}>
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            color="primary"
                        />
                    }
                    label='30分単位'
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="30分から予約可"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                            color="primary"
                        />
                    }
                    label="Webから予約"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedD}
                            onChange={handleChange}
                            name="checkedD"
                            color="primary"
                        />
                    }
                    label="LINEで予約"
                />
            </div>
        </div>
    );
}
