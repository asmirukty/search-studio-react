import PageTitle from "../atoms/PageTitle";
import StudioSearchCard from "../organisms/studioSearchCard";
import {useMedia} from "use-media";
import PlaceDialog from "../organisms/placeDialog";
import React from "react";
import SpaceDialog from "../organisms/spaceDialog";
import DateDialog from "../organisms/dateDialog";
import DetailDialog from "../organisms/detailDialog";

export default function StudioSearch() {
    const isWide = useMedia({ minWidth: "620px" });

    return (
        <div style={isWide ? {padding: 32} : {padding: 24}}>
            <div style={{margin: '16px 0'}}>
                <PageTitle>スタジオを検索</PageTitle>
            </div>
            <StudioSearchCard isWide={isWide}/>
            <PlaceDialog/>
            <SpaceDialog/>
            <DateDialog/>
            <DetailDialog/>
        </div>
    );
}