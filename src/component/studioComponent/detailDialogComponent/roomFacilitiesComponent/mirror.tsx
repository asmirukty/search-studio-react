import React from 'react';
import {Checkbox, Typography} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import MinMirrorSelect from "./minMirrorSelect";
import MaxMirrorSelect from "./maxMirrorSelect";
import MinMaxSelect from "../../../minMaxSelect";
import StudioCheckbox from "../../../searchCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            marginLeft: 4
        },
        typ: {
            fontWeight: 'bold'
        }
    }));

export default function Mirror() {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle2'}>鏡</Typography>
            <div className={classes.content}>
                <StudioCheckbox item={"2面"}/>
                <MinMaxSelect min={<MinMirrorSelect/>} max={<MaxMirrorSelect/>}/>
            </div>
        </div>
    );
}
