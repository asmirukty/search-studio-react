const itemsA = [
    {line: {name: 'JR東北本線', id: 'A05'}, stations: [{name: '仙台駅', id: 'S09'}]}
]

const itemsB = [
    {line: {name: 'JR山手線', id: 'A01'},
        stations: [
            {name: '渋谷駅', id: 'S01'},
            {name: '新宿駅', id: 'S02'},
            {name: '池袋駅', id: 'S03'},
            {name: '原宿駅', id: 'S04'}
        ]
    },
    {
        line: {name: '東京メトロ副都心線', id: 'A02'},
        stations: [
            {name: '渋谷駅', id: 'S01'},
            {name: '池袋駅', id: 'S03'}
        ]
    },
    {
        line: {name: '西武池袋線', id: 'A03'},
        stations: [
            {name: '池袋駅', id: 'S03'},
            {name: '練馬駅', id: 'S05'},
            {name: '所沢駅', id: 'S06'}
        ]
    },
    {
        line: {name: '西武新宿線', id: 'A04'},
        stations: [
            {name: '西武新宿駅', id: 'S07'},
            {name: '所沢駅', id: 'S06'},
            {name: '本川越駅', id: 'S08'}
        ]
    }
]

const itemsC = [
    {line: {name: '東海道本線', id: 'A06'}, stations: [{name: '名古屋駅', id: 'S10'}]}
]

const itemsD = [
    {line: {name: 'JR神戸線', id: 'A07'}, stations: [{name: '大阪駅', id: 'S11'}]}
]

const itemsE = [
    {line: {name: '山陽本線', id: 'A08'}, stations: [{name: '広島駅', id: 'S12'}]}
]

const itemsF = [
    {line: {name: '博多南線', id: 'A09'}, stations: [{name: '博多駅', id: 'S13'}]}
]

export const lineItems = [
    {area: '北海道・東北', items: itemsA},
    {area: '関東', items: itemsB},
    {area: '中部', items: itemsC},
    {area: '関西', items: itemsD},
    {area: '中国・四国', items: itemsE},
    {area: '九州・沖縄', items: itemsF}
]
