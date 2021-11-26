import React, {useState} from "react";
import {Button, Typography, Dialog,} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import DialogActions from "@material-ui/core/DialogActions";
import DialogCloseButton from "../../atoms/dialogCloseButton";
import StudioSearchCard from "../searchCardComponent/studioSearchCard";

const useStyles = makeStyles(() =>
    createStyles({
        changeBtn: {
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            fontSize: 14,
            padding: 0,
            marginLeft: 4,
            right: 0,
            '&:hover': {
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                opacity: .8
            }
        },
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
        },
        fontBold: {
            color: '#5A4628',
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }))

export default function StudioResultDialog(props: {state: any}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={classes.changeBtn} onClick={handleClickOpen}>変更</Button>
            <Dialog PaperProps={{className: classes.paper}} open={open}>
                <DialogActions className={classes.dialogBtn}>
                    <div className={classes.flexEnd}>
                        <DialogCloseButton close={handleClickClose}/>
                    </div>
                    <Typography variant='subtitle1' className={classes.fontBold}>検索条件</Typography>
                </DialogActions>
                <StudioSearchCard close={() => setOpen(false)} state={{
                    prefecture: [], city: [], line: [], station: [], studioName: null,
                    minArea: null, maxArea: null, minPeople: null, maxPeople: null, date: [],
                    fromStation: null, minPrice: null, maxPrice: null,
                    minMirror: null, maxMirror: null, detailCheck: []

                }}/>
            </Dialog>

        </div>
    )
}