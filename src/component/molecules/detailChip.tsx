import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {
    detailItemChipState, floorMaterialChipState, fromStationChipState, mirrorChipState,
    priceChipState, reservationChipState, roomFacilityChipState, studioFacilityChipState
} from "../atom";
import SearchChip from "../atoms/searchChip";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import RangeLabel from "../atoms/rangeLabel";

export default function DetailChip() {
    const [fromStationChip, setFromStationChip] = useRecoilState<number|null>(fromStationChipState);
    const [priceChip, setPriceChip] = useRecoilState<{min: number|null, max: number|null}>(priceChipState);
    const [mirrorChip, setMirrorChip] = useRecoilState<{min: number|null, max: number|null}>(mirrorChipState);
    const [detailItemChip, setDetailItemChip] = useRecoilState<string[]|any[]>(detailItemChipState);
    const reservationChip = useRecoilValue(reservationChipState);
    const studioFacilityChip = useRecoilValue(studioFacilityChipState);
    const roomFacilityChip = useRecoilValue(roomFacilityChipState);
    const floorMaterialChip = useRecoilValue(floorMaterialChipState);

    const detailLabel = (item: string) => {
        return detailItemChip.includes(item) ? item : null
    };

    const fromStationChipDelete = () => {
        setFromStationChip(null);
    };

    const priceChipDelete = () => {
        setPriceChip({min: null, max: null});
    };

    const mirrorChipDelete = () => {
        setMirrorChip({min: null, max: null});
    };

    const detailItemChipDelete = (item: string) => () => {
        setDetailItemChip(prevState =>
            prevState.filter((element) => element !== item)
        );
    };

    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <SearchChip pre={'駅'} label={fromStationChip} after={'分以内'} onDelete={fromStationChipDelete}/>
            <SearchChip label={detailLabel('キャンセル無料期間あり')}
                        onDelete={detailItemChipDelete('キャンセル無料期間あり')}/>
            <SearchChip label={RangeLabel({min: priceChip.min, max: priceChip.max, unit: '円'})}
                        onDelete={priceChipDelete}/>
            <SearchChip label={detailLabel(reserveOptions[0])} onDelete={detailItemChipDelete(reserveOptions[0])}/>
            <SearchChip label={detailLabel(reserveOptions[1])} onDelete={detailItemChipDelete(reserveOptions[1])}/>
            {
                [...reservationChip, ...studioFacilityChip].map((item) =>
                    <SearchChip key={item} label={item} onDelete={detailItemChipDelete(item)}/>
                )
            }
            <SearchChip label={detailLabel('鏡2面')} onDelete={detailItemChipDelete('鏡2面')}/>
            <SearchChip key={'mirror'} pre={'鏡'}
                        label={RangeLabel({min: mirrorChip.min, max: mirrorChip.max, unit: 'm'})}
                        onDelete={mirrorChipDelete}/>
            {
                [...floorMaterialChip, ...roomFacilityChip].map((item) =>
                    <SearchChip key={item} label={item} onDelete={detailItemChipDelete(item)}/>
                )
            }
        </div>
    )
}