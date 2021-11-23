import TopMenuTab from '../organisms/topMenuTab';
import React from "react";
import TopTitleBar from "../organisms/topTitleBar";
import Studio from "../organisms/studioComponent/studio";

export default function StudioPage() {

    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab>
                {[
                    <Studio key={0}/>,
                    <div key={1}>レッスン・練習会を探す</div>,
                    <div key={2}>ナンバー・イベントを探す</div>
                ]}
            </TopMenuTab>
        </div>
    );
}