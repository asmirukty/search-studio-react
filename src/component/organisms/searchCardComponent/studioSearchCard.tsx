import React from "react";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent} from "@material-ui/core";
import StudioName from "./studioName";
import {Link} from "react-router-dom";
import SpaceDialog from "./spaceDialog";
import PlaceDialog from "./placeDialog";
import DateDialog from "./dateDialog";
import DetailDialog from "./detailDialog";
import {useRecoilValue} from "recoil";
import {cityChipState, lineChipState, prefectureChipState, stationChipState, studioNameState} from "./atom";
import {queryState} from "./querySelector";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            minWidth: 275,
        },
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
    }));

export default function StudioSearchCard(props: {close?: (value?: any) => void;}) {
    const classes = useStyles();
    const studioName = useRecoilValue<string|null>(studioNameState);
    const prefectureChip = useRecoilValue<{name: string, id: string}[]|any[]>(prefectureChipState);
    const cityChip = useRecoilValue<{name: string, id: string}[]|any[]>(cityChipState);
    const lineChip = useRecoilValue<{name: string, id: string}[]|any[]>(lineChipState);
    const stationChip = useRecoilValue<{name: string, id: string}[]|any[]>(stationChipState);
    const query = useRecoilValue<string[]>(queryState)

    const handleClose = () => {
        props.close && props.close()
    }

    return (
        <Card className={classes.root}>
            <CardContent>
                <PlaceDialog/>
                <StudioName/>
                <SpaceDialog/>
                <DateDialog/>
                <DetailDialog/>
                <div style={{display: 'flex'}}>
                    <Button className={classes.searchBtn}
                            disabled={prefectureChip.length === 0 && cityChip.length === 0 && lineChip.length === 0 && stationChip.length === 0 && !studioName}
                            onClick={handleClose}
                            component={Link}
                            to={{
                                pathname: '/studios/',
                                search: `${query.join('&')}`,
                            }}>
                        検 索
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}