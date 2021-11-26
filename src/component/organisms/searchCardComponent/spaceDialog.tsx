import {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import StudioDialog from "../../molecules/studioDialog";
import useRangeSelect from "../../hooks/use-range-select";
import {Typography} from "@material-ui/core";
import SearchChip from "../../atoms/searchChip";
import {maxAreaOptions, maxPeopleOptions, minAreaOptions, minPeopleOptions} from "./itemsAndOptions/spaceOptions";
import MinMaxSelect from "../../molecules/minMaxSelect";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        }
    }));

interface SpaceDialogProps {
    minArea: any,maxArea: any, minPeople: any,maxPeople: any,
    changeMinArea: (value: any[]) => void, changeMaxArea: (value: any[]) => void,
    changeMinPeople: (value: any[]) => void, changeMaxPeople: (value: any[]) => void,
    deleteArea: () => void, deletePeople: () => void
}

export default function SpaceDialog(props: SpaceDialogProps) {
    const classes = useStyles()
    const {minArea, maxArea, minPeople, maxPeople} = props;
    const [open, setOpen] = useState(false)
    const [selectMinArea, selectMaxArea, changeMinArea, changeMaxArea, deleteArea] = useRangeSelect(open, minArea, maxArea, props.deleteArea)
    const [selectMinPeople, selectMaxPeople, changeMinPeople, changeMaxPeople, deletePeople] = useRangeSelect(open, minPeople, maxPeople, props.deletePeople)

    return (
        <StudioDialog
            funcs={[props.changeMinArea, props.changeMaxArea, props.changeMinPeople, props.changeMaxPeople]}
            state={[selectMinArea, selectMaxArea, selectMinPeople, selectMaxPeople]}
            openCheck={setOpen}
            title={'広さ'}
            labelCheck={!minArea && !maxArea && !minPeople && !maxPeople}
            label={'面積/人数を選択'}
            chips={
                <div className={classes.wrapChip}>
                    <SearchChip key={'area'} minLabel={minArea} maxLabel={maxArea} onDelete={deleteArea}/>
                    <SearchChip key={'people'} minLabel={minPeople} maxLabel={maxPeople} onDelete={deletePeople}/>
                </div>
            }
            content={
                <div style={{padding: '20px 24px 8px'}}>
                    <Typography className={classes.typ} variant={'subtitle1'}>面積</Typography>
                    <MinMaxSelect min={selectMinArea} max={selectMaxArea}
                                  minOptions={minAreaOptions} maxOptions={maxAreaOptions}
                                  minNullValue={minAreaOptions[0]} maxNullValue={maxAreaOptions[0]} disableEqual
                                  changeMin={changeMinArea} changeMax={changeMaxArea}/>
                    <Typography className={classes.typ} variant={'subtitle1'}>人数</Typography>
                    <MinMaxSelect min={selectMinPeople} max={selectMaxPeople}
                                  minOptions={minPeopleOptions} maxOptions={maxPeopleOptions}
                                  minNullValue={minPeopleOptions[0]} maxNullValue={maxPeopleOptions[0]}
                                  changeMin={changeMinPeople} changeMax={changeMaxPeople}/>
                </div>
            }/>
    )
}