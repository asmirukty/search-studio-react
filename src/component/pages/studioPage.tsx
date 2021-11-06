import MenuTabs from '../organisms/menuTabs';
import TitleBar from '../organisms/titleBar';
import React from "react";
import Carousel from "react-material-ui-carousel";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../organisms/tabPanel";
import {
    Chip,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import DateConvert from "../organisms/dateConvert";
import {times} from "../organisms/studioResultComponent/roomContent";
import Button from "@material-ui/core/Button";
import {AccessTime, CropFree, People} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            minHeight: '100vh',
            color: '#5A4628',
        },
        appbar: {
            top: 200,
        },
        tabs: {
            backgroundColor: '#FFF',
            color: '#5A4628',
        },
        chip: {
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            marginRight: 4
        },
        navBtn: {
            backgroundColor: '#5A4628',
            opacity: 0.8,
            padding: 2,
            margin: 0,
        },
        navIndicator: {
            color: '#5A4628',
            opacity: 0.5,
            '&:hover': {
                color: '#5A4628',
                opacity: 1
            },
            '&:active': {
                color: '#5A4628',
                opacity: 1
            }
        },
        navActiveIndicator: {
            color: '#5A4628',
            opacity: 1
        },
        img: {
            display: 'flex',
            flexGrow: 1,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center'
        },
        headCell: {
            color: '#5A4628',
            fontSize: 8,
            padding: 0
        },
        tableRow: {
            border: '1px solid #D7D2C8'
        },
        cell: {
            position: 'relative',
            minWidth: 20,
            maxWidth: 20,
            color: '#5A4628',
            padding: '4px 0',
            borderRight: '1px solid #D7D2C8'
        },
        cellChip: {
            position: 'absolute',
            left: 2,
            color: '#5A4628',
            backgroundColor: '#e7e1d8',
            zIndex: 10,
        },
        cellTitle: {
            fontSize: 12,
            minWidth: 60,
            color: '#5A4628',
            padding: 4,
            borderRight: '1px solid #D7D2C8'
        },
        tableDesc: {
            padding: '4px 0 8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        reserveBtn: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#F9F5F0',
            backgroundColor: '#1D356A',
            display: 'flex',
            margin: 'auto',
            padding: '6px 12px'
        }
    }))

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const studio = {
    "studio_id": "99999999",
    "studio_name": "Mission",
    "address": {
    "address": "東京都渋谷区x-x-xxx",
        "prefecture": {
        "id": "A01",
            "name": "東京"
    },
    "city": {
        "id": "S001",
            "name": "渋谷区"
    },
    "line": {
        "id": "A001",
            "name": "山手線"
    },
    "station": {
        "id": "S0001",
            "name": "渋谷駅"
    },
    "exit": {
        "id": "E001",
            "name": "東口"
    },
    "minutes_from_station": 5
},
    "studio_img": [
        {
            "name": "間取り",
            "description": "あれば",
            "path": "https://xxx.s3.amazonaws.com/xxx"
        }
    ],
    "studio_introduction": "ダンスレッスンやヴォーカルトレーニング等を行う個人〜少人数向けの小型スタジオから、舞台・演劇・ミュージカルの稽古場やダンス練習・ヨガ・ワークショップ・撮影等に最適な大型スタジオまで『STUDIO MISSION』は様々な目的にあった、豊富なバリエーションのスタジオタイプの中から用途に合わせお選び頂けます。",
    "studio_precaution": "注意事項",
    "homepage_url": "ホームページのURL",
    "contact": "電話番号",
    "studio_facilities": [
    {
        "name": "男性更衣室",
        "count": 1,
        "price": 0
    },
    {
    "name": "女性更衣室",
        "count": 1,
        "price": 0
    }
    ],
    "room_count": 4,
    "rooms": [
    {
        "room_name": "A01",
        "floor_area": 22.4,
        "mirror_length": 12,
        "min_people": 2,
        "max_people": 0,
        "room_img": [
            {
                "name": "間取り",
                "description": "あれば",
                "path": "https://xxx.s3.amazonaws.com/xxx"
            }
        ],
        "free_cancel": true,
        "reservation": [
            "this-reserve"
        ],
        "room_facilities": [
            {
                "name": "鏡2面",
                "count": 1,
                "price": 0
            }
        ],
        "amenities": [
            {
                "name": "スタンドライト",
                "count": 1,
                "price": 0
            }
        ],
        "floor_material": "フローリング",
        "slots": [
            {
                "workload": 0.05,
                "time_begin": 1635692400,
                "time_end": 1635694200,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.05,
                "time_begin": 1635694200,
                "time_end": 1635696000,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.05,
                "time_begin": 1635696000,
                "time_end": 1635697800,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.05,
                "time_begin": 1635697800,
                "time_end": 1635699600,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635699600,
                "time_end": 1635701400,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635701400,
                "time_end": 1635703200,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635703200,
                "time_end": 1635705000,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635705000,
                "time_end": 1635706800,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635706800,
                "time_end": 1635708600,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635708600,
                "time_end": 1635710400,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635710400,
                "time_end": 1635712200,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635712200,
                "time_end": 1635714000,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635714000,
                "time_end": 1635715800,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635715800,
                "time_end": 1635717600,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635717600,
                "time_end": 1635719400,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635719400,
                "time_end": 1635721200,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635721200,
                "time_end": 1635723000,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635723000,
                "time_end": 1635724800,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635724800,
                "time_end": 1635726600,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635726600,
                "time_end": 1635728400,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635728400,
                "time_end": 1635730200,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635730200,
                "time_end": 1635732000,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635732000,
                "time_end": 1635733800,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635733800,
                "time_end": 1635735600,
                "price": 600,
                "count": 2
            }
        ],
        "min_reserve_minutes": 60,
        "reserve_url": "string"
    },
    {
        "room_name": "A02",
        "floor_area": 22.4,
        "mirror_length": 12,
        "min_people": 2,
        "max_people": 0,
        "room_img": [
            {
                "name": "間取り",
                "description": "あれば",
                "path": "https://xxx.s3.amazonaws.com/xxx"
            }
        ],
        "free_cancel": true,
        "reservation": [
            "this-reserve"
        ],
        "room_facilities": [
            {
                "name": "two-sides-mirror",
                "count": 1,
                "price": 0
            }
        ],
        "amenities": [
            {
                "name": "stand-light",
                "count": 1,
                "price": 0
            }
        ],
        "floor_material": "flooring",
        "slots": [
            {
                "workload": 0.05,
                "time_begin": 1635692400,
                "time_end": 1635694200,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.05,
                "time_begin": 1635694200,
                "time_end": 1635696000,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.05,
                "time_begin": 1635696000,
                "time_end": 1635697800,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.05,
                "time_begin": 1635697800,
                "time_end": 1635699600,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635699600,
                "time_end": 1635701400,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635701400,
                "time_end": 1635703200,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635703200,
                "time_end": 1635705000,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635705000,
                "time_end": 1635706800,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635706800,
                "time_end": 1635708600,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635708600,
                "time_end": 1635710400,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635710400,
                "time_end": 1635712200,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.1,
                "time_begin": 1635712200,
                "time_end": 1635714000,
                "price": 300,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635714000,
                "time_end": 1635715800,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635715800,
                "time_end": 1635717600,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635717600,
                "time_end": 1635719400,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635719400,
                "time_end": 1635721200,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635721200,
                "time_end": 1635723000,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635723000,
                "time_end": 1635724800,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635724800,
                "time_end": 1635726600,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635726600,
                "time_end": 1635728400,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635728400,
                "time_end": 1635730200,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635730200,
                "time_end": 1635732000,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635732000,
                "time_end": 1635733800,
                "price": 600,
                "count": 2
            },
            {
                "workload": 0.5,
                "time_begin": 1635733800,
                "time_end": 1635735600,
                "price": 600,
                "count": 2
            }
        ],
        "min_reserve_minutes": 60,
        "reserve_url": "string"
    }]
}

