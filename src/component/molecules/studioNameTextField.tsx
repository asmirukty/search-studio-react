import React from 'react';
import {useRecoilState} from "recoil";
import {studioNameState} from "../atom";
import SearchTextField from "../atoms/searchTextField";

export default function StudioNameTextField() {
    const [studioName, setStudioName] = useRecoilState<string>(studioNameState);

    const textChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudioName(event.target.value)
    };

    return (
        <SearchTextField label="スタジオ名を入力" onChange={textChange} value={studioName}/>
    );
}
