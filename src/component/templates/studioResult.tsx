import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import StudioResultCard from "../organisms/studioResultCard";
import {initialSearchResult, SearchResult} from "../atoms/seachResultType";
import {useMedia} from "use-media";
import {useSetRecoilState} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, dateMatchState, detailItemChipState,
    fromStationChipState, lineChipState, mirrorChipState, peopleChipState,
    prefectureChipState, priceChipState, stationChipState, studioNameState
} from "../atom";
import {FromQuery} from "../atoms/fromQuery";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import StudioReSearchCard from "../organisms/studioReSearchCard";
import PlaceDialog from "../organisms/placeDialog";
import SpaceDialog from "../organisms/spaceDialog";
import DateDialog from "../organisms/dateDialog";
import DetailDialog from "../organisms/detailDialog";
import PageTitle from "../atoms/PageTitle";
import NormalSubTitle from "../atoms/NormalSubTitle";

export default function StudioResult() {
    const search = useLocation().search;
    const isWide = useMedia({ minWidth: "800px" });
    const [searchResult, setSearchResult] = useState<SearchResult>(initialSearchResult);

    const setPrefectureChip = useSetRecoilState(prefectureChipState);
    const setCityChip = useSetRecoilState(cityChipState);
    const setLineChip = useSetRecoilState(lineChipState);
    const setStationChip = useSetRecoilState(stationChipState);
    const setStudioName = useSetRecoilState(studioNameState);
    const setAreaChip = useSetRecoilState(areaChipState);
    const setPeopleChip = useSetRecoilState(peopleChipState);
    const setDateChip = useSetRecoilState(dateChipState);
    const setDateMatch = useSetRecoilState(dateMatchState);
    const setFromStationChip = useSetRecoilState(fromStationChipState);
    const setPriceChip = useSetRecoilState(priceChipState);
    const setMirrorChip = useSetRecoilState(mirrorChipState);
    const setDetailItemChip = useSetRecoilState(detailItemChipState);

    const query = FromQuery();

    useEffect(() => {
            setPrefectureChip(query.prefecture);
            setCityChip(query.city);
            setLineChip(query.line);
            setStationChip(query.station);
            setStudioName(query.studioName ? query.studioName : '');
            setAreaChip({min: query.areaMin, max: query.areaMax});
            setPeopleChip({min: query.peopleMin, max: query.peopleMax});
            setDateChip(query.date);
            setDateMatch(query.dateMatch);
            setFromStationChip(query.fromStation);
            setPriceChip({min: query.priceMin, max: query.priceMax});
            setMirrorChip({min:  query.mirrorMin, max: query.mirrorMax});
            setDetailItemChip([...query.reservation, ...query.studioFacility, ...query.floorMaterial, ...query.roomFacility]);
            query.freeCancel && setDetailItemChip(prevState => [...prevState, 'キャンセル無料期間あり']);
            query.halfHourSlot && setDetailItemChip(prevState => [...prevState, reserveOptions[0]]);
            query.fromHalfHour && setDetailItemChip(prevState => [...prevState, reserveOptions[1]]);
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/studios/' + search)
            .then(response => {
                setSearchResult(response.data)
            });
    })

    return (
        <>
            <div style={isWide ? {padding: '24px 36px'} : {padding: '24px'}}>
                <div style={isWide ? {display: 'flex'} : {}}>
                    <div style={isWide ? {flexGrow: 1, position: 'static', margin: '44px 20px 0 0'} : {position: 'sticky', top: 112, zIndex: 1100}}>
                        <StudioReSearchCard isWide={isWide}/>
                    </div>
                    <div style={isWide ? {flexGrow: 4, marginTop: 24, textAlign: 'center'} : {marginTop: 24, textAlign: 'center'}}>
                        <PageTitle>検索結果</PageTitle>
                        <NormalSubTitle>全{searchResult.total_pages}件</NormalSubTitle>
                        {
                            searchResult.studios.map((studio, index) =>
                                <StudioResultCard studio={studio} key={index}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <PlaceDialog/>
            <SpaceDialog/>
            <DateDialog/>
            <DetailDialog/>
        </>
    );
}