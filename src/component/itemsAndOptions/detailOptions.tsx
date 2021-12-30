export const fromStationOptions = [
    '指定なし',　3, 5, 7, 10
];

export const minPriceOptions = [
    '下限なし', 500, 1000,　1500, 2000,　2500, 3000,　3500, 4000, 4500, 5000,　6000, 7000,　8000, 9000, 10000
];

export const maxPriceOptions = [
    '上限なし', 500, 1000,　1500, 2000,　2500, 3000,　3500, 4000, 4500, 5000,　6000, 7000,　8000, 9000, 10000
];

export const reservationOptions = [
    "Webから予約", "LINEで予約",
];

export const reserveOptions = [
    '30分単位', "30分から予約可", ...reservationOptions
];

export const minMirrorOptions = [
    '下限なし', 5, 10,　15, 20,　25, 30,　35, 40, 45, 50
];

export const maxMirrorOptions = [
    '上限なし', 5, 10,　15, 20,　25, 30,　35, 40, 45, 50
];

export const studioFacilityOptions = [
    '男性更衣室', '女性更衣室', "シャワールーム", "喫煙室",
    "待合スペース", "駐車場", "Wi-Fi"
];

export const floorMaterialOptions = [
    'フローリング', 'リノリウム', '塩ビタイル'
];

export const lightAndFilmingOptions = [
    '明るさ調節', "スタンドライト", "カラーライト", "ミラーボール",
    "スマホ用三脚", "スマホ固定台(壁付)", "スマホ用広角レンズ", "その他撮影機材"
];

export const soundAndMovieOptions = [
    'CD利用', "iPod利用", "BlueTooth利用", "ミキサー", "DJセット",
    "マイク", "ヘッドセットマイク", "マイクスタンド", "キーボード",
    "譜面台", "プロジェクター", "モニター", "Blu-rayデッキ"
]

export const amenityOptions = [
    '机', "イス", "ホワイトボード", "パーテーション", "カーテン/更衣スペース",
    "バレエバー", "タップ板", "ヨガマット", "ヨガグッズ", "トレーニンググッズ",
    "ヒールカバー", "ハンガー", "充電器", "アルコール消毒"
];


export const roomFacilityOptions = [
    ...lightAndFilmingOptions, ...soundAndMovieOptions, ...amenityOptions
];
