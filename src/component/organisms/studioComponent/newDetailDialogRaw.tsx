import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import {InputLabel, Typography} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import NewSearchCheckbox from "./newSearchCheckbox";

const useStyles = makeStyles(() =>
    createStyles( {
        right: {
            textAlign: 'right'
        },
        btn: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
        },
        detailBtn: {
            color: '#5A4628',
            fontSize: 14,
            padding: '3px 4px',
            margin: '0 0 8px',
        },
        dialogBtn: {
            backgroundColor: '#F9F5F0',
            padding: '4px 8px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        dialogClose: {
            color: '#5A4628',
            minWidth: 20,
            padding: 0
        },
        dialogOk: {
            color: '#5A4628',
            fontSize: 14,
            fontWeight: 'bold',
            minWidth: 20,
            padding: '0 4px'
        },
        content: {
            color: "#5A4628",
            padding: '24px 24px 8px',
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        },
        select: {
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: 12
        },
        formControl: {
            margin: 4,
            minWidth: 120,
        },
        selectEmpty: {
            color: "#5A4628",
            fontSize: "14px",
            padding: '2px 7px'
        },
        typ: {
            color: "#5A4628",
            fontWeight: 'bold',
            marginRight: 12
        },
        label: {
            color: '#5A4628',
            width: 160
        },
        menuPaper: {
            maxHeight: 300
        },
        checkArray: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }));

interface DetailDialogRawProps {
    classes: Record<'paper', string>;
    id: string;
    keepMounted: boolean;
    fromStation: string;
    price: string;
    mirror: string;
    checkedItem: string[];
    open: boolean;
    fromStationOnClose: (value?: any) => void;
    priceOnClose: (value?: any) => void;
    mirrorOnClose: (value?: any) => void;
    checkedItemOnClose: (value?: any) => void;
}

const fromStationOptions = [
    '指定なし',　'3分以内', '5分以内',　'7分以内', '10分以内',
];

const minPriceOptions = [
    '下限なし',　'500円', '1000円',　'1500円', '2000円',　'2500円', '3000円',　'3500円', '4000円',
    '4500円', '5000円',　'6000円', '7000円',　'8000円', '9000円', '10000円'
];

const maxPriceOptions = [
    '上限なし',　'500円', '1000円',　'1500円', '2000円',　'2500円', '3000円',　'3500円', '4000円',
    '4500円', '5000円',　'6000円', '7000円',　'8000円', '9000円', '10000円'
];

const minMirrorOptions = [
    '下限なし',　'5m', '10m',　'15m', '20m',　'25m', '30m',　'35m', '40m', '45m', '50m',
];

const maxMirrorOptions = [
    '上限なし',　'5m', '10m',　'15m', '20m',　'25m', '30m',　'35m', '40m', '45m', '50m',
];

const reserve = [
    '30分単位', "30分から予約可", "Webから予約", "LINEで予約",
];

const studioFacilities = [
    '男性更衣室', '女性更衣室', "シャワールーム", "喫煙室",
    "待合スペース", "駐車場", "Wi-Fi"
];

const lightAndFilming = [
    '明るさ調節', "スタンドライト", "カラーライト", "ミラーボール",
    "スマホ用三脚", "スマホ固定台(壁付)", "スマホ用広角レンズ", "その他撮影機材"
];

const soundAndMovie = [
    'CD利用', "iPod利用", "BlueTooth利用", "ミキサー", "DJセット",
    "マイク", "ヘッドセットマイク", "マイクスタンド", "キーボード",
    "譜面台", "プロジェクター", "モニター", "Blu-rayデッキ"
]

const floorMaterial = [
    'フローリング', 'リノリウム', '塩ビタイル'
];

const amenities = [
    '机', "イス", "ホワイトボード", "パーテーション", "カーテン/更衣スペース",
    "バレエバー", "タップ板", "ヨガマット", "ヨガグッズ", "トレーニンググッズ",
    "ヒールカバー", "ハンガー", "充電器", "アルコール消毒"
];

