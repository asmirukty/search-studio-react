import React from "react";
import StudioDetailButton from "../atoms/studioDetailButton";
import DetailChip from "../molecules/detailChip";

export default function StudioDetail(props: {isWide?: boolean}) {
    const {isWide} = props;

    return (
        <div style={isWide ? {display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between'} : {}}>
            <DetailChip/>
            <div style={{textAlign: 'right', minWidth: 140}}>
                <StudioDetailButton/>
            </div>
        </div>
    );
}