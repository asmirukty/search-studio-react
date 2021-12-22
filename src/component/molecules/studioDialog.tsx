import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogContent} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import {Close} from "@material-ui/icons";
import BoldButton from "../atoms/boldButton";

const useStyles = makeStyles(() =>
    createStyles({
        action: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between'
        },
        content: {
            padding: 0
        }
    })
);

interface StudioDialogProps {
    open: boolean;
    handleCancel: () => void;
    handleOk: () => void;
    padding: any;
    children: React.ReactNode;
}

export default function StudioDialog(props: StudioDialogProps) {
    const classes = useStyles();

    return (
        <Dialog PaperProps={{style: {minWidth: 300, maxWidth: 480}}} keepMounted open={props.open} aria-labelledby="studioDialog">
            <DialogActions className={classes.action}>
                <BoldButton label={<Close fontSize='small'/>} onClick={props.handleCancel}/>
                <BoldButton label={'決定'} onClick={props.handleOk}/>
            </DialogActions>
            <DialogContent style={{padding: props.padding}}>
                {props.children}
            </DialogContent>
        </Dialog>
    );
}