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
    'CD利用', "iPod利用", "BlueTooth利用", "ミキサー", "DJセット",
    "マイク", "ヘッドセットマイク", "マイクスタンド", "キーボード",
    "譜面台", "プロジェクター", "モニター", "Blu-rayデッキ"
]

export default function SoundAndMovie() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>音響・映像</Typography>
            <div className={classes.content}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
