import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import StudioResultSearchCard from "../organisms/studioResultSearchCard";
import StudioResultCard from "../organisms/studioResultCard";
import StudioResultTitle from "../atoms/studioResultTitle";
import PageNumber from "../atoms/pageNumber";
import {initialSearchResult, SearchResult} from "../atoms/seachResultType";
import {useMedia} from "use-media";
import StudioSearchCard from "../organisms/studioSearchCard";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, dateMatchState, detailItemChipState,
    fromStationChipState, lineChipState, mirrorChipState, peopleChipState,
    prefectureChipState, priceChipState, stationChipState, studioNameState, studioSearchCardOpenState
} from "../atom";
import {FromQuery} from "../atoms/fromQuery";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import StudioResultSearchCardTitle from "../atoms/studioResultSearchCardTitle";

export default function StudioResult() {
    const search = useLocation().search;
    const isSmall = useMedia({ maxWidth: "370px" });
    const isWide = useMedia({ minWidth: "800px" });
    const [searchResult, setSearchResult] = useState<SearchResult>(initialSearchResult);
    const open = useRecoilValue(studioSearchCardOpenState);

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
        <div>
            {
                isWide ?
                    <div style={{padding: '24px 36px'}}>
                        <StudioResultTitle/>
                        <PageNumber pages={searchResult.total_pages}/>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <div style={{margin: '8px auto', textAlign: 'center'}}>
                                    <StudioResultSearchCardTitle/>
                                </div>
                                <StudioSearchCard/>
                            </div>
                            {
                                searchResult.studios.map((studio, index) =>
                                    <StudioResultCard studio={studio} key={index}/>
                                )
                            }
                        </div>
                    </div>
                    :
                    <div style={isSmall ? {padding: '24px 16px'} : {padding: '24px'}}>
                        {
                            open ? <StudioSearchCard/> : <StudioResultSearchCard/>
                        }
                        <StudioResultTitle/>
                        <PageNumber pages={searchResult.total_pages}/>
                            {
                                searchResult.studios.map((studio, index) =>
                                    <StudioResultCard studio={studio} key={index}/>
                                )
                            }
                    </div>
            }
        </div>
    );
}