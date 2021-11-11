import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import MuiChip from "@material-ui/core/Chip";
import DialogActions from "@material-ui/core/DialogActions";
import {Close} from "@material-ui/icons";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4,
        fontSize: 'small'
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

const useStyles = makeStyles(() =>
    createStyles({
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
        paper: {
            margin: 12,
            flexGrow: 1
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
    }),
);

interface DialogProps {
    children: React.ReactNode;
    label: string;
    detail?: boolean;
    chip: string[];
    chipDelete: (value: string) => void;
    chipChange: (value: string) => void;
}

export default function StudioDialog(props: DialogProps) {
    const classes = useStyles();
    const [open, setOpen] = useState(false); //dialogが開いているか
    const [chip, setChip] = useState<string[]>([]);  //chipで表示するitem

    useEffect(() => {
        setChip(props.chip)
    },[props.chip])

    const dialogOpen = () => {
        setOpen(true);
    }; //dialogを開く

    const chipDelete = (item: string) => () => {
        setChip(prevState => (
            prevState.filter((element: string) => element != item)
        ));
        props.chipDelete(item);
    }; //chipからitemを削除し、chipDeleteにitemを渡す

    const handleCancel = () => {
        setOpen(false);
    }; //dialogを閉じる

    const handleOk = () => {
        setOpen(false);
        props.chipChange(props.label);
    }; //dialogを閉じ、okのfunction

    return (
        <div>
            {
                props.detail ? (
                    <div className={classes.right}>
                        {
                            chip.length > 0 && (
                                chip.map((item) => (
                                    <Chip key={item} label={item} onDelete={chipDelete(item)}/>
                                ))
                            )
                        }
                        <Button className={classes.detailBtn} onClick={dialogOpen}>
                            {props.label}
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button fullWidth variant="outlined" className={classes.btn} onClick={dialogOpen}>
                            {
                                chip.length === 0 ? (props.label) : (
                                    chip.map((item) => (
                                        <Chip key={item} label={item} onDelete={chipDelete(item)}/>
                                    ))
                                )
                            }
                        </Button>
                    </div>
                )
            }
            <Dialog keepMounted classes={{paper: classes.paper}} open={open} aria-labelledby="confirmation-dialog-title">
                <DialogActions className={classes.dialogBtn}>
                    <Button autoFocus onClick={handleCancel} className={classes.dialogClose}>
                        <Close fontSize='small'/>
                    </Button>
                    <Button onClick={handleOk} className={classes.dialogOk}>
                        決定
                    </Button>
                </DialogActions>
                <DialogContent className={classes.content}>
                    {props.children}
                </DialogContent>
            </Dialog>
        </div>
    );
}