import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import RangeLabel from "../atoms/rangeLabel";
import ResultChip from "../atoms/resultChip";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import DateConvert from "../atoms/dateConvert";
import {FromQuery} from "../atoms/fromQuery";

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

    const query = FromQuery();
    const placeQuery = [...query.prefecture, ...query.city, ...query.line, ...query.station];

    return (
        <div className={classes.wrapChip}>
            {
                placeQuery.map((item) => item && <ResultChip key={item.id} label={item.name}/>)
            }
            <ResultChip label={query.studioName}/>
            <ResultChip label={RangeLabel({min: query.areaMin, max: query.areaMax, unit: 'm²'})}/>
            <ResultChip label={RangeLabel({min: query.peopleMin, max: query.peopleMax, unit: '人'})}/>
            {
                query.date.map((item, index) =>
                    item && <ResultChip key={index} label={DateConvert(item.date)}
                                        after={RangeLabel({min: item.startTime, max: item.endTime})}/>
                )
            }
            <ResultChip pre={'駅'} label={query.fromStation} after={'分以内'}/>
            {
                query.freeCancel && <ResultChip label={'キャンセル無料期間あり'}/>
            }
            <ResultChip label={RangeLabel({min: query.priceMin, max: query.priceMax, unit: '円'})}/>
            {
                query.halfHourSlot && <ResultChip label={reserveOptions[0]}/>
            }
            {
                query.fromHalfHour && <ResultChip label={reserveOptions[1]}/>
            }
            {
                [...query.reservation, ...query.studioFacility].map((item) =>
                    item && <ResultChip key={item} label={item}/>
                )
            }
            <ResultChip pre={'鏡'} label={RangeLabel({min: query.mirrorMin, max: query.mirrorMax, unit: 'm'})}/>
            {
                [...query.floorMaterial, ...query.roomFacility].map((item) =>
                    item && <ResultChip key={item} label={item}/>
                )
            }
        </div>
    );
}