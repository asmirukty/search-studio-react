import React, {useEffect} from "react";
import PageTitle from "../atoms/pageTitle";
import StudioSearchPaper from "../organisms/studioSearchPaper";
import {useMedia} from "use-media";
import {useSetRecoilState} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, detailItemChipState, fromStationChipState, lineChipState,
    mirrorChipState, peopleChipState, prefectureChipState, priceChipState, stationChipState, studioNameState
} from "../atom";

export default function StudioSearch() {
    const isWide = useMedia({ minWidth: "620px" });
    const setPrefectureChip = useSetRecoilState(prefectureChipState);
    const setCityChip = useSetRecoilState(cityChipState);
    const setLineChip = useSetRecoilState(lineChipState);
    const setStationChip = useSetRecoilState(stationChipState);
    const setStudioName = useSetRecoilState(studioNameState);
    const setAreaChip = useSetRecoilState(areaChipState);
    const setPeopleChip = useSetRecoilState(peopleChipState);
    const setDateChip = useSetRecoilState(dateChipState);
    const setFromStationChip = useSetRecoilState(fromStationChipState);
    const setPriceChip = useSetRecoilState(priceChipState);
    const setMirrorChip = useSetRecoilState(mirrorChipState);
    const setDetailItemChip = useSetRecoilState(detailItemChipState);

    useEffect(() => {
        setPrefectureChip([]);
        setCityChip([]);
        setLineChip([]);
        setStationChip([]);
        setStudioName('');
        setAreaChip({min: null, max: null});
        setPeopleChip({min: null, max: null});
        setDateChip([]);
        setFromStationChip(null);
        setPriceChip({min: null, max: null});
        setMirrorChip({min: null, max: null});
        setDetailItemChip([]);
    }, []);

    return (
        <div style={isWide ? {padding: 32} : {padding: 24}}>
            <PageTitle margin={'16px 0'} center>スタジオを検索</PageTitle>
            <StudioSearchPaper isWide={isWide}/>
        </div>
    );
}