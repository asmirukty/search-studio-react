import Dialog from '@material-ui/core/Dialog';
import Button from "@material-ui/core/Button";
import {Close} from "@material-ui/icons";
import DialogActions from "@material-ui/core/DialogActions";
import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles( {
        right: {
            textAlign: 'right'
        },
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        detailBtn: {
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
    }));

interface DialogProps {
    children?: React.ReactNode;
    label: string;
    btn: string;
}

export default function SearchDialog(props: DialogProps) {
    const classes = useStyles()

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {props.btn === 'btn' && (
                    <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                        {props.label}
                    </Button>
            )}
            {props.btn === 'detailBtn' && (
                <div className={classes.right}>
                    <Button className={classes.detailBtn} onClick={handleClickOpen}>
                        {props.label}
                    </Button>
                </div>
            )}
            <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}}
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
                {props.children}
            </Dialog>
        </div>
    )
}