import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const MuiTextField = withStyles({
    root: {
        height: 36,
        margin: '0 2%',
        width: '96%',
        backgroundColor: '#fff',
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

interface SearchTextFieldProps {
    label: string;
    value: string;
    onChange: (event: any) => void;
}

export default function SearchTextField(props: SearchTextFieldProps) {
    return (
        <MuiTextField fullWidth size="small" variant="outlined"
                      inputProps={
                          !props.value ?
                              {style: {color: '#5A4628', fontSize: 14, padding: 10, textAlign: 'center'}}
                              : {style: {color: '#5A4628', fontSize: 14, padding: 10, textAlign: 'start'}}
                      }
                      placeholder={props.label} onChange={props.onChange} value={props.value}/>
    );
}
