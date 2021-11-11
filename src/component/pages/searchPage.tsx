import TopMenuTab from '../organisms/topMenuTab';
import React from "react";
import TopTitleBar from "../organisms/topTitleBar";
import StudioSearchCard from "../organisms/studioComponent/studioSearchCard";

export default function SearchPage() {
    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab>
                {[
                    <div style={{padding: 24}}>
                        <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
                        <StudioSearchCard/>
                    </div>,
                    <div>レッスン・練習会を探す</div>,
                    <div>ナンバー・イベントを探す</div>
                ]}
            </TopMenuTab>
        </div>
    );
}