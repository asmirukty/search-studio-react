import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import React from "react";
import NewDetailDialogRaw from "./newDetailDialogRaw";
import Button from "@material-ui/core/Button";
import MuiChip from "@material-ui/core/Chip";

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

const useStyles = makeStyles(() =>
    createStyles({
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
            display: 'flex',
            flex: 'wrap'
        },
        paper: {
            margin: 12,
            flexGrow: 1
        },
        span: {
            display: 'inline'
        }
    }),
);

interface DetailDialogProps {
    children?: React.ReactNode;
    label: string;
    btn: string;
}

export default function NewDetailDialog(props: DetailDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fromStation, setFromStation] = React.useState('指定なし');
    const [minPrice, setMinPrice] = React.useState('下限なし');
    const [maxPrice, setMaxPrice] = React.useState('上限なし');
    const [minMirror, setMinMirror] = React.useState('下限なし');
    const [maxMirror, setMaxMirror] = React.useState('上限なし');
    const [checkedItem, setCheckedItem] = React.useState<string[]>([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const fromStationHandleClose = (newFromStation?: string) => {
        setOpen(false);

        if (newFromStation) {
            setFromStation(newFromStation);
        }
    };

    const minPriceHandleClose = (newMinPrice?: string) => {
        setOpen(false);

        if (newMinPrice) {
            setMinPrice(newMinPrice);
        }
    };

    const maxPriceHandleClose = (newMaxPrice?: string) => {
        setOpen(false);

        if (newMaxPrice) {
            setMaxPrice(newMaxPrice);
        }
    };

    const minMirrorHandleClose = (newMinMirror?: string) => {
        setOpen(false);

        if (newMinMirror) {
            setMinMirror(newMinMirror);
        }
    };

    const maxMirrorHandleClose = (newMaxMirror?: string) => {
        setOpen(false);

        if (newMaxMirror) {
            setMaxMirror(newMaxMirror);
        }
    };

    const checkedItemHandleClose = (newItem?: string[]) => {
        setOpen(false);

        if (newItem) {
            setCheckedItem(newItem);
        }
    };

    const handleFromStationDelete = () => {
        setFromStation('指定なし');
    };

    const handlePriceDelete = () => {
        setMinPrice('下限なし');
        setMaxPrice('上限なし');
    };

    const handleMirrorDelete = () => {
        setMinMirror('下限なし');
        setMaxMirror('上限なし');
    }

    const handleItemDelete = (item: string) => () => {
        setCheckedItem(prevState => (
            prevState.filter((element: string) => element != item)
        ))
    }

    return (
        <div>
            {props.btn === 'btn' && (
                <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                </Button>
            )}
            {props.btn === 'detailBtn' && (
                <div>
                    <div>
                        {fromStation !== '指定なし' &&
                        (<Chip size="small" label={<span>{fromStation}</span>} onDelete={handleFromStationDelete}/>)}
                        {minPrice === '下限なし' && maxPrice !== '上限なし' &&
                        (<Chip size="small" label={<span>~{maxPrice}</span>} onDelete={handlePriceDelete}/>)}
                        {minPrice !== '下限なし' && maxPrice === '上限なし' &&
                        (<Chip size="small" label={<span>{minPrice}~</span>} onDelete={handlePriceDelete}/>)}
                        {minPrice !== '下限なし' && maxPrice !== '上限なし' &&
                        (<Chip size="small" label={<span>{minPrice}~{maxPrice}</span>} onDelete={handlePriceDelete}/>)}
                        {minMirror === '下限なし' && maxMirror !== '上限なし' &&
                        (<Chip size="small" label={<span>~{maxMirror}</span>} onDelete={handleMirrorDelete}/>)}
                        {minMirror !== '下限なし' && maxMirror === '上限なし' &&
                        (<Chip size="small" label={<span>{minMirror}~</span>} onDelete={handleMirrorDelete}/>)}
                        {minMirror !== '下限なし' && maxMirror !== '上限なし' &&
                        (<Chip size="small" label={<span>{minMirror}~{maxMirror}</span>} onDelete={handleMirrorDelete}/>)}
                        {checkedItem.length !== 0 &&
                        (checkedItem.map((item) =>
                                (<Chip size="small" label={item} onDelete={handleItemDelete(item)}/>))
                        )}
                    </div>
                    <div className={classes.right}>
                        <Button className={classes.detailBtn} onClick={handleClickOpen}>
                            {props.label}
                        </Button>
                    </div>
                </div>
            )}
            <NewDetailDialogRaw
                classes={{
                    paper: classes.paper,
                }}
                id="ringtone-menu"
                keepMounted
                open={open}
                fromStationOnClose={fromStationHandleClose}
                minPriceOnClose={minPriceHandleClose}
                maxPriceOnClose={maxPriceHandleClose}
                minMirrorOnClose={minMirrorHandleClose}
                maxMirrorOnClose={maxMirrorHandleClose}
                checkedItemOnClose={checkedItemHandleClose}
                fromStation={fromStation}
                minPrice={minPrice}
                maxPrice={maxPrice}
                minMirror={minMirror}
                maxMirror={maxMirror}
                checkedItem={checkedItem}
            />
        </div>
    );
}