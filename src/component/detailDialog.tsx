import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '3px 4px',
            margin: 5
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
            <Button className={classes.btn} onClick={handleClickOpen}>
                もっとしぼり込む {'>'}
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
            </Dialog>
        </div>
    );
}
