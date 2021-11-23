import React, {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import StudioDialog from "./studioDialog";
import useRangeSelect from "../use-range-select";
import {Typography} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import useCheck from "../use-check";
import {amenityOptions, floorMaterialOptions, fromStationOptions, lightAndFilmingOptions,
    maxMirrorOptions, maxPriceOptions, minMirrorOptions, minPriceOptions, reservationOptions,
    soundAndMovieOptions, studioFacilityOptions} from "./detailOptions";
import SearchChip from "../../molecules/searchChip";
import SelectOption from "./selectOption";
import MinMaxSelect from "./minMaxSelect";
import DetailCheckbox from "./detailCheckbox";
import useSelect from "../use-select";

const useStyles = makeStyles(() =>
    createStyles({
        detailChip: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        checkArray: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }));

interface DetailDialogProps {
    fromStation: any, minPrice: any, maxPrice: any, minMirror: any, maxMirror: any, detailCheck: any[],
    changeFromStation: (value: any[]) => void, changeMinPrice: (value: any[]) => void, changeMaxPrice: (value: any[]) => void,
    changeMinMirror: (value: any[]) => void, changeMaxMirror: (value: any[]) => void, changeDetailCheck: (value: any[]) => void,
    deleteFromStation: () => void, deletePrice: () => void, deleteMirror: () => void, deleteDetailCheck: (value: any) => void;
}

export default function DetailDialog(props: DetailDialogProps) {
    const classes = useStyles()
    const {fromStation, minPrice, maxPrice, minMirror, maxMirror} = props;
    const [open, setOpen] = useState(false)
    const [selectFromStation, changeFromStation, deleteFromStation] = useSelect(open, fromStation, props.deleteFromStation)
    const [selectMinPrice, selectMaxPrice, changeMinPrice, changeMaxPrice, deletePrice] = useRangeSelect(open, minPrice, maxPrice, props.deletePrice)
    const [selectMinMirror, selectMaxMirror, changeMinMirror, changeMaxMirror, deleteMirror] = useRangeSelect(open, minMirror, maxMirror, props.deleteMirror)
    const [detailCheck, check, unCheck, deleteChip] = useCheck(open, props.detailCheck, props.deleteDetailCheck)

    return (
        <StudioDialog
            funcs={[props.changeFromStation, props.changeMinPrice, props.changeMaxPrice, props.changeMinMirror, props.changeMaxMirror, props.changeDetailCheck]}
            state={[selectFromStation, selectMinPrice, selectMaxPrice, selectMinMirror, selectMaxMirror, detailCheck]}
            openCheck={setOpen} detail labelCheck label={'もっとしぼり込む >'}
            chips={
                <div className={classes.detailChip}>
                    <SearchChip key={'fromStation'} label={fromStation && `駅${fromStation}`} onDelete={deleteFromStation}/>
                    <SearchChip key={'cancel'} label={detailCheck.includes('キャンセル無料期間あり') ? 'キャンセル無料期間あり' : null} onDelete={deleteChip('キャンセル無料期間あり')}/>
                    <SearchChip key={'price'} minLabel={minPrice} maxLabel={maxPrice} onDelete={deletePrice}/>
                    {
                        [...reservationOptions, ...studioFacilityOptions].map((option) =>
                            detailCheck.includes(option) && <SearchChip key={option} label={option} onDelete={deleteChip(option)}/>
                        )
                    }
                    <SearchChip key={'twoMirror'} label={detailCheck.includes('2面') ? '鏡2面' : null} onDelete={deleteChip('2面')}/>
                    <SearchChip key={'mirror'} minLabel={minMirror} maxLabel={maxMirror} onDelete={deleteMirror}/>
                    {
                        [...lightAndFilmingOptions, ...soundAndMovieOptions, ...floorMaterialOptions, ...amenityOptions].map((option) =>
                            detailCheck.includes(option) && <SearchChip key={option} label={option} onDelete={deleteChip(option)}/>
                        )
                    }
                </div>
            }
            content={
                <div style={{padding: '20px 24px 8px'}}>
                    <Typography className={classes.typ} variant={'subtitle1'}>駅から徒歩</Typography>
                    <SelectOption value={selectFromStation} nullValue={fromStationOptions[0]} onChange={changeFromStation}>
                        {
                            fromStationOptions.map((option: any, index) =>
                                <MenuItem value={option} key={index}>{option}</MenuItem>
                            )
                        }
                    </SelectOption>
                    <DetailCheckbox title={'料金'} one options={['キャンセル無料期間あり']} detailCheck={detailCheck} check={check} unCheck={unCheck}/>
                    <MinMaxSelect minLabel={'30分あたり'} min={selectMinPrice} max={selectMaxPrice}
                                  minOptions={minPriceOptions} maxOptions={maxPriceOptions}
                                  minNullValue={minPriceOptions[0]} maxNullValue={maxPriceOptions[0]} disableEqual
                                  changeMin={changeMinPrice} changeMax={changeMaxPrice}/>
                    <DetailCheckbox title={'予約'} one options={reservationOptions} detailCheck={detailCheck} check={check} unCheck={unCheck}/>
                    <DetailCheckbox title={'スタジオ設備'} one options={studioFacilityOptions} detailCheck={detailCheck} check={check} unCheck={unCheck}/>
                    <Typography className={classes.typ} variant={'subtitle1'}>部屋設備・備品</Typography>
                    <DetailCheckbox title={'鏡'} options={['2面']} detailCheck={detailCheck} check={check} unCheck={unCheck}/>
                    <MinMaxSelect minLabel={'横幅'} min={selectMinMirror} max={selectMaxMirror}
                                  minOptions={minMirrorOptions} maxOptions={maxMirrorOptions} disableEqual
                                  minNullValue={minMirrorOptions[0]} maxNullValue={maxMirrorOptions[0]}
                                  changeMin={changeMinMirror} changeMax={changeMaxMirror}/>
                    {
                        [
                            {title: '照明・撮影', options: lightAndFilmingOptions},
                            {title: '音響・映像', options: soundAndMovieOptions},
                            {title: '床材', options: floorMaterialOptions},
                            {title: 'その他設備・備品', options: amenityOptions}
                        ].map((item, index) =>
                            <DetailCheckbox key={index} title={item.title} options={item.options} detailCheck={detailCheck} check={check} unCheck={unCheck}/>
                        )
                    }
                </div>
            }/>
    )
}