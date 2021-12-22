import React from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    placeOpenState, prefectureCityState, prefectureChipState, cityChipState,
    lineChipState, stationChipState, lineStationState
} from "../atom";
import StudioDialog from "../molecules/studioDialog";
import {prefItem} from "../atoms/itemsAndOptions/prefItems";
import {lineItem} from "../atoms/itemsAndOptions/lineItems";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuTab from "../molecules/menuTab";
import PrefAccordion from "./prefAccordion";
import LineAccordion from "./lineAccordion";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: '#F9F5F0',
            flexGrow: 1,
            height: '80vh',
            color: "#5A4628",
        },
        appBar: {
            borderColor: "#5A4628",
            position: 'sticky',
        },
        tabs: {
            borderColor: "#5A4628",
            backgroundColor: '#F9F5F0',
            color: "#5A4628",
            minHeight: 24
        }
    })
);

export default function PlaceDialog() {
    const classes = useStyles();
    const [placeOpen, setPlaceOpen] = useRecoilState<boolean>(placeOpenState);
    const prefectureCity = useRecoilValue<{name: string, id: string}[]|any[]>(prefectureCityState);
    const setPrefectureChip = useSetRecoilState<{name: string, id: string}[]|any[]>(prefectureChipState);
    const setCityChip = useSetRecoilState<{name: string, id: string}[]|any[]>(cityChipState);
    const lineStation = useRecoilValue<{name: string, id: string}[]|any[]>(lineStationState);
    const setLineChip = useSetRecoilState<{name: string, id: string}[]|any[]>(lineChipState);
    const setStationChip = useSetRecoilState<{name: string, id: string}[]|any[]>(stationChipState);

    const placeOk = () => {
        setPlaceOpen(false);

        //pref(line)が入っていたら追加、なくてcity(station)が入っていたら追加
        setPrefectureChip([]);
        setCityChip([]);
        prefItem.map((item) =>
            prefectureCity.includes(item.pref) ? setPrefectureChip(prevState => [...prevState, item.pref]) :
                item.cities.map((city) =>
                    prefectureCity.includes(city) && setCityChip(prevState => [...prevState, city])
                )
        );

        setLineChip([]);
        setStationChip([]);
        lineItem.map((item) =>
            lineStation.includes(item.line) ? setLineChip(prevState => [...prevState, item.line]) :
                item.stations.map((station) =>
                    lineStation.includes(station) && setStationChip(prevState => [...prevState, station])
                )
        );
    };

    const placeCancel = () => {
        setPlaceOpen(false);
    };

    return (
        <StudioDialog open={placeOpen} handleCancel={placeCancel} handleOk={placeOk} padding={0}>
            <MenuTab labels={["エリア", "沿線・駅"]}
                     divStyle={classes.root} barStyle={classes.appBar} tabsStyle={classes.tabs}
                     tabFontSize={14} tabFlexGrow={.5} tabMinHeight={32}>
                <PrefAccordion/>
                <LineAccordion/>
            </MenuTab>
        </StudioDialog>
    );
}