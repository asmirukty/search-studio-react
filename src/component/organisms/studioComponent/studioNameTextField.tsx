import React, {useEffect, useState} from 'react';
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

interface StudioNameProps {
    studioName: any;
    changeStudioName: (value: any) => void;
}

export default function StudioName(props: StudioNameProps) {
    const classes = useStyles();
    const [studioName, setStudioName] = useState<string|null>()

    useEffect(() => {
        setStudioName(props.studioName)
    }, [props.studioName])

    const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudioName(event.target.value)
        props.changeStudioName(event.target.value)
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
