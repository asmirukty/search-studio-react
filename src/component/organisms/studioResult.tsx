import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useLocation, useParams} from 'react-router-dom';
import {initialSearchResult} from "./studioResultComponent/seachResultType";
import StudioResultSearchCard from "./studioResultComponent/studioResultSearchCard";
import StudioResultCard from "./studioResultComponent/studioResultCard";

export default function StudioResult(props: {state: any}) {
    //const id: {id: string}  = useParams();
    const search = useLocation().search;
    const query = new URLSearchParams(search);
    const [searchResult, setSearchResult] = useState(initialSearchResult);

   // const items = id.id.split(',');

    useEffect(() => {
        //axios.get('http://localhost:5000/studios/', {
        //    params: {
        //        fromStation: query.get('fromStation')
        //    }
        //})
        axios.get('http://localhost:5000/studios/'+search)
            .then(response => {
                setSearchResult(response.data)
            })

    })

    return (
        <div style={{padding: 24}}>
            <StudioResultSearchCard items={[]} state={props.state}/>
            <h3 style={{textAlign: 'center'}}>
                検索結果
                <div style={{fontSize: 12}}>全{searchResult.total_pages}件</div>
            </h3>
            {
                searchResult.studios.map((row, index) => (
                    <StudioResultCard studio={row} key={index}/>
                ))
            }
        </div>
    )
}