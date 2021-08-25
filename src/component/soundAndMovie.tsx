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

export default function SoundAndMovie() {
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
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>音響・映像</Typography>
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
                    label='CD利用'
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
                    label="iPod利用"
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
                    label="BlueTooth利用"
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
                    label="ミキサー"
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
                    label="DJセット"
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
                    label="マイク"
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
                    label="ヘッドセットマイク"
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
                    label="マイクスタンド"
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
                    label="キーボード"
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
                    label="譜面台"
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
                    label="プロジェクター"
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
                    label="モニター"
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
                    label="Blu-rayデッキ"
                />
            </div>
        </div>
    );
}
