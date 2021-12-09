import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {placeChipState, studioNameState} from "../atom";
import {queryState} from "../organisms/querySelector";

const useStyles = makeStyles(() =>
    createStyles({
        searchBtn: {
            fontSize: 16,
            padding: '6px 36px',
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            margin: 'auto',
            '&.Mui-disabled': {
                color: '#F9F5F0',
                opacity: .6
            },
            '&:hover': {
                color: '#F9F5F0',
                backgroundColor: '#1D356A',
                opacity: .8
            }
        }
    })
);

export default function StudioSearchButton(props: {close?: (value?: any) => void;}) {
    const classes = useStyles();
    const placeChip = useRecoilValue(placeChipState);
    const studioName = useRecoilValue<string|null>(studioNameState);
    const query = useRecoilValue<string[]>(queryState);

    const handleClose = () => {
        props.close && props.close()
    }

    return (
        <Button className={classes.searchBtn}
                disabled={placeChip.length === 0 && !studioName}
                onClick={handleClose}
                component={Link}
                to={{
                    pathname: '/studios/',
                    search: `${query.join('&')}`
                }}>
            検 索
        </Button>
    )
}