export default function NewDetailDialogRaw(props: DetailDialogRawProps) {
    const classes = useStyles()
    const { fromStationOnClose, priceOnClose, mirrorOnClose, checkedItemOnClose,
        fromStation: fromStationProp, price: priceProp, mirror: mirrorProp, checkedItem: checkedItemProp,
        open, ...other } = props;
    const [fromStation, setFromStation] = React.useState('指定なし');
    const [minPrice, setMinPrice] = React.useState('下限なし');
    const [maxPrice, setMaxPrice] = React.useState('上限なし');
    const [minMirror, setMinMirror] = React.useState('下限なし');
    const [maxMirror, setMaxMirror] = React.useState('上限なし');
    const [checkedItem, setCheckedItem] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (!open) {
            if (fromStationProp === '') {
                setFromStation('指定なし');
            }
            if (priceProp === '') {
                setMinPrice('下限なし');
                setMaxPrice('上限なし');
            }
            if (mirrorProp === '') {
                setMinMirror('下限なし');
                setMaxMirror('上限なし');
            }
            setCheckedItem(checkedItemProp);
        }
    }, [fromStationProp, priceProp, mirrorProp, checkedItemProp, open]);

    const handleCancel = () => {
        fromStationOnClose();
        priceOnClose();
        mirrorOnClose();
        checkedItemOnClose();
    };

    const handleOk = () => {
        if (fromStation !== '指定なし') {
            fromStationOnClose('駅'+fromStation);
        }

        if (minPrice !== '下限なし' && maxPrice !== '上限なし') {
            priceOnClose(minPrice + '~' + maxPrice);
        }
        else if (minPrice !== '下限なし' && maxPrice === '上限なし') {
            priceOnClose(minPrice + '~')
        }
        else if (minPrice === '下限なし' && maxPrice !== '上限なし') {
            priceOnClose('~' + maxPrice)
        }

        if (minMirror !== '下限なし' && maxMirror !== '上限なし') {
            mirrorOnClose('鏡' + minMirror + '~' + maxMirror);
        }
        else if (minMirror !== '下限なし' && maxMirror === '上限なし') {
            mirrorOnClose('鏡' + minMirror + '~')
        }
        else if (minMirror === '下限なし' && maxMirror !== '上限なし') {
            mirrorOnClose('鏡' + '~' + maxMirror)
        }

        checkedItemOnClose(checkedItem);
    };

    const checked = (newItem?: string) : void => {
        if (newItem) {
            setCheckedItem(prevState => (
                [newItem, ...prevState]
            ))
        }
    };

    const unChecked = (newItem?: string) : void => {
        if (newItem) {
            setCheckedItem(prevState => (
                prevState.filter((element: string) => element != newItem)
            ))}
    };

    const fromStationHandleChange = (event: any) : void => {
        setFromStation((event.target as HTMLInputElement).value);
    };

    const minPriceHandleChange = (event: any) : void => {
        setMinPrice((event.target as HTMLInputElement).value);
    };

    const maxPriceHandleChange = (event: any) : void => {
        setMaxPrice((event.target as HTMLInputElement).value);
    };

    const minMirrorHandleChange = (event: any) : void => {
        setMinMirror((event.target as HTMLInputElement).value);
    };

    const maxMirrorHandleChange = (event: any) : void => {
        setMaxMirror((event.target as HTMLInputElement).value);
    };

    return (
        <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}}
                aria-labelledby="confirmation-dialog-title"
                open={open}
                {...other}
        >
            <DialogActions className={classes.dialogBtn}>
                <Button autoFocus onClick={handleCancel} className={classes.dialogClose}>
                    <Close fontSize='small'/>
                </Button>
                <Button onClick={handleOk} className={classes.dialogOk}>
                    決定
                </Button>
            </DialogActions>
            <DialogContent className={classes.content}>
                <Typography className={classes.typ} variant={'subtitle1'}>駅から徒歩</Typography>
                <FormControl className={classes.formControl}>
                    <Select
                        value={fromStation}
                        onChange={fromStationHandleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        MenuProps={{ classes: { paper: classes.menuPaper } }}
                    >
                        {fromStationOptions.map((option: any) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography className={classes.typ} variant={'subtitle1'}>料金</Typography>
                <NewSearchCheckbox item='キャンセル無料期間あり' open={open}
                                   checked={checkedItem.includes('キャンセル無料期間あり')}
                                   itemChecked={checked} itemUnChecked={unChecked}/>
                <div className={classes.select}>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.label}>30分あたりの料金</InputLabel>
                        <Select
                            value={minPrice}
                            onChange={minPriceHandleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {minPriceOptions.map((option: any, index) => (
                                <MenuItem value={option}
                                          disabled={maxPrice !== '上限なし' && index >= maxPriceOptions.indexOf(maxPrice)}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <p>~</p>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={maxPrice}
                            onChange={maxPriceHandleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {maxPriceOptions.map((option: any, index) => (
                                <MenuItem value={option}
                                          disabled={index !== 0 && index <= minPriceOptions.indexOf(minPrice)}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <Typography className={classes.typ} variant={'subtitle1'}>予約</Typography>
                <div className={classes.checkArray}>
                    {reserve.map((item) => (
                        <NewSearchCheckbox item={item}
                                       checked={checkedItem.includes(item)}
                                       itemChecked={checked} itemUnChecked={unChecked}/>
                    ))}
                </div>
                <Typography className={classes.typ} variant={'subtitle1'}>スタジオ設備</Typography>
                <div className={classes.checkArray}>
                    {studioFacilities.map((item) => (
                    <NewSearchCheckbox item={item}
                                       checked={checkedItem.includes(item)}
                                       itemChecked={checked} itemUnChecked={unChecked}/>
                ))}
                </div>
                <Typography className={classes.typ} variant={'subtitle1'}>部屋設備・備品</Typography>
                <Typography className={classes.typ} variant={'subtitle2'}>鏡</Typography>
                <NewSearchCheckbox item='2面'
                                   checked={(checkedItem.includes('2面'))}
                                   itemChecked={checked} itemUnChecked={unChecked}/>
                <div className={classes.select}>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink className={classes.label}>横幅</InputLabel>
                        <Select
                            //ref={radioGroupRef}
                            value={minMirror}
                            onChange={minMirrorHandleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {minMirrorOptions.map((option: any, index) => (
                                <MenuItem value={option}
                                          disabled={maxMirror !== '上限なし' && index >= maxMirrorOptions.indexOf(maxMirror)}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <p>~</p>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={maxMirror}
                            onChange={maxMirrorHandleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            MenuProps={{ classes: { paper: classes.menuPaper } }}
                        >
                            {maxMirrorOptions.map((option: any, index) => (
                                <MenuItem value={option}
                                          disabled={index !== 0 && index <= minMirrorOptions.indexOf(minMirror)}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <Typography className={classes.typ} variant={'subtitle2'}>照明・撮影</Typography>
                <div className={classes.checkArray}>
                    {lightAndFilming.map((item) => (
                    <NewSearchCheckbox item={item}
                                       checked={checkedItem.includes(item)}
                                       itemChecked={checked} itemUnChecked={unChecked}/>
                ))}
                </div>
                <Typography className={classes.typ} variant={'subtitle2'}>音響・映像</Typography>
                <div className={classes.checkArray}>
                    {soundAndMovie.map((item) => (
                    <NewSearchCheckbox item={item}
                                       checked={checkedItem.includes(item)}
                                       itemChecked={checked} itemUnChecked={unChecked}/>
                ))}
                </div>
                <Typography className={classes.typ} variant={'subtitle2'}>床材</Typography>
                <div className={classes.checkArray}>
                    {floorMaterial.map((item) => (
                    <NewSearchCheckbox item={item}
                                       checked={checkedItem.includes(item)}
                                       itemChecked={checked} itemUnChecked={unChecked}/>
                ))}
                </div>
                <Typography className={classes.typ} variant={'subtitle2'}>その他設備・備品</Typography>
                <div className={classes.checkArray}>
                    {amenities.map((item) => (
                    <NewSearchCheckbox item={item}
                                       checked={checkedItem.includes(item)}
                                       itemChecked={checked} itemUnChecked={unChecked}/>
                ))}
                </div>
            </DialogContent>

        </Dialog>
    );
}

