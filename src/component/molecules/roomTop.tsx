import React from "react";
import StudioResultCardDetail from "../atoms/studioResultCardDetail";
import BoldTypography from "../atoms/boldTypography";
import SmallTypography from "../atoms/smallTypography";

interface RoomContentProps {
    room: string;
    floorArea: number;
}

export default function RoomTop(props: RoomContentProps) {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <BoldTypography>{props.room}</BoldTypography>
                <SmallTypography margin={'0px 8px'}>⊿ {props.floorArea}m²</SmallTypography>
            </div>
            <StudioResultCardDetail/>
        </div>
    );
}