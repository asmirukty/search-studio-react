import React from "react";
import {useRecoilValue} from "recoil";
import {studioSearchPaperOpenState} from "../atom";
import StudioQueryPaper from "../organisms/studioQueryPaper";
import StudioSearchPaper from "../organisms/studioSearchPaper";

export default function StudioQueryChange(props: {isWide: boolean}) {
    const {isWide} = props;
    const open = useRecoilValue(studioSearchPaperOpenState);

    return (
        <div style={
            isWide ? {flexGrow: 1, width: 240, position: 'static', margin: '44px 20px 0 0'}
                : {position: 'sticky', top: 112, zIndex: 1100}
        }>
            <StudioQueryPaper isWide={isWide}/>
            {
                (open || isWide) && <StudioSearchPaper/>
            }
        </div>
    );
}