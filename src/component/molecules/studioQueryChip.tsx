import React from "react";
import RangeLabel from "../rangeLabel";
import {reserveOptions} from "../itemsAndOptions/detailOptions";
import {FromQuery} from "../fromQuery";
import SearchChip from "../atoms/searchChip";
import DateConvert from "../dateConvert";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        chip: {
            display: 'flex',
            padding: 2,
            overflow: 'scroll',
            width: '100%',
            margin: '0 4px'
        }
    })
);

export default function StudioQueryChip() {
    const classes = useStyles();
    const query = FromQuery();
    const placeQuery = [...query.prefecture, ...query.city, ...query.line, ...query.station];

    return (
        <div className={classes.chip}>
            {placeQuery.map((item) => item && <SearchChip key={item.id} label={item.name}/>)}
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
            {query.freeCancel && <SearchChip label={'キャンセル無料期間あり'}/>}
            <SearchChip label={RangeLabel({min: query.priceMin, max: query.priceMax, unit: '円'})}/>
            {query.halfHourSlot && <SearchChip label={reserveOptions[0]}/>}
            {query.fromHalfHour && <SearchChip label={reserveOptions[1]}/>}
            {query.reservation.map((item) => item && <SearchChip key={item} label={item}/>)}
            {query.studioFacility.map((item) => item && <SearchChip key={item} label={item}/>)}
            <SearchChip pre={'鏡'} label={RangeLabel({min: query.mirrorMin, max: query.mirrorMax, unit: 'm'})}/>
            {query.floorMaterial.map((item) => item && <SearchChip key={item} label={item}/>)}
            {query.roomFacility.map((item) => item && <SearchChip key={item} label={item}/>)}
        </div>
    );
}