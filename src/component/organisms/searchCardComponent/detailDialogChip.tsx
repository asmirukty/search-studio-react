import React from 'react';
import {createStyles, makeStyles} from "@material-ui/core/styles";
import {useRecoilState} from "recoil";
import {detailItemChipState, fromStationChipState, mirrorChipState, priceChipState} from "./atom";
import SearchChip from "../../atoms/searchChip";
import {floorMaterialOptions, reserveOptions, roomFacilityOptions, studioFacilityOptions} from "./itemsAndOptions/detailOptions";
import RangeSearchChip from "../../molecules/rangeSearchChip";

const useStyles = makeStyles(() =>
    createStyles({
        detailChip: {
            marginTop: 8,
            display: 'flex',
            flexWrap: 'wrap'
        },
    }));

export default function DetailDialogChip() {
    const classes = useStyles()
    const [fromStationChip, setFromStationChip] = useRecoilState<number|null>(fromStationChipState);
    const [priceChip, setPriceChip] = useRecoilState<{min: number|null, max: number|null}>(priceChipState);
    const [mirrorChip, setMirrorChip] = useRecoilState<{min: number|null, max: number|null}>(mirrorChipState);
    const [detailItemChip, setDetailItemChip] = useRecoilState<string[]|any[]>(detailItemChipState);

    const fromStationChipDelete = () => {
        setFromStationChip(null)
    }

    const priceChipDelete = () => {
        setPriceChip({min: null, max: null})
    }

    const mirrorChipDelete = () => {
        setMirrorChip({min: null, max: null})
    }

    const detailItemChipDelete = (item: string) => () => {
        setDetailItemChip(prevState =>
            prevState.filter((element) => element !== item))
    }

    return (
        <div className={classes.detailChip}>
            <SearchChip key={'fromStation'} pre={'駅'} label={fromStationChip ? `${fromStationChip}分以内` : null} onDelete={fromStationChipDelete}/>
            <SearchChip key={'cancel'}
                        label={detailItemChip.includes('キャンセル無料期間あり') ? 'キャンセル無料期間あり' : null}
                        onDelete={detailItemChipDelete('キャンセル無料期間あり')}/>
            <RangeSearchChip key={'price'} minLabel={priceChip.min} maxLabel={priceChip.max} unit={'円'} onDelete={priceChipDelete}/>
            {
                [...reserveOptions, ...studioFacilityOptions].map((option) =>
                    detailItemChip.includes(option) &&
                        <SearchChip key={option} label={option} onDelete={detailItemChipDelete(option)}/>
                )
            }
            <SearchChip key={'twoMirror'} pre={'鏡'}
                        label={detailItemChip.includes('2面') ? '2面' : null}
                        onDelete={detailItemChipDelete('2面')}/>
            <RangeSearchChip key={'mirror'} pre={'鏡'} minLabel={mirrorChip.min} maxLabel={mirrorChip.max} unit={'m'} onDelete={mirrorChipDelete}/>
            {
                [...floorMaterialOptions, ...roomFacilityOptions].map((option) =>
                    detailItemChip.includes(option) &&
                        <SearchChip key={option} label={option} onDelete={detailItemChipDelete(option)}/>
                )
            }
        </div>
    )
}