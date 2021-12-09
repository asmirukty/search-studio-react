import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {useSetRecoilState} from "recoil";
import {studioSearchCardOpenState} from "../atom";

const useStyles = makeStyles(() =>
    createStyles({
        changeBtn: {
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            fontSize: 14,
            padding: 2,
            minWidth: 48,
            marginLeft: 4,
            right: 0,
            '&:hover': {
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                opacity: .8
            }
        }
    }))

export default function StudioResultSearchCardButton() {
    const classes = useStyles();
    const setOpen = useSetRecoilState(studioSearchCardOpenState);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Button className={classes.changeBtn} onClick={handleClickOpen}>
            変更
        </Button>
    );
}