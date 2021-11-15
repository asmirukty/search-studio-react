import React from 'react';
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";
import StudioDialog from "./studioDialog";
import useRangeSelect from "../use-range-select";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const minAreaOptions = [
    '下限なし', '10m²',　'15m²', '20m²', '25m²', '30m²', '40m²', '50m²',
    '60m²', '80m²', '100m²', '120m²', '150m²'
];

const maxAreaOptions = [
    '上限なし', '10m²',　'15m²', '20m²', '25m²', '30m²', '40m²', '50m²',
    '60m²', '80m²', '100m²', '120m²', '150m²'
];

const minPeopleOptions = [
    '下限なし', '1人',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人'
];

const maxPeopleOptions = [
    '上限なし',　'3人', '5人',　'8人', '10人',　'15人' , '20人',　'25人', '30人', '40人', '50人',
    '60人', '80人', '100人'
];

const useStyles = makeStyles(() =>
    createStyles({
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
            marginBottom: 12
        },
        formControl: {
            margin: 4,
            minWidth: 120,
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px'
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        menuPaper: {
            maxHeight: 300
        }
    }));

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4,
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

interface SpaceDialogProps {
    minArea: any,
    maxArea: any,
    minPeople: any,
    maxPeople: any,
    changeMinArea: (value: any[]) => void;
    changeMaxArea: (value: any[]) => void;
    changeMinPeople: (value: any[]) => void;
    changeMaxPeople: (value: any[]) => void;
    deleteArea: () => void;
    deletePeople: () => void;
}

export default function SpaceDialog(props: SpaceDialogProps) {
    const classes = useStyles()
    const {minArea, maxArea, minPeople, maxPeople} = props;
    const [selectMinArea, selectMaxArea, changeMinArea, changeMaxArea, deleteArea] = useRangeSelect(minArea, maxArea, props.deleteArea)
    const [selectMinPeople, selectMaxPeople, changeMinPeople, changeMaxPeople, deletePeople] = useRangeSelect(minPeople, maxPeople, props.deletePeople)

    return (
        <StudioDialog
            funcs={[props.changeMinArea, props.changeMaxArea, props.changeMinPeople, props.changeMaxPeople]}
            state={[selectMinArea, selectMaxArea, selectMinPeople, selectMaxPeople]}
            labelCheck={!minArea && !maxArea && !minPeople && !maxPeople}
            label={'面積/人数を選択'}
            chips={
                <div>
                    {(minArea && maxArea) &&
                        <Chip size='small' key={'area'} label={`${minArea}~${maxArea}`} onDelete={deleteArea}/>}
                    {(minArea && !maxArea) &&
                        <Chip size='small' key={'minArea'} label={`${minArea}~`} onDelete={deleteArea}/>}
                    {(!minArea && maxArea) &&
                        <Chip size='small' key={'maxArea'} label={`~${maxArea}`} onDelete={deleteArea}/>}
                    {(minPeople && maxPeople) &&
                        <Chip size='small' key={'people'} label={`${minPeople}~${maxPeople}`} onDelete={deletePeople}/>}
                    {(minPeople && !maxPeople) &&
                    <Chip size='small' key={'minPeople'} label={`${minPeople}~`} onDelete={deletePeople}/>}
                    {(!minPeople && maxPeople) &&
                        <Chip size='small' key={'maxPeople'} label={`~${maxPeople}`} onDelete={deletePeople}/>}
                </div>}
            content={
                <div>
                    <Typography className={classes.typ} variant={'subtitle1'}>面積</Typography>
                    <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={selectMinArea ? selectMinArea : minAreaOptions[0]}
                                onChange={changeMinArea}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    minAreaOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={selectMaxArea && index >= maxAreaOptions.indexOf(selectMaxArea)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <p>~</p>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={selectMaxArea ? selectMaxArea : maxAreaOptions[0]}
                                onChange={changeMaxArea}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    maxAreaOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={index !== 0 && index <= minAreaOptions.indexOf(selectMinArea)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <Typography className={classes.typ} variant={'subtitle1'}>人数</Typography>
                    <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={selectMinPeople ? selectMinPeople : minPeopleOptions[0]}
                                onChange={changeMinPeople}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    minPeopleOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={selectMaxPeople && index > maxPeopleOptions.indexOf(selectMaxPeople)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <p>~</p>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={selectMaxPeople ? selectMaxPeople : maxPeopleOptions[0]}
                                onChange={changeMaxPeople}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    maxPeopleOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={index !== 0 && index < minPeopleOptions.indexOf(selectMinPeople)}>{option}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
            }/>
    )
}