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
    '机', "イス", "ホワイトボード", "パーテーション", "カーテン/更衣スペース",
    "バレエバー", "タップ板", "ヨガマット", "ヨガグッズ", "トレーニンググッズ",
    "ヒールカバー", "ハンガー", "充電器", "アルコール消毒"
];

export default function Amenities() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>その他備品</Typography>
            <div className={classes.content}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
