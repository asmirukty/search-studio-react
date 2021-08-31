import React from 'react';
import AreaTabs from "./areaDialogComponent/areaTabs";
import StudioDialog from "../searchDialog";

export default function AreaDialog() {
    return (
        <StudioDialog label={'エリア/沿線、駅を選択'} btn={'btn'}>
            <AreaTabs/>
        </StudioDialog>
    );
}