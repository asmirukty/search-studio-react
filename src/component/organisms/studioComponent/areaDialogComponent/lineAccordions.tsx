import React from 'react';
import StudioAreaAccordions from "./studioAreaAccordion";
import StudioPrefAccordion from "./studioPrefAccordion";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        width: {
            width: '100%',
        },
    }));

const itemsA = [
    {line: '', stations: ['']}
]

const itemsB = [
    {line: 'JR山手線', stations: ['渋谷駅', '新宿駅', '池袋駅', '原宿駅']},
    {line: '東京メトロ副都心線', stations: ['渋谷駅', '池袋駅']},
    {line: '西武池袋線', stations: ['池袋駅', '練馬駅', '所沢駅']},
    {line: '西武新宿線', stations: ['西武新宿駅', '高田馬場駅', '所沢駅']}
]

const itemsC = [
    {line: '', stations: ['']}
]

const itemsD = [
    {line: '', stations: ['']}
]

const itemsE = [
    {line: '', stations: ['']}
]

const itemsF = [
    {line: '', stations: ['']}
]

const areaItems = [
    {area: '北海道・東北', items: itemsA},
    {area: '関東', items: itemsB},
    {area: '中部', items: itemsC},
    {area: '関西', items: itemsD},
    {area: '中国・四国', items: itemsE},
    {area: '九州・沖縄', items: itemsF}
]

export default function LineAccordions() {
    const classes = useStyles();

    return (
        <div>
            {
                areaItems.map((areaItem) =>
                    <StudioAreaAccordions area={areaItem.area} key={areaItem.area}>
                        <div className={classes.width}>
                            {
                                areaItem.items.map((item) =>
                                    <StudioPrefAccordion pref={item.line} key={item.line} items={item.stations}/>
                                )
                            }
                        </div>
                    </StudioAreaAccordions>
                )
            }
        </div>
    );
}
