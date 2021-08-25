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

export default function StudioFacilities() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>スタジオ設備</Typography>
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
                    label='男性更衣室'
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
                    label="女性更衣室"
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
                    label="シャワールーム"
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
                    label="喫煙室"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedE}
                            onChange={handleChange}
                            name="checkedE"
                            color="primary"
                        />
                    }
                    label="待合スペース"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedF}
                            onChange={handleChange}
                            name="checkedF"
                            color="primary"
                        />
                    }
                    label="駐車場"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedG}
                            onChange={handleChange}
                            name="checkedG"
                            color="primary"
                        />
                    }
                    label="Wi-Fi"
                />
            </div>
        </div>
    );
}
