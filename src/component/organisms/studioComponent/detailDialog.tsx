import React, {useState} from 'react';
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import MuiChip from "@material-ui/core/Chip";
import StudioDialog from "./studioDialog";
import useRangeSelect from "../use-range-select";
import {InputLabel, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useCheck from "../use-check";
import NewSearchCheckbox from "./newSearchCheckbox";
import {
    amenityOptions, floorMaterialOptions,
    fromStationOptions, lightAndFilmingOptions,
    maxMirrorOptions,
    maxPriceOptions,
    minMirrorOptions,
    minPriceOptions,
    reservationOptions, roomFacilityOptions, soundAndMovieOptions, studioFacilityOptions
} from "./detailOptions";

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
        },
        checkArray: {
            display: 'flex',
            flexWrap: 'wrap',
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
    detailCheck: any[],
    changeFromStation: (value: any[]) => void;
    changeMinPrice: (value: any[]) => void;
    changeMaxPrice: (value: any[]) => void;
    changeMinMirror: (value: any[]) => void;
    changeMaxMirror: (value: any[]) => void;
    changeDetailCheck: (value: any[]) => void;
    deleteFromStation: () => void;
    deletePrice: () => void;
    deleteMirror: () => void;
    deleteDetailCheck: (value: any) => void;
}

export default function DetailDialog(props: DetailDialogProps) {
    const classes = useStyles()
    const {fromStation, minPrice, maxPrice, minMirror, maxMirror} = props;
    const [open, setOpen] = useState(false)
    const [notUse, selectFromStation, changeNotUse, changeFromStation, deleteFromStation] = useRangeSelect(open, null, fromStation, props.deleteFromStation)
    const [selectMinPrice, selectMaxPrice, changeMinPrice, changeMaxPrice, deletePrice] = useRangeSelect(open, minPrice, maxPrice, props.deletePrice)
    const [selectMinMirror, selectMaxMirror, changeMinMirror, changeMaxMirror, deleteMirror] = useRangeSelect(open, minMirror, maxMirror, props.deleteMirror)
    const [detailCheck, check, unCheck, deleteChip] = useCheck(open, props.detailCheck, props.deleteDetailCheck)

    {/**
     checkboxのchecked={includes}いらないかも
     */}

    return (
        <StudioDialog
            funcs={[props.changeFromStation, props.changeMinPrice, props.changeMaxPrice, props.changeMinMirror, props.changeMaxMirror, props.changeDetailCheck]}
            state={[selectFromStation, selectMinPrice, selectMaxPrice, selectMinMirror, selectMaxMirror, detailCheck]}
            openCheck={(open) => {setOpen(open)}}
            detail labelCheck
            label={'もっとしぼり込む >'}
            chips={
                <div>
                    {
                        fromStation && <Chip size="small" key={'fromStation'} label={`駅${fromStation}`} onDelete={deleteFromStation}/>
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
                        detailCheck &&
                        ['キャンセル無料期間あり', ...reservationOptions, ...studioFacilityOptions, '鏡2面'].map((option) =>
                            detailCheck.includes(option) &&
                            <Chip size='small' key={option} label={option} onDelete={deleteChip(option)}/>
                        )
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
                    {
                        detailCheck &&
                        [...lightAndFilmingOptions, ...soundAndMovieOptions, ...floorMaterialOptions, ...amenityOptions].map((option) =>
                            detailCheck.includes(option) &&
                            <Chip size='small' key={option} label={option} onDelete={deleteChip(option)}/>
                        )
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
                    <NewSearchCheckbox item={'キャンセル無料期間あり'} itemName={'キャンセル無料期間あり'} key={'キャンセル無料期間あり'} open={open} checked={detailCheck.includes('キャンセル無料期間あり')} itemChecked={check} itemUnChecked={unCheck}/>
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
                    <Typography className={classes.typ} variant={'subtitle1'}>予約</Typography>
                    <div className={classes.checkArray}>
                        {
                            reservationOptions.map((option) => (
                                <NewSearchCheckbox item={option} itemName={option} key={option} checked={detailCheck.includes(option)} itemChecked={check} itemUnChecked={unCheck}/>
                            ))
                        }
                    </div>
                    <Typography className={classes.typ} variant={'subtitle1'}>スタジオ設備</Typography>
                    <div className={classes.checkArray}>
                        {
                            studioFacilityOptions.map((option) => (
                                <NewSearchCheckbox item={option} itemName={option} key={option} checked={detailCheck.includes(option)} itemChecked={check} itemUnChecked={unCheck}/>
                            ))
                        }
                    </div>
                    <Typography className={classes.typ} variant={'subtitle1'}>部屋設備・備品</Typography>
                    <Typography className={classes.typ} variant={'subtitle2'}>鏡</Typography>
                    <NewSearchCheckbox item={'鏡2面'} itemName={'2面'} key={'2面'} checked={detailCheck.includes('鏡2面')} itemChecked={check} itemUnChecked={unCheck}/>
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
                    <Typography className={classes.typ} variant={'subtitle2'}>照明・撮影</Typography>
                    <div className={classes.checkArray}>
                        {
                            lightAndFilmingOptions.map((option) => (
                                <NewSearchCheckbox item={option} itemName={option} key={option} checked={detailCheck.includes(option)} itemChecked={check} itemUnChecked={unCheck}/>
                            ))
                        }
                    </div>
                    <Typography className={classes.typ} variant={'subtitle2'}>音響・映像</Typography>
                    <div className={classes.checkArray}>
                        {
                            soundAndMovieOptions.map((option) => (
                                <NewSearchCheckbox item={option} itemName={option} key={option} checked={detailCheck.includes(option)} itemChecked={check} itemUnChecked={unCheck}/>
                            ))
                        }
                    </div>
                    <Typography className={classes.typ} variant={'subtitle2'}>床材</Typography>
                    {
                        floorMaterialOptions.map((option) => (
                            <NewSearchCheckbox item={option} itemName={option} key={option} checked={detailCheck.includes(option)} itemChecked={check} itemUnChecked={unCheck}/>
                        ))
                    }
                    <Typography className={classes.typ} variant={'subtitle2'}>その他設備・備品</Typography>
                    {
                        amenityOptions.map((option) => (
                            <NewSearchCheckbox item={option} itemName={option} key={option} checked={detailCheck.includes(option)} itemChecked={check} itemUnChecked={unCheck}/>
                        ))
                    }
                </div>
            }/>
    )
}