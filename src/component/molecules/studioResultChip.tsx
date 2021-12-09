import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {useRecoilValue} from "recoil";
import {
    areaChipState, dateChipState, detailItemChipState, floorMaterialChipState, fromStationChipState,
    mirrorChipState, peopleChipState, placeChipState, priceChipState, reservationChipState,
    roomFacilityChipState, studioFacilityChipState, studioNameState
} from "../atom";
import RangeLabel from "../atoms/rangeLabel";
import ResultChip from "../atoms/resultChip";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import DateConvert from "../atoms/dateConvert";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 6
        }
    }))

export default function StudioResultChip() {
    const classes = useStyles();
    const placeChip = useRecoilValue(placeChipState);
    const studioName = useRecoilValue(studioNameState);
    const areaChip = useRecoilValue(areaChipState);
    const peopleChip = useRecoilValue(peopleChipState);
    const dateChip = useRecoilValue(dateChipState);
    const fromStationChip = useRecoilValue(fromStationChipState);
    const priceChip = useRecoilValue(priceChipState);
    const mirrorChip = useRecoilValue(mirrorChipState);
    const detailItemChip = useRecoilValue(detailItemChipState);
    const reservationChip = useRecoilValue(reservationChipState);
    const studioFacilityChip = useRecoilValue(studioFacilityChipState);
    const roomFacilityChip = useRecoilValue(roomFacilityChipState);
    const floorMaterialChip = useRecoilValue(floorMaterialChipState);

    const detailLabel = (item: string) => {
        return detailItemChip.includes(item) ? item : null
    }

    return (
        <div className={classes.wrapChip}>
            {
                placeChip.map((item) => <ResultChip key={item} label={item.name}/>)
            }
            <ResultChip label={studioName}/>
            <ResultChip label={RangeLabel({min: areaChip.min, max: areaChip.max, unit: 'm²'})}/>
            <ResultChip label={RangeLabel({min: peopleChip.min, max: peopleChip.max, unit: '人'})}/>
            {
                dateChip.map((item, index) =>
                    <ResultChip key={index} label={DateConvert(item.date)}
                                after={RangeLabel({min: item.startTime, max: item.endTime})}/>
                )
            }
            <ResultChip pre={'駅'} label={fromStationChip} after={'分以内'}/>
            {
                [
                    detailLabel('キャンセル無料期間あり'),
                    RangeLabel({min: priceChip.min, max: priceChip.max, unit: '円'}),
                    detailLabel(reserveOptions[0]),
                    detailLabel(reserveOptions[1]),
                    ...reservationChip,
                    ...studioFacilityChip,
                    detailLabel('鏡2面')
                ].map((item) => <ResultChip key={item} label={item}/>)
            }
            <ResultChip pre={'鏡'} label={RangeLabel({min: mirrorChip.min, max: mirrorChip.max, unit: 'm'})}/>
            {
                [...floorMaterialChip, ...roomFacilityChip].map((item) => <ResultChip key={item} label={item}/>)
            }
        </div>
    );
}