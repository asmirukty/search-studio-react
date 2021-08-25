import React from 'react';
import {Checkbox} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import StartTimeSelect from "./startTimeSelect";
import EndTimeSelect from "./endTimeSelect";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 4
        },
        select: {
            color: "#5A4628",
            display: 'flex',
            alignItems: 'flex-end',
            marginLeft: 12
        },
        margin:{
            marginBottom: 12,
            marginLeft: 12
        }
    }));

const FormControlLabel = withStyles({
    root: {
        margin: 0
    },
    label: {
        fontSize: 12
    }
})(MuiFormControlLabel);

export default function TimeSelect() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <div className={classes.select}>
                <StartTimeSelect/>
                <p>~</p>
                <EndTimeSelect/>
            </div>
            <div className={classes.margin}>
                <FormControlLabel
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
                    label="指定内の全時間で空いている部屋のみ"
                />
                <FormControlLabel
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
                    label="指定した時間分の料金を表示"
                />
            </div>
        </div>
    );
}
