import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import RangeLabel from "../atoms/rangeLabel";
import {reserveOptions} from "../atoms/itemsAndOptions/detailOptions";
import DateConvert from "../atoms/dateConvert";
import {FromQuery} from "../atoms/fromQuery";
import SearchChip from "../atoms/searchChip";

const useStyles = makeStyles(() =>
    createStyles({
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 4,
        }
    }))

export default function StudioResultChip() {
    const classes = useStyles();

    const query = FromQuery();
    const placeQuery = [...query.prefecture, ...query.city, ...query.line, ...query.station];

    return (
        <div className={classes.wrapChip}>
            {
                placeQuery.map((item) => item && <SearchChip key={item.id} label={item.name}/>)
            }
            <SearchChip label={query.studioName}/>
            <SearchChip label={RangeLabel({min: query.areaMin, max: query.areaMax, unit: 'm²'})}/>
            <SearchChip label={RangeLabel({min: query.peopleMin, max: query.peopleMax, unit: '人'})}/>
            {
                query.date.map((item, index) =>
                    item && <SearchChip key={index} label={DateConvert(item.date)}
                                        after={RangeLabel({min: item.startTime, max: item.endTime})}/>
                )
            }
            <SearchChip pre={'駅'} label={query.fromStation} after={'分以内'}/>
            {
                query.freeCancel && <SearchChip label={'キャンセル無料期間あり'}/>
            }
            <SearchChip label={RangeLabel({min: query.priceMin, max: query.priceMax, unit: '円'})}/>
            {
                query.halfHourSlot && <SearchChip label={reserveOptions[0]}/>
            }
            {
                query.fromHalfHour && <SearchChip label={reserveOptions[1]}/>
            }
            {
                [...query.reservation, ...query.studioFacility].map((item) =>
                    item && <SearchChip key={item} label={item}/>
                )
            }
            <SearchChip pre={'鏡'} label={RangeLabel({min: query.mirrorMin, max: query.mirrorMax, unit: 'm'})}/>
            {
                [...query.floorMaterial, ...query.roomFacility].map((item) =>
                    item && <SearchChip key={item} label={item}/>
                )
            }
        </div>
    );
}