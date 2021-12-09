import React from 'react';
import {useRecoilState} from "recoil";
import {maxMirrorState, maxPriceState, minMirrorState, minPriceState} from "../atom";
import MinMaxSelect from "../molecules/minMaxSelect";
import {
    amenityOptions, floorMaterialOptions, lightAndFilmingOptions,
    maxMirrorOptions, maxPriceOptions, minMirrorOptions, minPriceOptions,
    reserveOptions, soundAndMovieOptions, studioFacilityOptions
} from "../atoms/itemsAndOptions/detailOptions";
import DetailCheckbox from "../molecules/detailCheckbox";
import DialogTitle from "../atoms/dialogTitle";
import DialogSubTitle from "../atoms/dialogSubTitle";
import FromStationSelect from "../molecules/fromStationSelect";

export default function DetailContent() {
    const [minPrice, setMinPrice] = useRecoilState<number|null>(minPriceState);
    const [maxPrice, setMaxPrice] = useRecoilState<number|null>(maxPriceState);
    const [minMirror, setMinMirror] = useRecoilState<number|null>(minMirrorState);
    const [maxMirror, setMaxMirror] = useRecoilState<number|null>(maxMirrorState);

    const changeMinPrice = (event: any) => {
        event.target.value === minPriceOptions[0] ? setMinPrice(null) : setMinPrice(event.target.value);
    };

    const changeMaxPrice = (event: any) => {
        event.target.value === maxPriceOptions[0] ? setMaxPrice(null) : setMaxPrice(event.target.value);
    };

    const changeMinMirror = (event: any) => {
        event.target.value === minMirrorOptions[0] ? setMinMirror(null) : setMinMirror(event.target.value);
    };

    const changeMaxMirror = (event: any) => {
        event.target.value === maxMirrorOptions[0] ? setMaxMirror(null) : setMaxMirror(event.target.value);
    };

    return (
        <div>
            <DialogTitle title={'駅から徒歩'}/>
            <FromStationSelect/>
            <DialogTitle title={'料金'}/>
            <DetailCheckbox options={['キャンセル無料期間あり']}/>
            <MinMaxSelect minLabel={'30分あたり'} min={minPrice} max={maxPrice}
                          minOptions={minPriceOptions} maxOptions={maxPriceOptions} unit={'円'} disableEqual
                          minNullIndex={0} maxNullIndex={0} changeMin={changeMinPrice} changeMax={changeMaxPrice}/>
            <DialogTitle title={'予約'}/>
            <DetailCheckbox options={reserveOptions}/>
            <DialogTitle title={'スタジオ設備'}/>
            <DetailCheckbox options={studioFacilityOptions}/>
            <DialogTitle title={'部屋設備・備品'}/>
            <DialogSubTitle title={'鏡'}/>
            <DetailCheckbox options={['鏡2面']}/>
            <MinMaxSelect minLabel={'横幅'} min={minMirror} max={maxMirror}
                          minOptions={minMirrorOptions} maxOptions={maxMirrorOptions} unit={'m'} disableEqual
                          minNullIndex={0} maxNullIndex={0} changeMin={changeMinMirror} changeMax={changeMaxMirror}/>
            <DialogSubTitle title={'床材'}/>
            <DetailCheckbox options={floorMaterialOptions}/>
            <DialogSubTitle title={'照明・撮影'}/>
            <DetailCheckbox options={lightAndFilmingOptions}/>
            <DialogSubTitle title={'音響・映像'}/>
            <DetailCheckbox options={soundAndMovieOptions}/>
            <DialogSubTitle title={'その他設備・備品'}/>
            <DetailCheckbox options={amenityOptions}/>
        </div>
    )
}