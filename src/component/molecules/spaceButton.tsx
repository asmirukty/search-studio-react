import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import StudioSearchCardButton from "../atoms/studioSearchCardButton";
import {areaChipState, maxAreaState, maxPeopleState, minAreaState, minPeopleState, peopleChipState, spaceOpenState} from "../atom";
import SearchChip from "../atoms/searchChip";
import RangeLabel from "../atoms/rangeLabel";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    })
);

export default function SpaceButton() {
    const classes = useStyles();
    const [spaceOpen, setSpaceOpen] = useRecoilState<boolean>(spaceOpenState);
    const [minArea, setMinArea] = useRecoilState<number|null>(minAreaState);
    const [maxArea, setMaxArea] = useRecoilState<number|null>(maxAreaState);
    const [minPeople, setMinPeople] = useRecoilState<number|null>(minPeopleState);
    const [maxPeople, setMaxPeople] = useRecoilState<number|null>(maxPeopleState);
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