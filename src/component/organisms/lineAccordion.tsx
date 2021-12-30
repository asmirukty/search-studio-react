import React from 'react';
import {lineItem, lineItems} from "../itemsAndOptions/lineItems";
import PlaceAccordion from "../molecules/placeAccordion";
import {useRecoilState,} from "recoil";
import {lineStationState} from "../atom";
import PlaceCheckAccordion from "../molecules/placeCheckAcoordion";

export default function LineAccordion() {
    const [lineStation, setLineStation] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationState);

    const idArray = (array: {name: string, id: string}[]) => {
        return array.map((item) => item.id)
    };

    const checkLine = (stations: {name: string, id: string}[]) => (newLine: {name: string, id: string}) => {
        setLineStation(prevState => [...prevState, newLine]);
        //stationsまだだったら入れる
        stations.map((station) =>
            !idArray(lineStation).includes(station.id) && setLineStation(prevState =>[...prevState, station])
        );
        //item.lineが入っていなくてitem.stationsが全て入っていたらitem.line入れる
        lineItem.map((item) =>
            ![newLine, ...lineStation].includes(item.line) &&
                !(item.stations.map((station) =>
                   idArray([...stations, ...lineStation]).includes(station.id)
                ).includes(false)) && setLineStation(prevState => [...prevState, item.line])
        );
    };

    const checkStation = () => (newStation: {name: string, id: string}) => {
        setLineStation(prevState => [...prevState, newStation]);
        //item.lineが入っていなくてitem.stationsが全て入っていたらitem.line入れる
        lineItem.map((item) =>
            !lineStation.includes(item.line) &&
                !(item.stations.map((station) =>
                    idArray([newStation, ...lineStation]).includes(station.id)
                ).includes(false)) && setLineStation(prevState => [...prevState, item.line])
        );
    };

    const unCheckLine = (stations: {name: string, id: string}[]) => (newLine: {name: string, id: string}) => {
        setLineStation(prevState =>
            prevState.filter((element) =>
                element !== newLine && !idArray(stations).includes(element.id)
            )
        );
        //item.lineが入っていてitem.stationsにstationsと同じものがあればitem.line消す
        lineItem.map((item) =>
            lineStation.includes(item.line) &&
                item.stations.map((station) => idArray(stations).includes(station.id)).includes(true) &&
                    setLineStation(prevState =>
                        prevState.filter((element) => element !== item.line)
                    )
        );
    };

    const unCheckStation = () => (newStation: {name: string, id: string}) => {
        setLineStation(prevState =>
            prevState.filter((element) => element.id !== newStation.id)
        );
        //item.lineが入っていてitem.stationsにitemがあればitem.line消す

        lineItem.map((item) =>
            lineStation.includes(item.line) && idArray(item.stations).includes(newStation.id) &&
                setLineStation(prevState =>
                    prevState.filter((element) => element !== item.line)
                )
        );
    };

    return (
        <div>
            {
                lineItems.map((lineItem) =>
                    <PlaceAccordion area={lineItem.area} key={lineItem.area}>
                        {
                            lineItem.items.map((item, index) =>
                                <PlaceCheckAccordion
                                    key={index} items={lineStation} parentItem={item.line} childItems={item.stations}
                                    checkedParent={checkLine} checkedChild={checkStation}
                                    unCheckedParent={unCheckLine} unCheckedChild={unCheckStation}/>
                            )
                        }
                    </PlaceAccordion>
                )
            }
        </div>
    );
}