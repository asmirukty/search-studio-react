import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";
import StudioDialog from "./studioDialog";
import useRangeSelect from "../use-range-select";
import {InputLabel, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const fromStationOptions = [
    '指定なし',　'3分以内', '5分以内',　'7分以内', '10分以内',
];

const minPriceOptions = [
    '下限なし',　'500円', '1000円',　'1500円', '2000円',　'2500円', '3000円',　'3500円', '4000円',
    '4500円', '5000円',　'6000円', '7000円',　'8000円', '9000円', '10000円'
];

const maxPriceOptions = [
    '上限なし',　'500円', '1000円',　'1500円', '2000円',　'2500円', '3000円',　'3500円', '4000円',
    '4500円', '5000円',　'6000円', '7000円',　'8000円', '9000円', '10000円'
];

const minMirrorOptions = [
    '下限なし',　'5m', '10m',　'15m', '20m',　'25m', '30m',　'35m', '40m', '45m', '50m',
];

const maxMirrorOptions = [
    '上限なし',　'5m', '10m',　'15m', '20m',　'25m', '30m',　'35m', '40m', '45m', '50m',
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
        label: {
            color: '#5A4628',
            width: 160
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

interface DetailDialogProps {
    fromStation: any,
    minPrice: any,
    maxPrice: any,
    minMirror: any,
    maxMirror: any,
    changeFromStation: (value: any[]) => void;
    changeMinPrice: (value: any[]) => void;
    changeMaxPrice: (value: any[]) => void;
    changeMinMirror: (value: any[]) => void;
    changeMaxMirror: (value: any[]) => void;
    deleteFromStation: () => void;
    deletePrice: () => void;
    deleteMirror: () => void;
}

export default function DetailDialog(props: DetailDialogProps) {
    const classes = useStyles()
    const {fromStation, minPrice, maxPrice, minMirror, maxMirror} = props;
    const [open, setOpen] = useState(false)
    const [notUse, selectFromStation, changeNotUse, changeFromStation, deleteFromStation] = useRangeSelect(open, null, fromStation, props.deleteFromStation)
    const [selectMinPrice, selectMaxPrice, changeMinPrice, changeMaxPrice, deletePrice] = useRangeSelect(open, minPrice, maxPrice, props.deletePrice)
    const [selectMinMirror, selectMaxMirror, changeMinMirror, changeMaxMirror, deleteMirror] = useRangeSelect(open, minMirror, maxMirror, props.deleteMirror)

    return (
        <StudioDialog
            funcs={[props.changeFromStation, props.changeMinPrice, props.changeMaxPrice, props.changeMinMirror, props.changeMaxMirror]}
            state={[selectFromStation, selectMinPrice, selectMaxPrice, selectMinMirror, selectMaxMirror]}
            openCheck={(open) => {setOpen(open)}}
            detail labelCheck
            label={'もっとしぼり込む >'}
            chips={
                <div>
                    {
                        fromStation && <Chip size="small" key={'fromStation'} label={fromStation} onDelete={deleteFromStation}/>
                    }
                    {
                        (minPrice || maxPrice) &&
                        <Chip size='small' key={'price'} onDelete={deletePrice}
                           label={
                               (minPrice && maxPrice) ? `${minPrice}~${maxPrice}` : (
                                   (minPrice) ? `${minPrice}~` : `~${maxPrice}`)
                           }
                        />
                    }
                    {
                        (minMirror || maxMirror) &&
                        <Chip size='small' key={'mirror'} onDelete={deleteMirror}
                           label={
                               (minMirror && maxMirror) ? `${minMirror}~${maxMirror}` : (
                                   (minMirror) ? `${minMirror}~` : `~${maxMirror}`)
                           }
                        />
                    }
                </div>}
            content={
                <div style={{padding: '20px 24px 8px'}}>
                    <Typography className={classes.typ} variant={'subtitle1'}>駅から徒歩</Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={selectFromStation ? selectFromStation : fromStationOptions[0]}
                            onChange={changeFromStation}
                            displayEmpty
                            className={classes.selectEmpty}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {
                                fromStationOptions.map((option: any, index) => (
                                    <MenuItem value={option} key={index}>{option}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <Typography className={classes.typ} variant={'subtitle1'}>料金</Typography>
                    <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink className={classes.label}>30分あたりの料金</InputLabel>
                            <Select
                                value={selectMinPrice ? selectMinPrice : minPriceOptions[0]}
                                onChange={changeMinPrice}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    minPriceOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={selectMaxPrice && index >= maxPriceOptions.indexOf(selectMaxPrice)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <p>~</p>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={selectMaxPrice ? selectMaxPrice : maxPriceOptions[0]}
                                onChange={changeMaxPrice}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    maxPriceOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={index !== 0 && index <= minPriceOptions.indexOf(selectMinPrice)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    <Typography className={classes.typ} variant={'subtitle1'}>部屋設備・備品</Typography>
                    <Typography className={classes.typ} variant={'subtitle2'}>鏡</Typography>
                    <div className={classes.select}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink className={classes.label}>横幅</InputLabel>
                            <Select
                                value={selectMinMirror ? selectMinMirror : minMirrorOptions[0]}
                                onChange={changeMinMirror}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    minMirrorOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={selectMaxMirror && index > maxMirrorOptions.indexOf(selectMaxMirror)}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <p>~</p>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={selectMaxMirror ? selectMaxMirror : maxMirrorOptions[0]}
                                onChange={changeMaxMirror}
                                displayEmpty
                                className={classes.selectEmpty}
                                MenuProps={{ classes: { paper: classes.menuPaper } }}
                            >
                                {
                                    maxMirrorOptions.map((option: any, index) => (
                                        <MenuItem value={option} key={index}
                                                  disabled={index !== 0 && index < minMirrorOptions.indexOf(selectMinMirror)}>{option}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
            }/>
    )
}