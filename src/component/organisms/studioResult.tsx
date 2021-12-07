import React, {useEffect} from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import StudioResultSearchCard from "./studioResultComponent/studioResultSearchCard";
import StudioResultCard from "./studioResultComponent/studioResultCard";
import {useRecoilState} from "recoil";
import {studioSearchResultState} from "./searchCardComponent/atom";
import {QueryToState} from "./studioResultComponent/queryToState";

export default function StudioResult() {
    const search = useLocation().search;
    const [searchResult, setSearchResult] = useRecoilState(studioSearchResultState);

    useEffect(() => {
        QueryToState()
        axios.get('http://localhost:5000/studios/' + search)
            .then(response => {
                setSearchResult(response.data)
            })
    })

    return (
        <div style={{padding: 24}}>
            <StudioResultSearchCard/>
            <h3 style={{textAlign: 'center'}}>
                検索結果
                <div style={{fontSize: 12}}>全{searchResult.total_pages}件</div>
            </h3>
            {
                searchResult.studios.map((s, index) =>
                    <StudioResultCard index={index} key={index}/>
                )
            }
        </div>
    )
}