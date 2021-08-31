import React, { useState } from 'react';
import {DialogContent} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import FromStation from "./detailDialogComponent/fromStation";
import Price from "./detailDialogComponent/price";
import Reserve from "./detailDialogComponent/reserve";
import StudioFacilities from "./detailDialogComponent/studioFacilities";
import RoomFacilities from "./detailDialogComponent/roomFacilities";
import StudioDialog from "../searchDialog";

const useStyles = makeStyles(() =>
    createStyles({
        right: {
            textAlign: 'right'
        },
        btn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '3px 4px',
            margin: '0 0 8px auto',
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
        <StudioDialog label={'もっとしぼり込む >'} btn={'detailBtn'}>
            <DialogContent className={classes.content}>
                <FromStation/>
                <Price/>
                <Reserve/>
                <StudioFacilities/>
                <RoomFacilities/>
            </DialogContent>
        </StudioDialog>
    );
}
