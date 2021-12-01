import React from 'react';
import {useRecoilState} from "recoil";
import {detailItemState, maxPriceState, minPriceState} from "./atom";
import MinMaxSelect from "../../molecules/minMaxSelect";
import {maxPriceOptions, minPriceOptions, reservationOptions, studioFacilityOptions} from "./itemsAndOptions/detailOptions";
import DetailCheckbox from "../../molecules/detailCheckbox";

export default function DetailPriceReserveStudioF() {
    const [minPrice, setMinPrice] = useRecoilState<string|null>(minPriceState);
    const [maxPrice, setMaxPrice] = useRecoilState<string|null>(maxPriceState);
    const [detailItem, setDetailItem] = useRecoilState<string[]|any[]>(detailItemState);

    const changeMinPrice = (event: any) => {
        event.target.value === minPriceOptions[0] ? setMinPrice(null) : setMinPrice(event.target.value)
    }

    const changeMaxPrice = (event: any) => {
        event.target.value === maxPriceOptions[0] ? setMaxPrice(null) : setMaxPrice(event.target.value)
    }

    const checkDetailItem = (item: string) => {
        setDetailItem(prevState => [...prevState, item])
    }

    const unCheckDetailItem = (item: string) => {
        setDetailItem(prevState => prevState.filter((element) => element !== item))
    }

    return (
        <div>
            <DetailCheckbox title={'料金'} one options={['キャンセル無料期間あり']} detailCheck={detailItem} check={checkDetailItem} unCheck={unCheckDetailItem}/>
            <MinMaxSelect minLabel={'30分あたり'} min={minPrice} max={maxPrice}
                          minOptions={minPriceOptions} maxOptions={maxPriceOptions}
                          minNullValue={minPriceOptions[0]} maxNullValue={maxPriceOptions[0]} disableEqual
                          changeMin={changeMinPrice} changeMax={changeMaxPrice}/>
            <DetailCheckbox title={'予約'} one options={reservationOptions} detailCheck={detailItem} check={checkDetailItem} unCheck={unCheckDetailItem}/>
            <DetailCheckbox title={'スタジオ設備'} one options={studioFacilityOptions} detailCheck={detailItem} check={checkDetailItem} unCheck={unCheckDetailItem}/>
        </div>
    )
}