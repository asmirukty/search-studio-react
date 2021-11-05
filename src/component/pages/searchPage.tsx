import MenuTabs from '../organisms/menuTabs';
import TitleBar from '../organisms/titleBar';
import Studio from "../organisms/studio";
import React from "react";

export default function SearchPage() {
    return (
        <div>
            <TitleBar/>
            <MenuTabs children={
                <div style={{padding: 24}}>
                <h3 style={{textAlign: 'center'}}>スタジオを検索</h3>
                <Studio/>
                </div>
            }/>
        </div>
    );
}