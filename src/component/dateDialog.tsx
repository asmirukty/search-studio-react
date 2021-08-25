import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {Typography, DialogContent } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import DateSelect from "./dateSelect";
import TimeSelect from "./timeSelect";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
        },
        dialogOk: {
            color: '#5A4628',
            fontSize: 14,
            fontWeight: 'bold',
            minWidth: 20,
            padding: '0 4px'
        },
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
    const [open, setOpen] = React.useState(false);

    const classes = useStyles()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                日時を選択
            </Button>
            <Dialog PaperProps={{style: {margin: 0}}}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                <DialogActions className={classes.dialogBtn}>
                    <Button onClick={handleClose} className={classes.dialogClose}>
                        <Close fontSize='small'/>
                    </Button>
                    <Button onClick={handleClose} className={classes.dialogOk}>
                        決定
                    </Button>
                </DialogActions>
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
            </Dialog>
        </div>
    );
}
