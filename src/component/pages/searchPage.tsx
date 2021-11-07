import TopMenuTab from '../organisms/topMenuTab';
import Studio from "../organisms/studio";
import React from "react";
import TopTitleBar from "../organisms/topTitleBar";

export default function SearchPage() {
    return (
        <div>
            <TopTitleBar/>
            <TopMenuTab
                children={[
                    <div style={{padding: 24}}>
                        <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
                        <Studio/>
                    </div>,
                    <div>レッスン・練習会を探す</div>,
                    <div>ナンバー・イベントを探す</div>
                ]}
            />
        </div>
    );
}