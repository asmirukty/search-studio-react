import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {areaChipState, maxAreaState, maxPeopleState, minAreaState, minPeopleState, peopleChipState, spaceOpenState} from "./atom";
import SearchChip from "../../atoms/searchChip";
import StudioDialog from "../../templates/studioDialog";
import SpaceDialogContent from "./spaceDialogContent";
import RangeSearchChip from "../../molecules/rangeSearchChip";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

export default function SpaceDialog() {
    const classes = useStyles()
    const [spaceOpen, setSpaceOpen] = useRecoilState<boolean>(spaceOpenState);
    const [minArea, setMinArea] = useRecoilState<number|null>(minAreaState);
    const [maxArea, setMaxArea] = useRecoilState<number|null>(maxAreaState);
    const [minPeople, setMinPeople] = useRecoilState<number|null>(minPeopleState);
    const [maxPeople, setMaxPeople] = useRecoilState<number|null>(maxPeopleState);
    const [areaChip, setAreaChip] = useRecoilState<{min: number|null, max: number|null}>(areaChipState);
    const [peopleChip, setPeopleChip] = useRecoilState<{min: number|null, max: number|null}>(peopleChipState);

    const spaceDialogOpen = () => {
        setSpaceOpen(true)
        setMinArea(areaChip.min)
        setMaxArea(areaChip.max)
        setMinPeople(peopleChip.min)
        setMaxPeople(peopleChip.max)
    }

    const spaceOk = () => {
        setSpaceOpen(false)
        setAreaChip({min: minArea, max: maxArea})
        setPeopleChip({min: minPeople, max: maxPeople})
    }

    const spaceCancel = () => {
        setSpaceOpen(false)
    }

    const areaChipDelete = () => {
        setAreaChip({min: null, max: null})
    }

    const peopleChipDelete = () => {
        setPeopleChip({min: null, max: null})
    }

    return (
        <StudioDialog open={spaceOpen} dialogOpen={spaceDialogOpen}
                      handleCancel={spaceCancel} handleOk={spaceOk}
                      title={'広さ'}
                      labelCheck={!areaChip.min && !areaChip.max && !peopleChip.min && !peopleChip.max}
                      label={'面積/人数を選択'}
                      chips={
                             <div className={classes.wrapChip}>
                                 <RangeSearchChip minLabel={areaChip.min} maxLabel={areaChip.max} unit={'m²'} onDelete={areaChipDelete}/>
                                 <RangeSearchChip minLabel={peopleChip.min} maxLabel={peopleChip.max} unit={'人'} onDelete={peopleChipDelete}/>
                             </div>
                         }
                      dialogContent={<SpaceDialogContent/>}/>
    )
}