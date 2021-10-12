import React from "react";
import {
    Typography,
    Chip,
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead
} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import {AccessTime} from "@material-ui/icons";
import Carousel from 'react-material-ui-carousel';
import DateConvert from "../dateConvert";

const useStyles = makeStyles(() =>
    createStyles({
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
            zIndex: 1000,
        },
        cellTitle: {
            fontSize: 12,
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

const times = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' 10', '11'
]

interface RoomContentProps {
    roomImg: {
        name: string,
        description: string,
        path :string,
    }[],
    facilities: {
        name: string,
        count: number,
        price: number,
    }[];
    amenities: {
        name: string,
        count: number,
        price: number,
    }[];
    minReserveMinutes: number;
    slots: {
    workload: number,
    time_begin: number,
    time_end: number,
    price: number,
    count: number,
    }[];
}

export default function RoomContent(props: RoomContentProps) {
    const classes = useStyles();

    return (
        <div>
            <Carousel fullHeightHover={false} autoPlay={false}
                      navButtonsAlwaysVisible
                      navButtonsProps={{className: classes.navBtn}}
                      indicatorIconButtonProps={{className: classes.navIndicator}}
                      activeIndicatorIconButtonProps={{className: classes.navActiveIndicator}}>
                {
                    props.roomImg.map((img, index) => (
                        <div style={{margin: 'auto', paddingTop: 50, height: 100, textAlign: 'center'}}>
                            <img alt={'img' + index} src={img.path}/>
                        </div>
                    ))
                }
            </Carousel>
            {
                props.facilities.map((facility) => (
                    <Chip size="small" label={facility.name} className={classes.chip}/>
                ))
            }
            {
                props.amenities.map((amenity) => (
                    <Chip size="small" label={amenity.name} className={classes.chip}/>
                ))
            }
            <TableContainer component={Paper} style={{margin: 4}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headCell} align='left' size='small'> </TableCell>
                            {
                                times.map((time) =>
                                    <TableCell className={classes.headCell} colSpan={2} align='left' size='small'>{time}</TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.tableRow}>
                            <TableCell className={classes.cellTitle} size='small'>
                                {DateConvert(props.slots[0].time_begin * 1000)}
                            </TableCell>
                            {
                                props.slots.map((slot, index, array) => {
                                        if (!array[index-1] || slot.price !== array[index-1].price) {
                                            return <TableCell className={classes.cell} size='small'>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <Chip size="small" label={`${slot.price}円`}
                                                          className={classes.cellChip}/>
                                                </div>
                                            </TableCell>
                                        }
                                        else if (!array[index+1] || slot.price !== array[index+1].price) {
                                            return <TableCell className={classes.cell} size='small'>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <div style={{margin: 0, flexGrow: 1}}>
                                                        <hr color='#5A4628'/>
                                                    </div>
                                                    <div style={{padding: 0}}>▶︎</div>
                                                </div>
                                            </TableCell>
                                        }
                                        else {
                                            return <TableCell className={classes.cell} size='small'>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <div style={{zIndex: 1, margin: 0, flexGrow: 1}}>
                                                        <hr color='#5A4628'/>
                                                    </div>
                                                </div>
                                            </TableCell>
                                        }
                                    }
                                )}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div　className={classes.tableDesc}>
                <Typography variant='caption'>
                    <AccessTime fontSize='small'/>{props.minReserveMinutes + "分~"}
                </Typography>
            </div>
        </div>
    )
}