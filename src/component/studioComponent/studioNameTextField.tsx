import React from 'react';
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
                borderColor: '#1D356A',
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

    return (
        <form className={classes.root} noValidate>
            <StudioNameTextField
                fullWidth
                size="small"
                placeholder="スタジオ名を入力"
                inputProps={{
                    style: {color: '#5A4628',
                            fontSize: '14px',
                            padding: '10px',
                    }
                }}
                variant="outlined"
            />
        </form>
    );
}
