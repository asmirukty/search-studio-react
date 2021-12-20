import React from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    detailItemChipState, detailItemState, detailOpenState, fromStationChipState, fromStationState,
    maxMirrorState, maxPriceState, minMirrorState, minPriceState, mirrorChipState, priceChipState
} from "../atom";
import StudioDialog from "../molecules/studioDialog";
import DetailFromStation from "../molecules/detailFromStation";
import DetailPrice from "../molecules/detailPrice";
import DetailReservation from "../molecules/detailReservation";
import DetailStudioFacilities from "../molecules/DetailStudioFacilities";
import DetailRoomFacilities from "../molecules/detailRoomFacilities";
import {useMedia} from "use-media";

export default function DetailDialog() {
    const isMedium = useMedia({ minWidth: 420, maxWidth: 532 });
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
             <div style={isMedium ? {padding: '24px 36px'} : {padding: 20}}>
                 <DetailFromStation/>
                 <DetailPrice/>
                 <DetailReservation/>
                 <DetailStudioFacilities/>
                 <DetailRoomFacilities/>
             </div>
        </StudioDialog>
    );
}