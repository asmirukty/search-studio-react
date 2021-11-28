import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {areaChipState, maxAreaState, maxPeopleState, minAreaState, minPeopleState, peopleChipState, spaceOpenState} from "./atom";
import SearchChip from "../../atoms/searchChip";
import NewStudioDialog from "./newStudioDialog";
import NewSpaceDialogContent from "./newSpaceDialogContent";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

export default function NewSpaceDialog() {
    const classes = useStyles()
    const [spaceOpen, setSpaceOpen] = useRecoilState<boolean>(spaceOpenState);
    const [minArea, setMinArea] = useRecoilState<string|null>(minAreaState);
    const [maxArea, setMaxArea] = useRecoilState<string|null>(maxAreaState);
    const [minPeople, setMinPeople] = useRecoilState<string|null>(minPeopleState);
    const [maxPeople, setMaxPeople] = useRecoilState<string|null>(maxPeopleState);
    const [areaChip, setAreaChip] = useRecoilState<{min: string|null, max: string|null}>(areaChipState);
    const [peopleChip, setPeopleChip] = useRecoilState<{min: string|null, max: string|null}>(peopleChipState);

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
        <NewStudioDialog open={spaceOpen} dialogOpen={spaceDialogOpen}
                          handleCancel={spaceCancel} handleOk={spaceOk}
                          labelCheck={!areaChip.min && !areaChip.max && !peopleChip.min && !peopleChip.max}
                          label={'面積/人数を選択'}
                          chips={
                              <div className={classes.wrapChip}>
                                  <SearchChip minLabel={areaChip.min} maxLabel={areaChip.max} onDelete={areaChipDelete}/>
                                  <SearchChip minLabel={peopleChip.min} maxLabel={peopleChip.max} onDelete={peopleChipDelete}/>
                              </div>
                          }
                          dialogContent={<NewSpaceDialogContent/>}/>
    )
}