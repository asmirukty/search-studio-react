import React from 'react';
import {useRecoilState} from "recoil";
import {maxPriceState, minPriceState} from "../atom";
import MinMaxSelect from "../molecules/minMaxSelect";
import {maxPriceOptions, minPriceOptions} from "../atoms/itemsAndOptions/detailOptions";
import DetailCheckbox from "../molecules/detailCheckbox";
import NormalTitle from "../atoms/NormalTitle";

export default function DetailPrice() {
    const [minPrice, setMinPrice] = useRecoilState<number|null>(minPriceState);
    const [maxPrice, setMaxPrice] = useRecoilState<number|null>(maxPriceState);

    const changeMinPrice = (event: any) => {
        event.target.value === minPriceOptions[0] ? setMinPrice(null) : setMinPrice(event.target.value);
    };

    const changeMaxPrice = (event: any) => {
        event.target.value === maxPriceOptions[0] ? setMaxPrice(null) : setMaxPrice(event.target.value);
    };

    return (
        <div style={{paddingTop: 12}}>
            <NormalTitle>料金</NormalTitle>
            <DetailCheckbox options={['キャンセル無料期間あり']}/>
            <MinMaxSelect minLabel={'30分あたり'} min={minPrice} max={maxPrice}
                          minOptions={minPriceOptions} maxOptions={maxPriceOptions} unit={'円'} disableEqual
                          minNullIndex={0} maxNullIndex={0} changeMin={changeMinPrice} changeMax={changeMaxPrice}/>

        </div>
    )
}