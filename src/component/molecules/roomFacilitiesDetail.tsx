import React from 'react';
import {useRecoilState} from "recoil";
import {maxMirrorState, minMirrorState} from "../atom";
import MinMaxSelect from "../molecules/minMaxSelect";
import {
    amenityOptions, floorMaterialOptions, lightAndFilmingOptions,
    maxMirrorOptions, minMirrorOptions, soundAndMovieOptions
} from "../itemsAndOptions/detailOptions";
import StudioDetailCheckbox from "./studioDetailCheckbox";
import BoldTypography from "../atoms/boldTypography";

export default function RoomFacilitiesDetail() {
    const [minMirror, setMinMirror] = useRecoilState<number|null>(minMirrorState);
    const [maxMirror, setMaxMirror] = useRecoilState<number|null>(maxMirrorState);

    const changeMinMirror = (event: any) => {
        event.target.value === minMirrorOptions[0] ? setMinMirror(null) : setMinMirror(event.target.value);
    };

    const changeMaxMirror = (event: any) => {
        event.target.value === maxMirrorOptions[0] ? setMaxMirror(null) : setMaxMirror(event.target.value);
    };

    return (
        <>
            <BoldTypography sub>鏡</BoldTypography>
            <StudioDetailCheckbox options={['鏡2面']}/>
            <MinMaxSelect minLabel={'横幅'} min={minMirror} max={maxMirror}
                          minOptions={minMirrorOptions} maxOptions={maxMirrorOptions} unit={'m'}
                          minNullIndex={0} maxNullIndex={0} changeMin={changeMinMirror} changeMax={changeMaxMirror}/>
            <BoldTypography sub margin={'8px 0 0'}>床材</BoldTypography>
            <StudioDetailCheckbox options={floorMaterialOptions}/>
            <BoldTypography sub margin={'8px 0 0'}>照明・撮影</BoldTypography>
            <StudioDetailCheckbox options={lightAndFilmingOptions}/>
            <BoldTypography sub margin={'8px 0 0'}>音響・映像</BoldTypography>
            <StudioDetailCheckbox options={soundAndMovieOptions}/>
            <BoldTypography sub margin={'8px 0 0'}>その他設備・備品</BoldTypography>
            <StudioDetailCheckbox options={amenityOptions}/>
        </>
    );
}