import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {Dialog, DialogContent} from "@material-ui/core";
import useDialogOpen from "../use-dialog-open";
import DialogCloseButton from "../../molecules/dialogCloseButton";

const useStyles = makeStyles(() =>
    createStyles({
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        detailBtn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '0 4px',
            margin: '2px 0 8px',
            right: 0,
        },
        btnChip: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
            justifyContent: 'start',
            padding: '0 5px'
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
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
            padding: 0,
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        }
    }));

interface StudioDialogProps {
    funcs: any[],
    state: any[],
    openCheck: (open: boolean) => void,
    detail?: boolean,
    labelCheck: boolean,
    label: string,
    chips: React.ReactNode,
    content: React.ReactNode,
}

export default function StudioDialog(props: StudioDialogProps) {
    const classes = useStyles()
    const [open, dialogOpen, handleCancel, handleOk] = useDialogOpen(false, props.funcs, props.state, props.openCheck);

    return (
        <div>
            <div>
                {
                    props.detail ?
                        <div>
                            {props.chips}
                            <div style={{textAlign: 'right'}}>
                                <Button className={classes.detailBtn} onClick={dialogOpen}>
                                    {props.label}
                                </Button>
                            </div>
                        </div>
                        : (
                            props.labelCheck ?
                            <Button fullWidth variant="outlined" className={classes.btn} onClick={dialogOpen}>
                                {props.label}
                            </Button> :
                            <Button fullWidth variant="outlined" className={classes.btnChip} onClick={dialogOpen}>
                                {props.chips}
                            </Button>
                        )
                }
            </div>
            <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}} keepMounted open={open} aria-labelledby="confirmation-dialog-title">
                <DialogActions className={classes.dialogBtn}>
                    <DialogCloseButton close={handleCancel}/>
                    <Button onClick={handleOk} className={classes.dialogOk}>決定</Button>
                </DialogActions>
                <DialogContent className={classes.content}>
                    {props.content}
                </DialogContent>
            </Dialog>
        </div>
    )
}