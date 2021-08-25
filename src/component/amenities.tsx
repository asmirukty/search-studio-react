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

export default function Amenities() {
    const classes = useStyles()

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false,
        checkedI: false,
        checkedJ: false,
        checkedK: false,
        checkedL: false,
        checkedM: false,
        checkedN: false,
        checkedO: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>その他備品</Typography>
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
                    label='机'
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
                    label="イス"
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
                    label="ホワイトボード"
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
                    label="パーテーション"
                />
                <FormControlLabel
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
                    label="カーテン/更衣スペース"
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
                    label="バレエバー"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedH}
                            onChange={handleChange}
                            name="checkedH"
                            color="primary"
                        />
                    }
                    label="タップ板"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedI}
                            onChange={handleChange}
                            name="checkedI"
                            color="primary"
                        />
                    }
                    label="ヨガマット"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedJ}
                            onChange={handleChange}
                            name="checkedJ"
                            color="primary"
                        />
                    }
                    label="ヨガグッズ"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedK}
                            onChange={handleChange}
                            name="checkedK"
                            color="primary"
                        />
                    }
                    label="トレーニンググッズ"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedL}
                            onChange={handleChange}
                            name="checkedL"
                            color="primary"
                        />
                    }
                    label="ヒールカバー"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedM}
                            onChange={handleChange}
                            name="checkedM"
                            color="primary"
                        />
                    }
                    label="ハンガー"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedN}
                            onChange={handleChange}
                            name="checkedN"
                            color="primary"
                        />
                    }
                    label="充電器"
                />
                <FormControlLabel
                    className={classes.label}
                    control={
                        <Checkbox
                            className={classes.root}
                            size='small'
                            checked={state.checkedO}
                            onChange={handleChange}
                            name="checkedO"
                            color="primary"
                        />
                    }
                    label="アルコール消毒"
                />
            </div>
        </div>
    );
}
