import React from 'react';
import {useRecoilState} from "recoil";
import {maxMirrorState, minMirrorState} from "../atom";
import MinMaxSelect from "../molecules/minMaxSelect";
import {
    amenityOptions, floorMaterialOptions, lightAndFilmingOptions,
    maxMirrorOptions, minMirrorOptions, soundAndMovieOptions
} from "../atoms/itemsAndOptions/detailOptions";
import DetailCheckbox from "../molecules/detailCheckbox";
import NormalTitle from "../atoms/NormalTitle";
import NormalSubTitle from "../atoms/NormalSubTitle";

function SubTitle(props: {children: string}) {
    return (
        <div style={{paddingTop: 8}}>
            <NormalSubTitle>{props.children}</NormalSubTitle>
        </div>
    );
}

export default function DetailRoomFacilities() {
    const [minMirror, setMinMirror] = useRecoilState<number|null>(minMirrorState);
    const [maxMirror, setMaxMirror] = useRecoilState<number|null>(maxMirrorState);

    const changeMinMirror = (event: any) => {
        event.target.value === minMirrorOptions[0] ? setMinMirror(null) : setMinMirror(event.target.value);
    };

    const changeMaxMirror = (event: any) => {
        event.target.value === maxMirrorOptions[0] ? setMaxMirror(null) : setMaxMirror(event.target.value);
    };

    return (
        <div style={{paddingTop: 12}}>
            <NormalTitle>部屋設備・備品</NormalTitle>
            <NormalSubTitle>鏡</NormalSubTitle>
            <DetailCheckbox options={['鏡2面']}/>
            <MinMaxSelect minLabel={'横幅'} min={minMirror} max={maxMirror}
                          minOptions={minMirrorOptions} maxOptions={maxMirrorOptions} unit={'m'} disableEqual
                          minNullIndex={0} maxNullIndex={0} changeMin={changeMinMirror} changeMax={changeMaxMirror}/>
            <SubTitle>床材</SubTitle>
            <DetailCheckbox options={floorMaterialOptions}/>
            <SubTitle>照明・撮影</SubTitle>
            <DetailCheckbox options={lightAndFilmingOptions}/>
            <SubTitle>音響・映像</SubTitle>
            <DetailCheckbox options={soundAndMovieOptions}/>
            <SubTitle>その他設備・備品</SubTitle>
            <DetailCheckbox options={amenityOptions}/>
        </div>
    );
}