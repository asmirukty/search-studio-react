import React from "react";
import {Dialog} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogCloseButton from "../atoms/dialogCloseButton";
import StudioSearchCard from "./studioSearchCard";
import StudioResultDialogTitle from "../atoms/studioResultDialogTitle";
import {useRecoilState} from "recoil";
import {studioSearchCardOpenState} from "../atom";

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            margin: 12,
            flexGrow: 1
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'block'
        },
        flexEnd: {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }))

export default function StudioResultDialog() {
    const classes = useStyles();
    const [open, setOpen] = useRecoilState(studioSearchCardOpenState);

    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <Dialog PaperProps={{className: classes.paper}} open={open}>
            <DialogActions className={classes.dialogBtn}>
                <div className={classes.flexEnd}>
                    <DialogCloseButton onClick={handleClickClose}/>
                </div>
                <StudioResultDialogTitle/>
            </DialogActions>
            <StudioSearchCard close={handleClickClose}/>
        </Dialog>
    )
}