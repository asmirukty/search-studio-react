import {Chip, TableContainer, Table, TableBody, TableRow, TableCell, TableHead} from "@material-ui/core";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import DateConvert from "../dateConvert";
import SearchChip from "../atoms/searchChip";

const useStyles = makeStyles(() =>
    createStyles({
        timeCell: {
            color: '#5A4628',
            fontSize: 8,
            padding: 0
        },
        tableRow: {
            height: 28,
            border: '1px solid #D7D2C8'
        },
        dateCell: {
            fontSize: 12,
            textAlign: 'center',
            minWidth: 60,
            width: 60,
            maxWidth: 60,
            color: '#5A4628',
            padding: 4,
            borderRight: '1px solid #D7D2C8'
        },
        cell: {
            minWidth: 20,
            width: 20,
            zIndex: 100,
            color: '#5A4628',
            padding: 0,
            borderRight: '1px solid #D7D2C8',
            '&:last-child': {
                paddingRight: 0
            }
        },
        chipCell: {
            position: 'relative',
            width: 20,
            zIndex: 10
        },
        normalCell: {
            display: 'flex',
            alignItems: 'center',
            width: '100%'
        },
        hr: {
            width: '100%',
            zIndex: 1
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
}

export default function SlotTable(props: SlotTableProps) {
    const classes = useStyles();

    return (
        <TableContainer style={{margin: 4, overflow: 'scroll'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell size='small'> </TableCell>
                        {
                            times.map((time) =>
                                <TableCell className={classes.timeCell} key={time} colSpan={2} align='left' size='small'>
                                    {time}
                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className={classes.tableRow}>
                        <TableCell className={classes.dateCell} size='small'>
                            {DateConvert(props.slots[0].time_begin * 1000)}
                        </TableCell>
                        {
                            props.slots.map((slot, index, array) =>
                                <TableCell className={classes.cell} key={index} size='small'>
                                {
                                    (!array[index-1] || slot.price !== array[index-1].price) ?
                                        <div className={classes.chipCell}>
                                            <SearchChip key={index} label={slot.price} after={'円'}/>
                                        </div>
                                        :
                                        <div className={classes.normalCell}>
                                            <hr color='#5A4628' className={classes.hr}/>
                                            {
                                                (!array[index+1] || slot.price !== array[index+1].price) &&
                                                <div style={{marginLeft: -4}}>▶︎</div>
                                            }
                                        </div>
                                }
                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}