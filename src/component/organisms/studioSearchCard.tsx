import React from "react";
import {Card, CardContent} from "@material-ui/core";
import StudioSearchButton from "../atoms/studioSearchButton";
import StudioPlace from "../molecules/studioPlace";
import StudioSpace from "../molecules/studioSpace";
import StudioDate from "../molecules/studioDate";
import StudioDetail from "../molecules/studioDetail";

export default function StudioSearchCard(props: {isWide?: boolean, close?: (value?: any) => void;}) {
    const {isWide} = props;
    return (
            <div style={
                isWide ? {backgroundColor: 'white', borderRadius: 4, minWidth: 520, maxWidth: 800, margin: 'auto', padding: '20px 24px 24px'}
                : {boxShadow:'4px 4px 4px #F9F5F0', backgroundColor: 'white', borderRadius: 4, minWidth: 200, maxWidth: 400, margin: 'auto', padding: '16px 16px 20px'}
                }>
                <StudioPlace isWide={isWide}/>
                <div style={isWide ? {display: 'flex', marginBottom: 8} : {}}>
                    <StudioSpace isWide={isWide}/>
                    <StudioDate isWide={isWide}/>
                </div>
                <StudioDetail isWide={isWide}/>
                <div style={{margin: '8px auto 0', width: 'fit-content'}}>
                    <StudioSearchButton close={props.close}/>
                </div>
            </div>
    )
}