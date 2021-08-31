import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";
import SelectMenu from "../../selectMenu";

const useStyles = makeStyles(() =>
    createStyles( {
        content:{
            display: 'flex',
        },
        typ: {
            fontWeight: 'bold',
            marginRight: 40
        }
    }));

const options = [
    '指定なし',　'3分以内', '5分以内',　'7分以内', '10分以内',
];

export default function FromStation() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Typography className={classes.typ} variant={'subtitle1'}>駅から徒歩</Typography>
            <SelectMenu label={'none'} initialState={'指定なし'} options={options}/>
        </div>
    );
}
