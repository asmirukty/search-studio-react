import React from 'react';
import {Typography} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MinPriceSelect from "./minPriceSelect";
import MaxPriceSelect from "./maxPriceSelect";
import MinMaxSelect from "../../minMaxSelect";
import StudioCheckbox from "../../searchCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            marginLeft: 4
        },
        typ: {
            fontWeight: 'bold'
        }
    }));


export default function Price() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>料金</Typography>
            <div className={classes.content}>
                <StudioCheckbox item={"キャンセル無料期間あり"}/>
                <MinMaxSelect min={<MinPriceSelect/>} max={<MaxPriceSelect/>}/>
            </div>
        </div>
    );
}
