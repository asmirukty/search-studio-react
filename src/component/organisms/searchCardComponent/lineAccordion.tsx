import React from 'react';
import {lineItems} from "./itemsAndOptions/lineItems";
import StudioPlaceAccordion from "../../molecules/studioPlaceAccordion";
import {useRecoilState,} from "recoil";
import {lineStationState} from "./atom";
import NewStudioPlaceCheckAccordion from "../../molecules/newStudioCheckAcoordion";

export default function LineAccordion() {
    const [lineStation, setLineStation] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationState);

    const checkLine = (stations: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setLineStation(prevState => [...prevState, item, ...stations])
    }

    const checkStation = (line: {name: string, id: string}, stations: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setLineStation(prevState =>
            !stations.map((station) =>
                [...prevState, item].includes(station)
            ).includes(false) ? [...prevState, line, item] : [...prevState, item]
        )
    }

    const unCheckLine = (stations: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setLineStation(prevState =>
            prevState.filter((element) =>
                element !== item && !(stations.includes(element)))
        )
    }

    const unCheckStation = (line: {name: string, id: string}) => (item: {name: string, id: string}) => {
        setLineStation(prevState =>
            prevState.filter((element) => element !== item && element !== line))
    }

    return (
        <div>
            {
                lineItems.map((lineItem) =>
                    <StudioPlaceAccordion area={lineItem.area} key={lineItem.area}>
                        {
                            lineItem.items.map((item) =>
                                <NewStudioPlaceCheckAccordion
                                    items={lineStation} parentItem={item.line} childItems={item.stations}
                                    checkedParent={checkLine} checkedChild={checkStation}
                                    unCheckedParent={unCheckLine} unCheckedChild={unCheckStation}/>
                            )
                        }
                    </StudioPlaceAccordion>
                )
            }
        </div>
    )
}