import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AreaTabs from "./areaTabs";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles( {
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
    }));

export default function AreaDialog() {
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
                エリア/沿線、駅を選択
            </Button>
            <Dialog PaperProps={{style: {margin: 0, flexGrow: 1}}}
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
                <AreaTabs/>
            </Dialog>
        </div>
    );
}