import React from 'react';
import StudioPlaceAccordion from "../../molecules/studioPlaceAccordion";
import {prefItems} from "./itemsAndOptions/prefItems";
import {useRecoilState,} from "recoil";
import {prefectureCityState} from "./atom";
import NewStudioPlaceCheckAccordion from "../../molecules/newStudioCheckAcoordion";

export default function AreaAccordion() {
    const [prefectureCity, setPrefectureCity] = useRecoilState<{name: string, id: string}[]|any[]>(prefectureCityState);

    const checkPref = (cities: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setPrefectureCity(prevState => [...prevState, item, ...cities])
    }

    const checkCity = (pref: {name: string, id: string}, cities: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setPrefectureCity(prevState =>
            !cities.map((city) =>
                [...prevState, item].includes(city)
            ).includes(false) ? [...prevState, pref, item] : [...prevState, item]
        )
    }

    const unCheckPref = (cities: {name: string, id: string}[]) => (item: {name: string, id: string}) => {
        setPrefectureCity(prevState =>
            prevState.filter((element) =>
                element !== item && !(cities.includes(element)))
        )
    }

    const unCheckCity = (pref: {name: string, id: string}) => (item: {name: string, id: string}) => {
        setPrefectureCity(prevState =>
            prevState.filter((element) => element !== item && element !== pref))
    }

    return (
        <div>
            {
                prefItems.map((areaItem) =>
                    <StudioPlaceAccordion area={areaItem.area} key={areaItem.area}>
                        {
                            areaItem.items.map((item, index) =>
                                <NewStudioPlaceCheckAccordion
                                    key={index} items={prefectureCity} parentItem={item.pref} childItems={item.cities}
                                    checkedParent={checkPref} checkedChild={checkCity}
                                    unCheckedParent={unCheckPref} unCheckedChild={unCheckCity}/>
                            )
                        }
                    </StudioPlaceAccordion>
                )
            }
        </div>
    )
}