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
    '30分単位', "30分から予約可", "Webから予約", "LINEで予約",
]

export default function Reserve() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>予約</Typography>
            <div className={classes.content}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
