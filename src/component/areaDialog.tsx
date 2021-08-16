import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AreaTabs from "./areaTabs";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: 14,
        },
        dialogBtn: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        dialogClose: {
            color: '#5A4628',
            fontSize: 16,
        },
        dialogOk: {
            color: '#5A4628',
            fontSize: 14,
        },
}));

export default function AreaDialog() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                エリア/沿線・駅を選択
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
                <AreaTabs/>
            </Dialog>
        </div>
    );
}