export default function StudioPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div style={{ backgroundColor: '#F9F5F0', color: '#5A4628'}}>
            <TitleBar/>
            <MenuTabs children={
                <div>
                    <h3 style={{position: 'sticky', top: 120, zIndex: 1000, margin: 16}}>{studio.studio_name}</h3>
                    <div style={{margin: 16, position: 'sticky', top: 100}}>
                        <Carousel fullHeightHover={false} autoPlay={false}
                                  navButtonsAlwaysVisible
                                  navButtonsProps={{className: classes.navBtn}}
                                  indicatorIconButtonProps={{className: classes.navIndicator}}
                                  activeIndicatorIconButtonProps={{className: classes.navActiveIndicator}}>
                            {
                                studio.studio_img.map((img, index) => (
                                    <div className={classes.img} key={index}>
                                        <img alt={'img' + index} src={img.path}/>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                    <div className={classes.root}>
                        <AppBar position="sticky" className={classes.appbar}>
                            <Tabs className={classes.tabs}
                                  TabIndicatorProps={{style: {backgroundColor: '#1D356A'}}}
                                  value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="空き部屋" {...a11yProps(0)} style={{flexGrow: .5}}/>
                                <Tab label="スタジオ情報" {...a11yProps(1)} style={{flexGrow: .5}}/>
                            </Tabs>
                        </AppBar>
                        <Paper style={{minHeight: 580, maxHeight: 580, position: 'sticky', top: 240, overflow: 'scroll',}}>
                            <div>
                                <TabPanel value={value} index={0}>
                                        {
                                            studio.rooms.map((room) =>
                                                <div style={{padding: '24px', color: '#5A4628'}}>
                                                    <div style={{display: 'flex', alignItems: 'center', marginBottom: 4}}>
                                                        <Typography variant={'body1'} style={{fontWeight: 'bold'}}>{room.room_name}</Typography>
                                                        <Typography variant='body2' style={{margin: '0px 8px'}}>⊿ {room.floor_area}m²</Typography>
                                                        {
                                                            (room.min_people > 0 || room.max_people > 0) &&
                                                                <Typography variant='body2' style={{margin: '0px 8px', display: 'flex', alignItems: 'center'}}>
                                                                    <People fontSize={'small'}/>
                                                                    {room.min_people > 0 && room.min_people + '人'}~{room.max_people > 0 && room.max_people + '人'}
                                                                </Typography>
                                                        }
                                                        <div style={{border: '1px solid #D7D2C8', fontSize: 12, padding: 2, margin: '0 8px'}}>{room.floor_material}</div>
                                                    </div>
                                                    {
                                                        room.room_facilities.map((facility, index) => (
                                                            <Chip size="small" key={index} label={facility.name} className={classes.chip}/>
                                                        ))
                                                    }
                                                    {
                                                        room.amenities.map((amenity, index) => (
                                                            <Chip size="small" key={index} label={amenity.name} className={classes.chip}/>
                                                        ))
                                                    }
                                                    <Carousel fullHeightHover={false} autoPlay={false}
                                                            navButtonsAlwaysVisible
                                                            navButtonsProps={{className: classes.navBtn}}
                                                            indicatorIconButtonProps={{className: classes.navIndicator}}
                                                            activeIndicatorIconButtonProps={{className: classes.navActiveIndicator}}>
                                                        {
                                                            room.room_img.map((img, index) => (
                                                            <div className={classes.img} key={index}>
                                                            <img alt={'img' + index} src={img.path}/>
                                                            </div>
                                                            ))
                                                        }
                                                    </Carousel>
                                                    <TableContainer component={Paper} style={{margin: 4}}>
                                                        <Table>
                                                            <TableHead>
                                                                <TableRow>
                                                                    <TableCell className={classes.headCell} align='left' size='small'> </TableCell>
                                                                    {
                                                                        times.map((time) =>
                                                                            <TableCell className={classes.headCell} key={time} colSpan={2} align='left' size='small'>{time}</TableCell>
                                                                        )}
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow className={classes.tableRow}>
                                                                    <TableCell className={classes.cellTitle} size='small'>
                                                                        {DateConvert(room.slots[0].time_begin * 1000)}
                                                                    </TableCell>
                                                                    {
                                                                        room.slots.map((slot, index, array) => {
                                                                                if (!array[index-1] || slot.price !== array[index-1].price) {
                                                                                    return (
                                                                                        <TableCell className={classes.cell} key={index} size='small'>
                                                                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                                                                <Chip size="small" key={index} label={`${slot.price}円`}
                                                                                                      className={classes.cellChip}/>
                                                                                            </div>
                                                                                        </TableCell>
                                                                                    )
                                                                                }
                                                                                else if (!array[index+1] || slot.price !== array[index+1].price) {
                                                                                    return (
                                                                                        <TableCell className={classes.cell} key={index} size='small'>
                                                                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                                                                <div style={{margin: 0, flexGrow: 1}}>
                                                                                                    <hr color='#5A4628'/>
                                                                                                </div>
                                                                                                <div style={{padding: 0}}>▶︎</div>
                                                                                            </div>
                                                                                        </TableCell>
                                                                                    )
                                                                                }
                                                                                else {
                                                                                    return (
                                                                                        <TableCell className={classes.cell} key={index} size='small'>
                                                                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                                                                <div style={{zIndex: 1, margin: 0, flexGrow: 1}}>
                                                                                                    <hr color='#5A4628'/>
                                                                                                </div>
                                                                                            </div>
                                                                                        </TableCell>
                                                                                    )
                                                                                }
                                                                            }
                                                                        )}
                                                                </TableRow>
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                    <div　className={classes.tableDesc}>
                                                        <AccessTime fontSize='small'/>
                                                        <Typography variant='caption' style={{padding: '0px 2px'}}>
                                                            {room.min_reserve_minutes + "分~"}
                                                        </Typography>
                                                    </div>
                                                    <div style={{display: 'flex'}}>
                                                        <Button className={classes.reserveBtn}>
                                                            予約画面へ
                                                        </Button>
                                                    </div>
                                                </div>
                                            )
                                        }
                                </TabPanel>
                            </div>
                                <TabPanel value={value} index={1}>
                                    <div style={{padding: '24px', color: '#5A4628'}}>
                                        <Typography variant={'body2'}>{studio.studio_introduction}</Typography>
                                        <Typography variant={'body2'} style={{paddingTop: '20px', fontWeight: 'bold'}}>スタジオ設備</Typography>
                                        {
                                            studio.studio_facilities.map((facility, index) => (
                                                <span style={{padding: 8, fontSize: 14}}>{facility.name}</span>
                                            ))
                                        }
                                        <Typography variant={'body2'} style={{paddingTop: '16px', fontWeight: 'bold'}}>アクセス</Typography>
                                        <Typography variant={'body2'} style={{paddingLeft: '12px'}}>{studio.address.address}</Typography>
                                        <Typography variant={'body2'} style={{paddingLeft: '12px'}}>
                                            {studio.address.station.name}{studio.address.exit.name}{studio.address.minutes_from_station}分
                                        </Typography>
                                        <Typography variant={'body2'} style={{paddingTop: '16px', fontWeight: 'bold'}}>注意事項</Typography>
                                        <Typography variant={'body2'} style={{paddingLeft: '12px'}}>{studio.studio_precaution}</Typography>
                                        <Typography variant={'body2'} style={{paddingTop: '16px', fontWeight: 'bold'}}>ホームページ</Typography>
                                        <link href={studio.homepage_url}/>
                                    </div>
                                </TabPanel>
                        </Paper>
                    </div>
                </div>}
            />
        </div>
    );
}