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

export default function StudioSearchCard(props: {close?: (value?: any) => void;}) {
    const dateChip = useRecoilValue(dateChipState);

    return (
        <Card style={{minWidth: 275}}>
            <CardContent>
                <StudioSearchCardTitle label={'場所 ※'}/>
                <PlaceButton/>
                <PlaceDialog/>
                <StudioName/>
                <StudioSearchCardTitle label={'広さ'}/>
                <SpaceButton/>
                <SpaceDialog/>
                <StudioSearchCardTitle label={'日時'}/>
                <DateButton/>
                <DateDialog/>
                {
                    dateChip.length > 1 && <DateMatchRadio/>
                }
                <DetailChip/>
                <div style={{textAlign: 'right'}}>
                    <DetailButton/>
                </div>
                <DetailDialog/>
                <div style={{display: 'flex'}}>
                    <StudioSearchButton close={props.close}/>
                </div>
            </CardContent>
        </Card>
    )
}