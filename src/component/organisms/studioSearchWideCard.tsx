import React from "react";
import {Card, CardContent} from "@material-ui/core";
import StudioName from "../atoms/studioName";
import SpaceDialog from "./spaceDialog";
import PlaceDialog from "./placeDialog";
import DateDialog from "./dateDialog";
import DetailDialog from "./detailDialog";
import {useRecoilValue} from "recoil";
import {dateChipState} from "../atom";
import StudioSearchCardTitle from "../atoms/studioSearchCardTitle";
import PlaceButton from "../molecules/placeButton";
import SpaceButton from "../molecules/spaceButton";
import DateButton from "../molecules/dateButton";
import DetailButton from "../atoms/detailButton";
import DetailChip from "../molecules/detailChip";
import DateMatchRadio from "../atoms/dateMatchRadio";
import StudioSearchButton from "../atoms/studioSearchButton";

export default function StudioSearchWideCard() {
    const dateChip = useRecoilValue(dateChipState);

    return (
        <Card style={{minWidth: 560, maxWidth: 800, margin: 'auto'}}>
            <CardContent style={{padding: '16px 24px 24px'}}>
                <StudioSearchCardTitle label={'場所 ※'}/>
                <div style={{display: 'flex', alignItems: 'center', paddingBottom: 8}}>
                    <div style={{flexGrow: 1, width: '100%', paddingRight: 12}}><PlaceButton/></div>
                    <div style={{flexGrow: 1, width: '100%'}}><StudioName/></div>
                </div>
                <PlaceDialog/>
                <div style={{display: 'flex', paddingBottom: 8}}>
                    <div style={{flexGrow: 1, width: '100%', paddingRight: 16}}>
                        <StudioSearchCardTitle label={'広さ'}/>
                        <SpaceButton/>
                        <SpaceDialog/>
                    </div>
                    <div style={{flexGrow: 1, width: '100%'}}>
                        <StudioSearchCardTitle label={'日時'}/>
                        <DateButton/>
                        <DateDialog/>
                    </div>
                </div>
                {
                    dateChip.length > 1 && <DateMatchRadio/>
                }
                <DetailChip/>
                <div style={{textAlign: 'right'}}>
                    <DetailButton/>
                </div>
                <DetailDialog/>
                <div style={{display: 'flex'}}>
                    <StudioSearchButton/>
                </div>
            </CardContent>
        </Card>
    )
}