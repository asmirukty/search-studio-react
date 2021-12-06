import React from 'react';
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useRecoilState} from "recoil";
import {studioNameState} from "./atom";

const StudioNameTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#D7D2C8',
            },
            '&:hover fieldset': {
                borderColor: '#9B8C7D',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#9B8C7D',
            },
        },
    },
})(TextField);

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            marginTop: '5px',
            marginBottom: '5px',
        },
}));

export default function StudioName() {
    const classes = useStyles();
    const [studioName, setStudioName] = useRecoilState<string>(studioNameState)

    const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudioName(event.target.value)
    }

    return (
        <div className={classes.root}>
            <StudioNameTextField
                fullWidth
                size="small"
                placeholder="スタジオ名を入力"
                onChange={textChange}
                value={studioName}
                inputProps={{style: {color: '#5A4628', fontSize: 14, padding: 10, }}}
                variant="outlined"
            />
        </div>
    );
}
