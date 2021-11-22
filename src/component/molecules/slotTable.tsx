import React from "react";
import {
    Chip,
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    Typography
} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import DateConvert from "../organisms/dateConvert";
import {AccessTime} from "@material-ui/icons";

const useStyles = makeStyles(() =>
    createStyles({
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
        }
    }))

const times = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' 10', '11'
]

interface SlotTableProps {
   slots: {
        workload: number,
        time_begin: number,
        time_end: number,
        price: number,
        count: number,
    }[];
    minReserveMinutes: number;
}

export default function SlotTable(props: SlotTableProps) {
    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper} style={{margin: 4}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.headCell} align='left' size='small'> </TableCell>
                            {
                                times.map((time) =>
                                    <TableCell className={classes.headCell} key={time} colSpan={2} align='left' size='small'>{time}</TableCell>
                                )
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.tableRow}>
                            <TableCell className={classes.cellTitle} size='small'>
                                {DateConvert(props.slots[0].time_begin * 1000)}
                            </TableCell>
                            {
                                props.slots.map((slot, index, array) =>
                                    <TableCell className={classes.cell} key={index} size='small'>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                    {
                                        (!array[index-1] || slot.price !== array[index-1].price) ?
                                            <Chip size="small" key={index} label={`${slot.price}円`} className={classes.cellChip}/>
                                            :
                                             ((!array[index+1] || slot.price !== array[index+1].price) ?
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <hr color='#5A4628'/>
                                                    <div style={{padding: 0}}>▶︎</div>
                                                 </div>
                                                :
                                                <div style={{zIndex: 1, margin: 0, flexGrow: 1}}>
                                                    <hr color='#5A4628'/>
                                                </div>)
                                    }
                                        </div>
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div　className={classes.tableDesc}>
                <AccessTime fontSize='small'/>
                <Typography variant='caption' style={{padding: '0px 2px'}}>
                    {props.minReserveMinutes + "分~"}
                </Typography>
            </div>
    </div>
    )
}