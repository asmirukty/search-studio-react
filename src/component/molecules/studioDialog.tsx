import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogContent} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogCloseButton from "../atoms/dialogCloseButton";
import DialogOkButton from "../atoms/dialogOkButton";

const useStyles = makeStyles(() =>
    createStyles({
        action: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        content: {
            color: "#5A4628",
            padding: 0
        }
    })
);

interface StudioDialogProps {
    open: boolean;
    handleCancel: () => void;
    handleOk: () => void;
    children: React.ReactNode;
}

export default function StudioDialog(props: StudioDialogProps) {
    const classes = useStyles();

    return (
        <Dialog PaperProps={{style: {minWidth: 300, maxWidth: 480}}} keepMounted open={props.open} aria-labelledby="studioDialog">
            <DialogActions className={classes.action}>
                <DialogCloseButton onClick={props.handleCancel}/>
                <DialogOkButton onClick={props.handleOk}/>
            </DialogActions>
            <DialogContent className={classes.content}>
                {props.children}
            </DialogContent>
        </Dialog>
    );
}