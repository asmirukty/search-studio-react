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
    {pref: '北海道', cities: ['札幌市']}
]

const itemsB = [
    {pref: '東京都', cities: ['渋谷区', '新宿区', '豊島区', '練馬区', '中央区']},
    {pref: '神奈川県', cities: ['横浜市',]},
    {pref: '千葉県', cities: ['千葉市',]},
    {pref: '埼玉県', cities: ['さいたま市', '所沢市', '川越市',]},
]

const itemsC = [
    {pref: '愛知県', cities: ['名古屋市']}
]

const itemsD = [
    {pref: '大阪府', cities: ['大阪市']}
]

const itemsE = [
    {pref: '広島県', cities: ['広島市']}
]

const itemsF = [
    {pref: '沖縄県', cities: ['那覇市']}
]

const areaItems = [
    {area: '北海道・東北', items: itemsA},
    {area: '関東', items: itemsB},
    {area: '中部', items: itemsC},
    {area: '関西', items: itemsD},
    {area: '中国・四国', items: itemsE},
    {area: '九州・沖縄', items: itemsF}
]

export default function AreaAccordions() {
    const classes = useStyles();

    return (
        <div>
            {areaItems.map((areaItem) =>
                <StudioAreaAccordions area={areaItem.area}>
                    <div className={classes.width}>
                        {areaItem.items.map((item) =>
                            <StudioPrefAccordion pref={item.pref} items={item.cities}/>
                        )}
                    </div>
                </StudioAreaAccordions>
            )}
        </div>
    );
}
