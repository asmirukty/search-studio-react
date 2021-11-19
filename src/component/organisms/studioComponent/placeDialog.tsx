import React, {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import useCheckGroup from "../use-check-group";
import StudioDialog from "./studioDialog";
import SearchChip from "../../molecules/searchChip";
import PlaceTabs from "./placeDialogComponent/placeTabs";
import StudioPlaceAccordion from "./placeDialogComponent/studioPlaceAccordion";
import StudioPlaceSubAccordion from "./placeDialogComponent/studioPlaceSubAccordion";
import {prefItems} from "./placeDialogComponent/prefItems";
import {lineItems} from "./placeDialogComponent/lineItems";
import SearchCheckbox from "./searchCheckbox";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
        }
    }));

interface PlaceDialogProps {
    pref: any[], city: any[], line: any[], station: any[],
    changePref: (value: any[]) => void;
    changeCity: (value: any[]) => void;
    changeLine: (value: any[]) => void;
    changeStation: (value: any[]) => void;
    deletePref: (value: any) => void;
    deleteCity: (value: any) => void;
    deleteLine: (value: any) => void;
    deleteStation: (value: any) => void;
}

export default function PlaceDialog(props: PlaceDialogProps) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [pref, city, checkedPref, checkedCity, unCheckedPref, unCheckedCity, deletePref, deleteCity] = useCheckGroup(open, props.pref, props.city, props.deletePref, props.deleteCity)
    const [line, station, checkedLine, checkedStation, unCheckedLine, unCheckedStation, deleteLine, deleteStation] = useCheckGroup(open, props.line, props.station, props.deleteLine, props.deleteStation)

    return (
        <StudioDialog
            funcs={[props.changePref, props.changeCity, props.changeLine, props.changeStation]}
            state={[pref, city, line, station]}
            openCheck={setOpen}
            labelCheck={pref.length === 0 && city.length === 0 && line.length === 0 && station.length === 0}
            label={'エリア/沿線、駅を選択'}
            chips={
                <div className={classes.wrapChip}>
                    {
                        prefItems.map((prefItem) =>
                            prefItem.items.map((item) =>
                                pref.includes(item.pref) ?
                                    <SearchChip key={item.pref.id} label={item.pref.name} onDelete={deletePref(item.pref, item.cities)}/>
                                    :
                                    item.cities.map((c) =>
                                        city.includes(c) && <SearchChip key={c.id} label={c.name} onDelete={deleteCity(c)}/>
                                    )
                            )
                        )
                    }
                    {
                        lineItems.map((lineItem) =>
                            lineItem.items.map((item) =>
                                line.includes(item.line) ?
                                    <SearchChip key={item.line.id} label={item.line.name} onDelete={deleteLine(item.line, item.stations)}/>
                                    :
                                    item.stations.map((s) =>
                                        station.includes(s) && <SearchChip key={s.id} label={s.name} onDelete={deleteStation(s)}/>
                                    )
                            )
                        )
                    }
                </div>}
            content={
                <PlaceTabs
                    area={
                        prefItems.map((areaItem) =>
                            <StudioPlaceAccordion area={areaItem.area} key={areaItem.area}>
                                    {
                                        areaItem.items.map((item) =>
                                            <StudioPlaceSubAccordion parentId={item.pref.id}
                                                    parent={
                                                        <SearchCheckbox item={item.pref} itemName={item.pref.name} key={item.pref.id} pref checked={pref.includes(item.pref)}
                                                                        itemChecked={checkedPref(item.cities)} itemUnChecked={unCheckedPref(item.cities)}/>
                                                    }
                                                    children={
                                                        item.cities.map((c) => (
                                                            <SearchCheckbox item={c} itemName={c.name} key={c.id} checked={city.includes(c)}
                                                                            itemChecked={checkedCity(item.pref, item.cities)} itemUnChecked={unCheckedCity(item.pref)}/>
                                                        ))
                                                    }/>
                                        )
                                    }
                            </StudioPlaceAccordion>
                        )
                    }
                    line={
                        lineItems.map((lineItem) =>
                            <StudioPlaceAccordion area={lineItem.area} key={lineItem.area}>
                                    {
                                        lineItem.items.map((item) =>
                                            <StudioPlaceSubAccordion parentId={item.line.id}
                                                    parent={
                                                        <SearchCheckbox item={item.line} itemName={item.line.name} key={item.line.id} pref checked={line.includes(item.line)}
                                                                        itemChecked={checkedLine(item.stations)} itemUnChecked={unCheckedLine(item.stations)}/>
                                                    }
                                                    children={
                                                        item.stations.map((s) => (
                                                            <SearchCheckbox item={s} itemName={s.name} key={s.id} checked={station.includes(s)}
                                                                            itemChecked={checkedStation(item.line, item.stations)} itemUnChecked={unCheckedStation(item.line)}/>
                                                        ))
                                                    }/>
                                        )
                                    }
                            </StudioPlaceAccordion>
                        )
                    }/>
            }/>
    )
}