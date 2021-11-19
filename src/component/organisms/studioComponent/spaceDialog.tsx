import React, {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import StudioDialog from "./studioDialog";
import useRangeSelect from "../use-range-select";
import {Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchChip from "../../molecules/searchChip";
import {maxAreaOptions, maxPeopleOptions, minAreaOptions, minPeopleOptions} from "./spaceOptions";

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
    const [open, setOpen] = useState(false)
    const [selectMinArea, selectMaxArea, changeMinArea, changeMaxArea, deleteArea] = useRangeSelect(open, minArea, maxArea, props.deleteArea)
    const [selectMinPeople, selectMaxPeople, changeMinPeople, changeMaxPeople, deletePeople] = useRangeSelect(open, minPeople, maxPeople, props.deletePeople)

    return (
        <StudioDialog
            funcs={[props.changeMinArea, props.changeMaxArea, props.changeMinPeople, props.changeMaxPeople]}
            state={[selectMinArea, selectMaxArea, selectMinPeople, selectMaxPeople]}
            openCheck={setOpen}
            labelCheck={!minArea && !maxArea && !minPeople && !maxPeople}
            label={'面積/人数を選択'}
            chips={
                <div>
                    <SearchChip key={'area'} onDelete={deleteArea}
                          label={
                              (minArea && maxArea) ? `${minArea}~${maxArea}` : (
                              (minArea && !maxArea) ? `${minArea}~` : (
                              (!minArea && maxArea) && `~${maxArea}`)
                              )
                          }
                    />
                    <SearchChip key={'people'} onDelete={deletePeople}
                          label={
                              (minPeople && maxPeople) ? `${minPeople}~${maxPeople}` : (
                                  (minPeople && !maxPeople) ? `${minPeople}~` : (
                                      (!minPeople && maxPeople) && `~${maxPeople}`)
                              )
                          }
                    />
                </div>}
            content={
                <div style={{padding: '20px 24px 8px'}}>
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