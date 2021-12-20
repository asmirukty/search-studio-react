import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Paper} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultChip from "../molecules/studioResultChip";
import StudioPlace from "../molecules/studioPlace";
import StudioSpace from "../molecules/studioSpace";
import StudioDate from "../molecules/studioDate";
import StudioDetail from "../molecules/studioDetail";
import StudioSearchButton from "../atoms/studioSearchButton";
import NormalSubTitle from "../atoms/NormalSubTitle";
import SearchOutlineButton from "../atoms/searchOutlineButton";
import {useRecoilValue} from "recoil";
import {dateOpenState, detailOpenState, placeOpenState, spaceOpenState} from "../atom";
import StudioSearchCard from "./studioSearchCard";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        topCard: {
            color: "#5A4628",
            margin: '0 auto 8px',
            backgroundColor: 'white',
            borderRadius: 4,
            minWidth: 250,
            maxWidth: 360,
            height: 34,
            boxShadow:'4px 4px 4px #F9F5F0',
        },
        flex: {
            minWidth: 240,
            display: 'flex',
            margin: '2px 4px 2px 8px'
        },
        chip: {
            width: '100%',
            marginRight: 4,
            //backgroundColor: 'white',
            //border: 'solid 1px #D7D2C8'
            //boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
        },
        btn: {
            padding: 0,
            margin: 4,
            minWidth: 48,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
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

export default function StudioReSearchCard(props: {isWide?: boolean}) {
    const classes = useStyles();
    const {isWide} = props;
    const [open, setOpen] = useState(false);
    const placeOpen = useRecoilValue(placeOpenState);
    const spaceOpen = useRecoilValue(spaceOpenState);
    const dateOpen = useRecoilValue(dateOpenState);
    const detailOpen = useRecoilValue(detailOpenState);

    useEffect(() => {
        if (isWide || placeOpen || spaceOpen || dateOpen || detailOpen) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [isWide])

    const handleClick = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <>
            <div className={classes.topCard}>
                <div className={classes.flex}>
                    <div style={{minWidth: 60, margin: 'auto'}}><NormalSubTitle>検索条件</NormalSubTitle></div>
                    <div className={classes.chip}>
                        <StudioResultChip/>
                    </div>
                    {
                        !props.isWide &&
                        (open ? <SearchOutlineButton label={'閉じる'} onClick={handleClick}/>
                            : <Button className={classes.btn} onClick={handleClick}>変更</Button>)
                    }
                </div>
            </div>
            {open && <StudioSearchCard/>}
        </>
    );
}