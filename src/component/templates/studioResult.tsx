import React, {useEffect} from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import StudioResultSearchCard from "../organisms/studioResultSearchCard";
import StudioResultCard from "../organisms/studioResultCard";
import {useRecoilState} from "recoil";
import {studioSearchResultState} from "../atom";
import {QueryToState} from "../atoms/queryToState";
import StudioResultTitle from "../atoms/studioResultTitle";
import PageNumber from "../atoms/pageNumber";

export default function StudioResult() {
    const search = useLocation().search;
    const [searchResult, setSearchResult] = useRecoilState(studioSearchResultState);

    QueryToState()

    useEffect(() => {
        axios.get('http://localhost:5000/studios/' + search)
            .then(response => {
                setSearchResult(response.data)
            })
    })

    return (
        <div style={{padding: 24}}>
            <StudioResultSearchCard/>
            <StudioResultTitle/>
            <PageNumber/>
            {
                searchResult.studios.map((studio, index) =>
                    <StudioResultCard studio={studio} key={index}/>
                )
            }
        </div>
    );
}