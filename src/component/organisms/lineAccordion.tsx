import React, {useEffect} from 'react';
import {lineItem, lineItems} from "../atoms/itemsAndOptions/lineItems";
import PlaceAccordion from "../molecules/placeAccordion";
import {useRecoilState,} from "recoil";
import {lineStationState} from "../atom";
import PlaceCheckAccordion from "../molecules/placeCheckAcoordion";

export default function LineAccordion() {
    const [lineStation, setLineStation] = useRecoilState<{name: string, id: string}[]|any[]>(lineStationState);

    useEffect(() => {
        lineItem.map((item) => {
            !lineStation.includes(item.line) ? //item.lineが入っていなかったら
                //item.stationsが全て入っていたらitem.line入れる
                !(item.stations.map((s) =>
                    lineStation.map((item) => item.id).includes(s.id)
                ).includes(false)) && setLineStation(prevState => [...prevState, item.line])
                : //item.lineが入っていてitem.stationsが入っていないのがあればitem.line消す
                item.stations.map((station) =>
                    lineStation.map((item) => item.id).includes(station.id) //含む
                ).includes(false) && setLineStation(prevState =>
                    prevState.filter((element) => element !== item.line))
        });
    }, [lineStation])

    const checkLine = (stations: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setLineStation(prevState => [...prevState, item]);
        //stationsまだだったら入れる
        stations.map((station) =>
            !lineStation.map((item) => item.id).includes(station.id) && //含まない
            setLineStation(prevState => [...prevState, station])
        );
    };

    const checkStation = () => (item: {name: string, id: string}) => {
        setLineStation(prevState => [...prevState, item]);
    };

    const unCheckLine = (stations: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setLineStation(prevState =>
            prevState.filter((element) =>
                element !== item && !stations.map((station) => station.id).includes(element.id))
        );
    };

    const unCheckStation = (line: {name: string, id: string}) => (item: {name: string, id: string}) => {
        setLineStation(prevState =>
            prevState.filter((element) => element.id !== item.id && element !== line)
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