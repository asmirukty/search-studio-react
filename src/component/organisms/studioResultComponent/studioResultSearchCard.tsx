import {Card, CardContent, Typography} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import StudioResultDialog from "./studioResultDialog";
import {useRecoilValue} from "recoil";
import {
    areaChipState, cityChipState, dateChipState, detailItemChipState, fromStationChipState, lineChipState,
    mirrorChipState, peopleChipState, prefectureChipState, priceChipState, stationChipState, studioNameState
} from "../searchCardComponent/atom";
import RangeLabel from "../../atoms/rangeLabel";
import React from "react";
import ResultChip from "../../atoms/resultChip";
import DateTimeConvert from "../../atoms/dateTimeConvert";
import {
    floorMaterialOptions, reserveOptions, roomFacilityOptions, studioFacilityOptions
} from "../searchCardComponent/itemsAndOptions/detailOptions";


const useStyles = makeStyles(() =>
    createStyles({
        topCard: {
            margin: '0 8px',
            zIndex: 1100,
            position:'sticky',
            top: 108
        },
        card: {
            color: "#5A4628",
            padding: '12px 16px 8px',
            '&:last-child': {
                paddingBottom: 8
            }
        },
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 6
        },
        spaceBetween: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
    }))

export default function StudioResultSearchCard() {
    const classes = useStyles();
    const prefectureChip =  useRecoilValue(prefectureChipState);
    const cityChip = useRecoilValue(cityChipState);
    const lineChip = useRecoilValue(lineChipState);
    const stationChip = useRecoilValue(stationChipState);
    const placeChip = [...prefectureChip, ...cityChip, ...lineChip, ...stationChip];
    const studioName = useRecoilValue(studioNameState);
    const areaChip = useRecoilValue(areaChipState);
    const peopleChip = useRecoilValue(peopleChipState);
    const dateChip = useRecoilValue(dateChipState);
    const fromStationChip = useRecoilValue(fromStationChipState);
    const priceChip = useRecoilValue(priceChipState);
    const mirrorChip = useRecoilValue(mirrorChipState);
    const detailItemChip = useRecoilValue(detailItemChipState);

    return (
        <Card className={classes.topCard}>
            <CardContent className={classes.card}>
                <Typography variant='subtitle2' style={{fontWeight: 'bold'}}>検索条件</Typography>
                <div className={classes.spaceBetween}>
                    <div className={classes.wrapChip}>
                        {
                            placeChip.length > 0 && placeChip.map((item) => <ResultChip key={item} label={item.name}/>)
                        }
                        <ResultChip label={studioName}/>
                        <ResultChip label={RangeLabel({min: areaChip.min, max: areaChip.max, unit: 'm²'})}/>
                        <ResultChip label={RangeLabel({min: peopleChip.min, max: peopleChip.max, unit: '人'})}/>
                        {
                            dateChip.length > 0 &&
                            dateChip.map((item, index) =>
                                item.date && <ResultChip key={index} label={DateTimeConvert({date: item.date, startTime: item.startTime, endTime: item.endTime})}/>
                            )
                        }
                        <ResultChip pre={'駅'} label={fromStationChip ? `${fromStationChip}分以内` : null}/>
                        <ResultChip label={detailItemChip.includes('キャンセル無料期間あり') ? 'キャンセル無料期間あり' : null}/>
                        <ResultChip label={RangeLabel({min: priceChip.min, max: priceChip.max, unit: '円'})}/>
                        {
                            [...reserveOptions, ...studioFacilityOptions].map((option) =>
                                detailItemChip.includes(option) && <ResultChip key={option} label={option}/>
                            )
                        }
                        <ResultChip label={detailItemChip.includes('鏡2面') ? '鏡2面' : null}/>
                        <ResultChip pre={'鏡'} label={RangeLabel({min: mirrorChip.min, max: mirrorChip.max, unit: 'm'})}/>
                        {
                            [...floorMaterialOptions, ...roomFacilityOptions].map((option) =>
                                detailItemChip.includes(option) && <ResultChip key={option} label={option}/>
                            )
                        }
                    </div>
                    <StudioResultDialog/>
                </div>
            </CardContent>
        </Card>
    )
}