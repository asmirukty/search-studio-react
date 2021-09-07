import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import React from "react";
import NewSpaceDialogRaw from "./newSpaceDialogRaw";
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

interface SpaceDialogProps {
    children?: React.ReactNode;
    label: string;
    btn: string;
}

export default function NewSpaceDialog(props: SpaceDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [minArea, setMinArea] = React.useState('下限なし');
    const [maxArea, setMaxArea] = React.useState('上限なし');
    const [minPeople, setMinPeople] = React.useState('下限なし');
    const [maxPeople, setMaxPeople] = React.useState('上限なし');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const minAreaHandleClose = (newMinArea?: string) => {
        setOpen(false);

        if (newMinArea) {
            setMinArea(newMinArea);
        }
    };

    const maxAreaHandleClose = (newMaxArea?: string) => {
        setOpen(false);

        if (newMaxArea) {
            setMaxArea(newMaxArea);
        }
    };

    const minPeopleHandleClose = (newMinPeople?: string) => {
        setOpen(false);

        if (newMinPeople) {
            setMinPeople(newMinPeople);
        }
    };

    const maxPeopleHandleClose = (newMaxPeople?: string) => {
        setOpen(false);

        if (newMaxPeople) {
            setMaxPeople(newMaxPeople);
        }
    };
    const handleAreaDelete = () => {
        setMinArea('下限なし');
        setMaxArea('上限なし');
    }
    const handlePeopleDelete = () => {
        setMinPeople('下限なし');
        setMaxPeople('上限なし');
    }

    return (
        <div>
            {props.btn === 'btn' && (
                <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                    {minArea === '下限なし' && maxArea === '上限なし' && minPeople === '下限なし' && maxPeople === '上限なし' &&
                    (props.label) }
                    {minArea === '下限なし' && maxArea !== '上限なし' &&
                        (<Chip size="small" label={<span>~{maxArea}</span>} onDelete={handleAreaDelete}/>)}
                    {minArea !== '下限なし' && maxArea === '上限なし' &&
                    (<Chip size="small" label={<span>{minArea}~</span>} onDelete={handleAreaDelete}/>)}
                    {minArea !== '下限なし' && maxArea !== '上限なし' &&
                    (<Chip size="small" label={<span>{minArea}~{maxArea}</span>} onDelete={handleAreaDelete}/>)}
                    {minPeople === '下限なし' && maxPeople !== '上限なし' &&
                    (<Chip size="small" label={<span>~{maxPeople}</span>} onDelete={handlePeopleDelete}/>)}
                    {minPeople !== '下限なし' && maxPeople === '上限なし' &&
                    (<Chip size="small" label={<span>{minPeople}~</span>} onDelete={handlePeopleDelete}/>)}
                    {minPeople !== '下限なし' && maxPeople !== '上限なし' &&
                    (<Chip size="small" label={<span>{minPeople}~{maxPeople}</span>} onDelete={handlePeopleDelete}/>)}
                </Button>
            )}
            {props.btn === 'detailBtn' && (
                <div className={classes.right}>
                    <Button className={classes.detailBtn} onClick={handleClickOpen}>
                        {props.label}
                    </Button>
                </div>
            )}
                <NewSpaceDialogRaw
                    classes={{
                        paper: classes.paper,
                    }}
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    minAreaOnClose={minAreaHandleClose}
                    maxAreaOnClose={maxAreaHandleClose}
                    minPeopleOnClose={minPeopleHandleClose}
                    maxPeopleOnClose={maxPeopleHandleClose}
                    minArea={minArea}
                    maxArea={maxArea}
                    minPeople={minPeople}
                    maxPeople={maxPeople}
                />
        </div>
    );
}