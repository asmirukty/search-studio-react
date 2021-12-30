const itemsA = [
    {
        pref: {name: '北海道', id: 'A01'},
        cities: [
            {name: '札幌市', id: 'S01'}
        ]
    }
]

const itemsB = [
    {
        pref: {name: '東京都', id: 'A02'},
        cities: [
            {name: '渋谷区', id: 'S02'},
            {name: '新宿区', id: 'S03'},
            {name: '豊島区', id: 'S04'},
            {name: '練馬区', id: 'S05'},
            {name: '中央区', id: 'S06'}
        ]
    },
    {
        pref: {name: '神奈川県', id: 'A03'},
        cities: [
            {name: '横浜市', id: 'S07'},
        ]
    },
    {
        pref: {name: '千葉県', id: 'A04'},
        cities: [
            {name: '千葉市', id: 'S08'},
        ]
    },
    {
        pref: {name: '埼玉県', id: 'A05'},
        cities: [
            {name: 'さいたま市', id: 'S09'},
            {name: '所沢市', id: 'S10'},
            {name: '川越市', id: 'S11'},
        ]
    },
]

const itemsC = [
    {
        pref: {name: '愛知県', id: 'A06'},
        cities: [
            {name: '名古屋市', id: 'S12'}
        ]
    }
]

const itemsD = [
    {
        pref: {name: '大阪府', id: 'A07'},
        cities: [
            {name: '大阪市', id: 'S13'}
        ]
    }
]

const itemsE = [
    {
        pref: {name: '広島県', id: 'A08'},
        cities: [
            {name: '広島市', id: 'S14'}
        ]
    }
]

const itemsF = [
    {
        pref: {name: '沖縄県', id: 'A09'},
        cities: [
            {name: '那覇市', id: 'S15'}
        ]
    }
]

export const prefItems = [
    {area: '北海道・東北', items: itemsA},
    {area: '関東', items: itemsB},
    {area: '中部', items: itemsC},
    {area: '関西', items: itemsD},
    {area: '中国・四国', items: itemsE},
    {area: '九州・沖縄', items: itemsF}
]

export const prefItem = [
    ...itemsA, ...itemsB, ...itemsC, ...itemsD, ...itemsE, ...itemsF
]
