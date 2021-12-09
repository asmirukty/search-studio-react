import React from 'react';
import PlaceAccordion from "../molecules/placeAccordion";
import {prefItems} from "../atoms/itemsAndOptions/prefItems";
import {useRecoilState,} from "recoil";
import {prefectureCityState} from "../atom";
import PlaceCheckAccordion from "../molecules/placeCheckAcoordion";

export default function PrefAccordion() {
    const [prefectureCity, setPrefectureCity] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureCityState);

    const checkPref = (cities: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        //citiesも入れる
        setPrefectureCity(prevState => [...prevState, item, ...cities]);
    };

    const checkCity = (pref: {name: string, id: string}, cities: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        //item含めcities全て入っていたらprefも入れる
        setPrefectureCity(prevState =>
            !(cities.map((city) => [...prevState, item].includes(city)).includes(false)) ?
                [...prevState, pref, item] : [...prevState, item]
        );
    };

    const unCheckPref = (cities: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        //citiesも消す
        setPrefectureCity(prevState =>
            prevState.filter((element) => element !== item && !(cities.includes(element)))
        );
    };

    const unCheckCity = (pref: {name: string, id: string}) => (item: {name: string, id: string}) => {
        //prefも消す
        setPrefectureCity(prevState =>
            prevState.filter((element) => element !== item && element !== pref)
        );
    };

    return (
        <div>
            {
                prefItems.map((areaItem) =>
                    <PlaceAccordion area={areaItem.area} key={areaItem.area}>
                        {
                            areaItem.items.map((item, index) =>
                                <PlaceCheckAccordion
                                    key={index} items={prefectureCity} parentItem={item.pref} childItems={item.cities}
                                    checkedParent={checkPref} checkedChild={checkCity}
                                    unCheckedParent={unCheckPref} unCheckedChild={unCheckCity}/>
                            )
                        }
                    </PlaceAccordion>
                )
            }
        </div>
    );
}