import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import StudioResultSearchCard from "../organisms/studioResultSearchCard";
import StudioResultCard from "../organisms/studioResultCard";
import StudioResultTitle from "../atoms/studioResultTitle";
import PageNumber from "../atoms/pageNumber";
import {initialSearchResult, SearchResult} from "../atoms/seachResultType";

export default function StudioResult() {
    const search = useLocation().search;
    const [searchResult, setSearchResult] = useState<SearchResult>(initialSearchResult);

    useEffect(() => {
        axios.get('http://localhost:5000/studios/' + search)
            .then(response => {
                setSearchResult(response.data)
            });
    })

    return (
        <div style={{padding: 24}}>
            <StudioResultSearchCard/>
            <StudioResultTitle/>
            <PageNumber pages={searchResult.total_pages}/>
            {
                searchResult.studios.map((studio, index) =>
                    <StudioResultCard studio={studio} key={index}/>
                )
            }
        </div>
    );
}