import React from 'react';
import Button from "@material-ui/core/Button";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    detailItemChipState, detailItemState, detailOpenState, fromStationChipState, fromStationState,
    maxMirrorState, maxPriceState, minMirrorState, minPriceState, mirrorChipState, priceChipState
} from "../atom";

export default function StudioDetailButton() {
    const setDetailOpen = useSetRecoilState<boolean>(detailOpenState);
    const setFromStation = useSetRecoilState<number|null>(fromStationState);
    const setMinPrice = useSetRecoilState<number|null>(minPriceState);
    const setMaxPrice = useSetRecoilState<number|null>(maxPriceState);
    const setMinMirror = useSetRecoilState<number|null>(minMirrorState);
    const setMaxMirror = useSetRecoilState<number|null>(maxMirrorState);
    const setDetailItem = useSetRecoilState<string[]|any[]>(detailItemState);
    const fromStationChip = useRecoilValue<number|null>(fromStationChipState);
    const priceChip = useRecoilValue<{min: number|null, max: number|null}>(priceChipState);
    const mirrorChip = useRecoilValue<{min: number|null, max: number|null}>(mirrorChipState);
    const detailItemChip = useRecoilValue<string[]|any[]>(detailItemChipState);

    const detailDialogOpen = () => {
        setDetailOpen(true);
        setFromStation(fromStationChip);
        setMinPrice(priceChip.min);
        setMaxPrice(priceChip.max);
        setMinMirror(mirrorChip.min);
        setMaxMirror(mirrorChip.max);
        setDetailItem(detailItemChip);
    };

    return (
        <Button style={{padding: '0 6px'}} onClick={detailDialogOpen}>
            もっとしぼり込む {'>'}
        </Button>
    );
}