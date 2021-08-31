import React from 'react';
import {Typography} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import StudioCheckbox from "../../searchCheckbox";

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
    '男性更衣室', '女性更衣室', "シャワールーム", "喫煙室",
    "待合スペース", "駐車場", "Wi-Fi"
];

export default function StudioFacilities() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>スタジオ設備</Typography>
            <div className={classes.content}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
