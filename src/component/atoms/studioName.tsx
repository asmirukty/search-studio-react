import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useRecoilState} from "recoil";
import {studioNameState} from "../atom";

const StudioNameTextField = withStyles({
    root: {
        height: 36,
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

export default function StudioName() {
    const [studioName, setStudioName] = useRecoilState<string>(studioNameState);

    const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudioName(event.target.value)
    };

    return (
        <StudioNameTextField fullWidth size="small" variant="outlined"
                             inputProps={
                                 !studioName ? {style: {color: '#5A4628', fontSize: 14, padding: 10, textAlign: 'center'}}
                                 : {style: {color: '#5A4628', fontSize: 14, padding: 10, textAlign: 'start'}}
                             }
                             placeholder="スタジオ名を入力" onChange={textChange} value={studioName}/>
    );
}
