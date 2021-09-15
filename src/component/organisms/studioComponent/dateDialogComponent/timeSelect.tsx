import React from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import StartTimeSelect from "./startTimeSelect";
import EndTimeSelect from "./endTimeSelect";
import MinMaxSelect from "../../minMaxSelect";
import StudioCheckbox from "../../searchCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 4
        },
        margin:{
            marginBottom: 12,
            marginLeft: 12
        }
    }));

const items = [
    "指定内の全時間で空いている部屋のみ", "指定した時間分の料金を表示"
];

export default function TimeSelect() {
    const classes = useStyles()

    return (
        <div>
            <MinMaxSelect min={<StartTimeSelect/>} max={<EndTimeSelect/>}/>
            <div className={classes.margin}>
                {items.map((item) => (
                    <StudioCheckbox item={item}/>
                ))}
            </div>
        </div>
    );
}
