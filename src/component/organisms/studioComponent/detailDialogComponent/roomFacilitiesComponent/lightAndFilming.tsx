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
    '明るさ調節', "スタンドライト", "カラーライト", "ミラーボール",
    "スマホ用三脚", "スマホ固定台(壁付)", "スマホ用広角レンズ", "その他撮影機材"
];

export default function LightAndFilming() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>照明・撮影</Typography>
            <div className={classes.content}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
