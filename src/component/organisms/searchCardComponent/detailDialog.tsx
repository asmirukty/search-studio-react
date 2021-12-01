import React from 'react';
import {useRecoilState} from "recoil";
import {
    detailItemChipState, detailItemState,
    detailOpenState, fromStationChipState, fromStationState, maxMirrorState,
    maxPriceState, minMirrorState, minPriceState, mirrorChipState, priceChipState
} from "./atom";
import StudioDialog from "../../templates/studioDialog";
import DetailDialogChip from "./detailDialogChip";
import DetailFromStation from "./detailFromStation";
import DetailRoom from "./detailRoom";
import DetailPriceReserveStudioF from "./detailPriceReserveStudioF";

export default function DetailDialog() {
    const [detailOpen, setDetailOpen] = useRecoilState<boolean>(detailOpenState);
    const [fromStation, setFromStation] = useRecoilState<string|null>(fromStationState);
    const [minPrice, setMinPrice] = useRecoilState<string|null>(minPriceState);
    const [maxPrice, setMaxPrice] = useRecoilState<string|null>(maxPriceState);
    const [minMirror, setMinMirror] = useRecoilState<string|null>(minMirrorState);
    const [maxMirror, setMaxMirror] = useRecoilState<string|null>(maxMirrorState);
    const [detailItem, setDetailItem] = useRecoilState<string[]|any[]>(detailItemState);
    const [fromStationChip, setFromStationChip] = useRecoilState<string|null>(fromStationChipState);
    const [priceChip, setPriceChip] = useRecoilState<{min: string|null, max: string|null}>(priceChipState);
    const [mirrorChip, setMirrorChip] = useRecoilState<{min: string|null, max: string|null}>(mirrorChipState);
    const [detailItemChip, setDetailItemChip] = useRecoilState<string[]|any[]>(detailItemChipState);

    const dateDialogOpen = () => {
        setDetailOpen(true)
        setFromStation(fromStationChip)
        setMinPrice(priceChip.min)
        setMaxPrice(priceChip.max)
        setMinMirror(mirrorChip.min)
        setMaxMirror(mirrorChip.max)
        setDetailItem(detailItemChip)
    }

    const dateOk = () => {
        setDetailOpen(false);
        setFromStationChip(fromStation)
        setPriceChip({min: minPrice, max: maxPrice})
        setMirrorChip({min: minMirror, max: maxMirror})
        setDetailItemChip(detailItem)
    }

    const dateCancel = () => {
        setDetailOpen(false)
    }

    return (
        <StudioDialog open={detailOpen} dialogOpen={dateDialogOpen} detail
                      handleCancel={dateCancel} handleOk={dateOk}
                      labelCheck={!fromStationChip && !priceChip.min && !priceChip.max && !mirrorChip.min && !mirrorChip.max && detailItemChip.length > 0}
                      label={'もっとしぼり込む >'}
                      chips={<DetailDialogChip/>}
                      dialogContent={
                             <div style={{padding: '20px 24px'}}>
                                 <DetailFromStation/>
                                 <DetailPriceReserveStudioF/>
                                 <DetailRoom/>
                             </div>}/>
    )
}