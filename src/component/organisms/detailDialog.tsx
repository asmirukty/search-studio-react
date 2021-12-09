import React from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    detailItemChipState, detailItemState, detailOpenState, fromStationChipState, fromStationState,
    maxMirrorState, maxPriceState, minMirrorState, minPriceState, mirrorChipState, priceChipState
} from "../atom";
import StudioDialog from "../molecules/studioDialog";
import DetailContent from "./detailContent";

export default function DetailDialog() {
    const [detailOpen, setDetailOpen] = useRecoilState<boolean>(detailOpenState);
    const fromStation = useRecoilValue<number|null>(fromStationState);
    const minPrice = useRecoilValue<number|null>(minPriceState);
    const maxPrice = useRecoilValue<number|null>(maxPriceState);
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

    return (
        <StudioDialog open={detailOpen} handleCancel={detailCancel} handleOk={detailOk}>
             <div style={{padding: '4px 24px 20px'}}>
                 <DetailContent/>
             </div>
        </StudioDialog>
    )
}