import React from "react";
import {Typography} from "@material-ui/core";
import SpaceButton from "../molecules/spaceButton";

export default function StudioSpace(props: {isWide?: boolean}) {
    const {isWide} = props;

    return (
        <div style={isWide ? {width: '50%'} : {marginBottom: 8}}>
            <Typography>広さ</Typography>
            <SpaceButton/>
        </div>
    );
}