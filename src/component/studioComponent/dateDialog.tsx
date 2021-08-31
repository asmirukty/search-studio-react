import React from 'react';
import {Typography, DialogContent } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import DateSelect from "./dateDialogComponent/dateSelect";
import TimeSelect from "./dateDialogComponent/timeSelect";
import StudioDialog from "../searchDialog";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            color: "#5A4628",
            padding: '24px 24px 8px',
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        },
        typ: {
            fontWeight: 'bold'
        }
}));

export default function DateDialog() {
    const classes = useStyles()

    return (
        <StudioDialog label={'日時を選択'} btn={'btn'}>
                <DialogContent className={classes.content}>
                    <Typography variant={'subtitle1'} className={classes.typ}>日時1</Typography>
                    <DateSelect/>
                    <TimeSelect/>
                    <Typography variant={'subtitle1'} className={classes.typ}>日時2</Typography>
                    <DateSelect/>
                    <TimeSelect/>
                    <Typography variant={'subtitle1'} className={classes.typ}>日時3</Typography>
                    <DateSelect/>
                    <TimeSelect/>
                    <Typography variant={'subtitle1'} className={classes.typ}>日時4</Typography>
                    <DateSelect/>
                    <TimeSelect/>
                    <Typography variant={'subtitle1'} className={classes.typ}>日時5</Typography>
                    <DateSelect/>
                    <TimeSelect/>
                </DialogContent>
            </StudioDialog>
    );
}
