import React from 'react';
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import DetailCheckbox from "../molecules/detailCheckbox";
import NormalTitle from "../atoms/NormalTitle";

export default function DetailReservation() {
    return (
        <div style={{paddingTop: 12}}>
            <NormalTitle>予約</NormalTitle>
            <DetailCheckbox options={reserveOptions}/>
        </div>
    )
}