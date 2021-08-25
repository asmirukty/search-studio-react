import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import {DialogContent} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FromStation from "./fromStation";
import Price from "./price";
import Reserve from "./reserve";
import StudioFacilities from "./studioFacilities";
import RoomFacilities from "./roomFacilities";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        right: {
            textAlign: 'right'
        },
        btn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '3px 4px',
            margin: '0 0 8px',
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
}))

export default function DetailDialog() {
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
            <div className={classes.right}>
                <Button className={classes.btn} onClick={handleClickOpen}>
                    もっとしぼり込む {'>'}
                </Button>
            </div>
            <Dialog PaperProps={{style: {margin: 0}}}
                    open={open}
                    onClose={handleClose} aria-labelledby="form-dialog-title"
                    >
                <DialogActions className={classes.dialogBtn}>
                    <Button onClick={handleClose} className={classes.dialogClose}>
                        <Close fontSize='small'/>
                    </Button>
                    <Button onClick={handleClose} className={classes.dialogOk}>
                        決定
                    </Button>
                </DialogActions>
                <DialogContent className={classes.content}>
                    <FromStation/>
                    <Price/>
                    <Reserve/>
                    <StudioFacilities/>
                    <RoomFacilities/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
