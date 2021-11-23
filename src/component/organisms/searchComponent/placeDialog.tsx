import React, {useState} from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import useCheckGroup from "../use-check-group";
import StudioDialog from "./studioDialog";
import PlaceTabs from "./placeDialogComponent/placeTabs";
import StudioPlaceAccordion from "./placeDialogComponent/studioPlaceAccordion";
import {prefItems} from "./placeDialogComponent/prefItems";
import {lineItems} from "./placeDialogComponent/lineItems";
import StudioPlaceCheckAccordion from "./placeDialogComponent/studioPlaceCheckAccordion";
import PlaceSearchChip from "./placeDialogComponent/placeSearchChip";

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
                            prefItem.items.map((item, index) =>
                                <PlaceSearchChip key={index} parentItem={item.pref} childItems={item.cities}
                                                 parent={pref} children={city} deleteParent={deletePref} deleteChild={deleteCity}/>
                            )
                        )
                    }
                    {
                        lineItems.map((lineItem) =>
                            lineItem.items.map((item, index) =>
                                <PlaceSearchChip key={index} parentItem={item.line} childItems={item.stations}
                                                 parent={line} children={station} deleteParent={deleteLine} deleteChild={deleteStation}/>
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
                                        areaItem.items.map((item, index) =>
                                            <StudioPlaceCheckAccordion
                                                key={index} parents={pref} children={city} parentItem={item.pref} childItems={item.cities}
                                                checkedParent={checkedPref} checkedChild={checkedCity} unCheckedParent={unCheckedPref} unCheckedChild={unCheckedCity}/>
                                        )
                                    }
                            </StudioPlaceAccordion>
                        )
                    }
                    line={
                        lineItems.map((lineItem) =>
                            <StudioPlaceAccordion area={lineItem.area} key={lineItem.area}>
                                    {
                                        lineItem.items.map((item, index) =>
                                            <StudioPlaceCheckAccordion
                                                key={index} parents={line} children={station} parentItem={item.line} childItems={item.stations}
                                                checkedParent={checkedLine} checkedChild={checkedStation} unCheckedParent={unCheckedLine} unCheckedChild={unCheckedStation}/>
                                        )
                                    }
                            </StudioPlaceAccordion>
                        )
                    }/>
            }/>
    )
}