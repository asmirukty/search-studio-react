import React from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    detailItemChipState, detailItemState, detailOpenState, fromStationChipState, fromStationState,
    maxMirrorState, maxPriceState, minMirrorState, minPriceState, mirrorChipState, priceChipState
} from "../atom";
import StudioDialog from "../molecules/studioDialog";
import RoomFacilitiesDetail from "../molecules/roomFacilitiesDetail";
import {useMedia} from "use-media";
import BoldTypography from "../atoms/boldTypography";
import DetailCheckbox from "../molecules/detailCheckbox";
import {
    fromStationOptions, maxPriceOptions, minPriceOptions, reserveOptions, studioFacilityOptions
} from "../atoms/itemsAndOptions/detailOptions";
import SelectOption from "../molecules/selectOption";
import MinMaxSelect from "../molecules/minMaxSelect";

export default function DetailDialog() {
    const isMedium = useMedia({ minWidth: 420, maxWidth: 532 });
    const [detailOpen, setDetailOpen] = useRecoilState<boolean>(detailOpenState);
    const [fromStation, setFromStation] = useRecoilState<number|null>(fromStationState);
    const [minPrice, setMinPrice] = useRecoilState<number|null>(minPriceState);
    const [maxPrice, setMaxPrice] = useRecoilState<number|null>(maxPriceState);
    const minMirror = useRecoilValue<number|null>(minMirrorState);
    const maxMirror = useRecoilValue<number|null>(maxMirrorState);
    const detailItem = useRecoilValue<string[]|any[]>(detailItemState);
    const setFromStationChip = useSetRecoilState<number|null>(fromStationChipState);
    const setPriceChip = useSetRecoilState<{min: number|null, max: number|null}>(priceChipState);
    const setMirrorChip = useSetRecoilState<{min: number|null, max: number|null}>(mirrorChipState);
    const setDetailItemChip = useSetRecoilState<string[]|any[]>(detailItemChipState);

    const detailOk = () => {
        setDetailOpen(false);
        setFromStationChip(fromStation);
        setPriceChip({min: minPrice, max: maxPrice});
        setMirrorChip({min: minMirror, max: maxMirror});
        setDetailItemChip(detailItem);
    };

    const detailCancel = () => {
        setDetailOpen(false);
    };

    const changeFromStation = (event: any) => {
        event.target.value === fromStationOptions[0] ? setFromStation(null) : setFromStation(event.target.value);
    };

    const changeMinPrice = (event: any) => {
        event.target.value === minPriceOptions[0] ? setMinPrice(null) : setMinPrice(event.target.value);
    };

    const changeMaxPrice = (event: any) => {
        event.target.value === maxPriceOptions[0] ? setMaxPrice(null) : setMaxPrice(event.target.value);
    };

    return (
        <StudioDialog open={detailOpen} handleCancel={detailCancel} handleOk={detailOk} padding={isMedium ? '24px 36px' : 20}>
            <div style={{display:'flex'}}>
                <BoldTypography margin={'0 24px 0 0'}>駅から徒歩</BoldTypography>
                <SelectOption value={fromStation} options={fromStationOptions} nullIndex={0} unit={'分以内'} onChange={changeFromStation}/>
            </div>
            <BoldTypography margin={'12px 0 0'}>料金</BoldTypography>
            <DetailCheckbox options={['キャンセル無料期間あり']}/>
            <MinMaxSelect minLabel={'30分あたり'} min={minPrice} max={maxPrice}
                          minOptions={minPriceOptions} maxOptions={maxPriceOptions} unit={'円'}
                          minNullIndex={0} maxNullIndex={0} changeMin={changeMinPrice} changeMax={changeMaxPrice}/>
            <BoldTypography margin={'12px 0 0'}>予約</BoldTypography>
            <DetailCheckbox options={reserveOptions}/>
            <BoldTypography margin={'12px 0 0'}>スタジオ設備</BoldTypography>
            <DetailCheckbox options={studioFacilityOptions}/>
            <BoldTypography margin={'12px 0 0'}>部屋設備・備品</BoldTypography>
            <RoomFacilitiesDetail/>
        </StudioDialog>
    );
}