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
                    <Studio/>,
                    <div>レッスン・練習会を探す</div>,
                    <div>ナンバー・イベントを探す</div>
                ]}
            </TopMenuTab>
        </div>
    );
}