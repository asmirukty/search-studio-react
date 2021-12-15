import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState, useSetRecoilState} from "recoil";
import StudioSearchCardButton from "../atoms/studioSearchCardButton";
import {areaChipState, maxAreaState, maxPeopleState, minAreaState, minPeopleState, peopleChipState, spaceOpenState} from "../atom";
import SearchChip from "../atoms/searchChip";
import RangeLabel from "../atoms/rangeLabel";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 4
        }
    })
);

export default function SpaceButton() {
    const classes = useStyles();
    const setSpaceOpen = useSetRecoilState<boolean>(spaceOpenState);
    const setMinArea = useSetRecoilState<number|null>(minAreaState);
    const setMaxArea = useSetRecoilState<number|null>(maxAreaState);
    const setMinPeople = useSetRecoilState<number|null>(minPeopleState);
    const setMaxPeople = useSetRecoilState<number|null>(maxPeopleState);
    const [areaChip, setAreaChip] = useRecoilState<{min: number|null, max: number|null}>(areaChipState);
    const [peopleChip, setPeopleChip] = useRecoilState<{min: number|null, max: number|null}>(peopleChipState);

    const spaceDialogOpen = () => {
        setSpaceOpen(true);
        setMinArea(areaChip.min);
        setMaxArea(areaChip.max);
        setMinPeople(peopleChip.min);
        setMaxPeople(peopleChip.max);
    };

    const areaChipDelete = () => {
        setAreaChip({min: null, max: null});
    };

    const peopleChipDelete = () => {
        setPeopleChip({min: null, max: null});
    };

    return (
        <StudioSearchCardButton dialogOpen={spaceDialogOpen} label={'面積/人数を選択'}
                                chipDisplay={!(!areaChip.min && !areaChip.max && !peopleChip.min && !peopleChip.max)}>
            <div className={classes.wrapChip}>
                <SearchChip label={RangeLabel({min: areaChip.min, max: areaChip.max, unit: 'm²'})}
                            onDelete={areaChipDelete}/>
                <SearchChip label={RangeLabel({min: peopleChip.min, max: peopleChip.max, unit: '人'})}
                            onDelete={peopleChipDelete}/>
            </div>
        </StudioSearchCardButton>
    )
}