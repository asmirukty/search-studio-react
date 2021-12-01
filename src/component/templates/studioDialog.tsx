import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogContent, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            color: "#5A4628"
        },
        detailBtn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '0 4px',
            margin: '2px 0 8px',
            right: 0,
        },
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        btnChip: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
            justifyContent: 'start',
            padding: '0 5px'
        },
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
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

interface NewStudioDialogProps {
    open: boolean,
    dialogOpen: () => void,
    handleCancel: () => void,
    handleOk: () => void,
    title?: string,
    detail?: boolean,
    labelCheck: boolean,
    label: string,
    chips: React.ReactNode,
    dialogContent: React.ReactNode,
}
export default function StudioDialog(props: NewStudioDialogProps) {
    const classes = useStyles();

    return (
        <div>
            {
                props.title &&
                <Typography component={'span'} variant='subtitle1' className={classes.title}>
                    {props.title}
                </Typography>
            }
            {
                props.detail ?
                    <div>
                        {props.chips}
                        <div style={{textAlign: 'right'}}>
                            <Button className={classes.detailBtn} onClick={props.dialogOpen}>
                                {props.label}
                            </Button>
                        </div>
                    </div>
                    :
                    props.labelCheck ?
                        <Button fullWidth variant="outlined" className={classes.btn} onClick={props.dialogOpen}>
                            {props.label}
                        </Button> :
                        <Button fullWidth variant="outlined" className={classes.btnChip} onClick={props.dialogOpen}>
                            {props.chips}
                        </Button>
            }
            <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}} keepMounted open={props.open} aria-labelledby="confirmation-dialog-title">
                    <DialogActions className={classes.dialogBtn}>
                        <Button autoFocus onClick={props.handleCancel} className={classes.dialogClose}>
                            <Close fontSize='small'/>
                        </Button>
                        <Button onClick={props.handleOk} className={classes.dialogOk}>決定</Button>
                    </DialogActions>
                    <DialogContent className={classes.content}>
                        {props.dialogContent}
                    </DialogContent>
            </Dialog>
        </div>
    )
}