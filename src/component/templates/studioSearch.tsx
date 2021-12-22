import React, {useEffect} from "react";
import PageTitle from "../atoms/PageTitle";
import StudioSearchPaper from "../organisms/studioSearchPaper";
import {useMedia} from "use-media";
import {useSetRecoilState} from "recoil";
import {prefectureChipState} from "../atom";

export default function StudioSearch() {
    const isWide = useMedia({ minWidth: "620px" });
    const setPrefectureChip = useSetRecoilState(prefectureChipState);

    useEffect(() => {
        setPrefectureChip([])
    })

    return (
        <div style={isWide ? {padding: 32} : {padding: 24}}>
            <PageTitle margin={'16px 0'}>スタジオを検索</PageTitle>
            <StudioSearchPaper isWide={isWide}/>
        </div>
    );
}