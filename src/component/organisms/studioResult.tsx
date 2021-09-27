import React from "react";
import {Card, CardContent, Typography, Chip, Button, TableContainer, Paper, Table, TableBody, TableRow, TableCell} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {PeopleAlt, Place, AccessTime} from "@material-ui/icons";
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(() =>
createStyles({
    card: {
        color: "#5A4628",
        padding: 0
    },
    header: {
        padding: '12px 16px',
        boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.1)'
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #D7D2C8',
        marginBottom: 4
    },
    chip: {
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4
    },
    btn: {
        color: '#5A4628',
        fontSize: 12,
        padding: '0px 8px',
        margin: 0,
        border: '1px solid #D7D2C8',
        boxShadow: '0.5px 0.5px 4px 2px rgba(0, 0, 0, 0.1)'
    },
    content: {
        padding: '12px 16px'
    },
    roomTop: {
        display: 'flex',
        justifyContent: 'space-between',
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
    tableRow: {
        color: '#5A4628',
        border: '1px solid #D7D2C8'
    },
    cell: {
        color: '#5A4628',
        padding: 4,
        borderRight: '1px solid #D7D2C8'
    },
    cellTitle: {
        minWidth: 60,
        color: '#5A4628',
        padding: 4,
        borderRight: '1px solid #D7D2C8'
    },
    tableDesc: {
        textAlign: 'right'
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

const items = [
    {time: 0, price: 500},
    {time: 5, price: 500},
    {time: 10, price: 500},
    {time: 15, price: 500},
    {time: 20, price: 400},
    {time: 25, price: 400},
    {time: 30, price: 400},
    {time: 35, price: 400},

]

type SearchResult =  {
    totalPages: number,
    studios: Studio[]
};

export default function StudioResult() {
    const classes = useStyles();
    const f = async () => {
        await fetch('http://localhost:3000/sample.json', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('networkError')
                }
                return response.json()
            })
            .then(response => {
                console.log(response)
            })
    }

    f()

    return (
        <div style={{padding: 24}}>
            <h3 style={{textAlign: 'center'}}>検索結果</h3>
            <Card>
                <CardContent className={classes.card}>
                    <div className={classes.header}>
                        <div className={classes.top}>
                            <Typography variant='subtitle1'>スタジオ</Typography>
                            <Typography variant='caption'>
                                <Place fontSize='small'/>
                                駅出口徒歩</Typography>
                        </div>
                        <Chip size="small" label='Wi-Fi' className={classes.chip}/>
                        <Chip size="small" label='シャワールーム' className={classes.chip}/>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.roomTop}>
                            <div style={{display: 'flex'}}>
                                <Typography variant='subtitle2'>部屋</Typography>
                                <Typography variant='caption' style={{margin: '0px 8px'}}>⊿ 20m²</Typography>
                                <PeopleAlt fontSize='small'/>
                                <Typography variant='caption'> ~人</Typography>
                            </div>
                            <Button className={classes.btn}>詳しく見る</Button>
                        </div>
                        <Carousel fullHeightHover={false} autoPlay={false}
                                  navButtonsAlwaysVisible
                                  navButtonsProps={{className: classes.navBtn}}
                                  indicatorIconButtonProps={{className: classes.navIndicator}}
                                  activeIndicatorIconButtonProps={{className: classes.navActiveIndicator}}>
                            <div style={{margin: 'auto', paddingTop: 50, height: 100, textAlign: 'center'}}>
                                <img alt='img1'/>
                            </div>
                            <div style={{margin: 'auto', paddingTop: 50, height: 100, textAlign: 'center'}}>
                                <img alt='img2'/>
                            </div>
                        </Carousel>
                        <Chip size="small" label='マイク' className={classes.chip}/>
                        <Chip size="small" label='イス' className={classes.chip}/>
                        <TableContainer component={Paper} style={{padding: 4}}>
                            <Table>
                                <TableBody>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell className={classes.cellTitle} size='small'>日にち</TableCell>
                                        {items.map ((item) =>
                                            <TableCell className={classes.cell} size='small'>{item.price}</TableCell>
                                        )}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div　className={classes.tableDesc}>
                            <Typography variant='caption'>
                                <AccessTime fontSize='small'/> 分~
                            </Typography>
                        </div>
                        <Button className={classes.reserveBtn}>予約画面へ</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}