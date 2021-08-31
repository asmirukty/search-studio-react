import React from 'react';
import {Typography} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import StudioCheckbox from "../../../searchCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            marginLeft: 4,
            display: 'flex',
            flexWrap: 'wrap',
            marginBottom: 12
        },
        typ: {
            fontWeight: 'bold'
        }
    }));

const items = [
    'フローリング', 'リノリウム', '塩ビタイル'
];

export default function FloorMaterial() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>床材</Typography>
            <div className={classes.content}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
