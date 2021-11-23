import TopMenuTab from '../organisms/topMenuTab';
import React from "react";
import TopTitleBar from "../organisms/topTitleBar";
import StudioSearchCard from "../organisms/searchComponent/studioSearchCard";

export default function SearchPage() {
    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab>
                {[
                    <div key={0} style={{padding: 24}}>
                        <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
                        <StudioSearchCard state={{
                            prefecture: [], city: [], line: [], station: [], studioName: null,
                            minArea: null, maxArea: null, minPeople: null, maxPeople: null, date: [],
                            fromStation: null, minPrice: null, maxPrice: null,
                            minMirror: null, maxMirror: null, detailCheck: []

                        }}/>
                    </div>,
                    <div key={1}>レッスン・練習会を探す</div>,
                    <div key={2}>ナンバー・イベントを探す</div>
                ]}
            </TopMenuTab>
        </div>
    );
}