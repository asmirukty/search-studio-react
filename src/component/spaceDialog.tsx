import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SpaceTabs from "./spaceTabs";

const useStyles = makeStyles(() =>
    createStyles( {
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        dialogBtn: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        dialogClose: {
            color: '#5A4628',
            fontSize: '16px',
        },
        dialogOk: {
            color: '#5A4628',
            fontSize: '14px',
        },
}));

export default function SpaceDialog() {
    const [open, setOpen] = useState(false);

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
                面積/人数を選択
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogActions className={classes.dialogBtn}>
                    <Button onClick={handleClose} className={classes.dialogClose}>
                        ×
                    </Button>
                    <Button onClick={handleClose} className={classes.dialogOk}>
                        決定
                    </Button>
                </DialogActions>
                <SpaceTabs/>
            </Dialog>
        </div>
    );
}