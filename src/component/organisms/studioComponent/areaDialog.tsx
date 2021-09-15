import React from 'react';
import AreaTabs from "./areaDialogComponent/areaTabs";
import StudioDialog from "../searchDialog";
import AreaAccordions from "./areaDialogComponent/areaAccordion";
import LineAccordions from "./areaDialogComponent/lineAccordions";

export default function AreaDialog() {
    return (
        <StudioDialog label={'エリア/沿線、駅を選択'} btn={'btn'}>
            <AreaTabs area={<AreaAccordions/>} line={<LineAccordions/>}/>
        </StudioDialog>
    );
}