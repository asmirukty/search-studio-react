import React from 'react';
import {studioFacilityOptions} from "../atoms/itemsAndOptions/detailOptions";
import DetailCheckbox from "../molecules/detailCheckbox";
import NormalTitle from "../atoms/NormalTitle";

export default function DetailStudioFacilities() {
    return (
        <div style={{paddingTop: 12}}>
            <NormalTitle>スタジオ設備</NormalTitle>
            <DetailCheckbox options={studioFacilityOptions}/>
        </div>
    );
}