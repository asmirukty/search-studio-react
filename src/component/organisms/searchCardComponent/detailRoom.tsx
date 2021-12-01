import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import {useRecoilState} from "recoil";
import {detailItemState, maxMirrorState,minMirrorState} from "./atom";
import MinMaxSelect from "../../molecules/minMaxSelect";
import {amenityOptions, floorMaterialOptions,lightAndFilmingOptions,
    maxMirrorOptions, minMirrorOptions, soundAndMovieOptions} from "./itemsAndOptions/detailOptions";
import DetailCheckbox from "../../molecules/detailCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12,
            paddingTop: 16
        }
    }));

export default function DetailRoom() {
    const classes = useStyles()
    const [minMirror, setMinMirror] = useRecoilState<string|null>(minMirrorState);
    const [maxMirror, setMaxMirror] = useRecoilState<string|null>(maxMirrorState);
    const [detailItem, setDetailItem] = useRecoilState<string[]|any[]>(detailItemState);

    const changeMinMirror = (event: any) => {
        event.target.value === minMirrorOptions[0] ? setMinMirror(null) : setMinMirror(event.target.value)
    }

    const changeMaxMirror = (event: any) => {
        event.target.value === maxMirrorOptions[0] ? setMaxMirror(null) : setMaxMirror(event.target.value)
    }

    const checkDetailItem = (item: string) => {
        setDetailItem(prevState => [...prevState, item])
    }

    const unCheckDetailItem = (item: string) => {
        setDetailItem(prevState => prevState.filter((element) => element !== item))
    }

    return (
        <div>
            <Typography className={classes.typ} variant={'subtitle1'}>部屋設備・備品</Typography>
            <DetailCheckbox title={'鏡'} options={['2面']} detailCheck={detailItem} check={checkDetailItem} unCheck={unCheckDetailItem}/>
            <MinMaxSelect minLabel={'横幅'} min={minMirror} max={maxMirror}
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
                    <div style={{paddingTop: 12}}>
                        <DetailCheckbox key={index} title={item.title} options={item.options} detailCheck={detailItem} check={checkDetailItem} unCheck={unCheckDetailItem}/>
                    </div>
                )
            }
        </div>
    )
}