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
    addSpace: (value?: any) => void;
    addPeople: (value?: any) => void;
}

export default function NewSpaceDialog(props: SpaceDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [area, setArea] = React.useState('');
    const [people, setPeople] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const areaHandleClose = (newArea?: string) => {
        setOpen(false);

        if (newArea) {
            setArea(newArea);
            props.addSpace(newArea)
        }
    };

    const peopleHandleClose = (newPeople?: string) => {
        setOpen(false);

        if (newPeople) {
            setPeople(newPeople);
            props.addPeople(newPeople)
        }
    };

    const handleAreaDelete = () => {
        setArea('');
        props.addSpace()
    };

    const handlePeopleDelete = () => {
        setPeople('');
        props.addPeople()
    };

    return (
        <div>
            {props.btn === 'btn' && (
                <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                    {area === '' && people === '' && (props.label) }
                    {area !== '' &&
                    (<Chip size="small" label={<span>{area}</span>} onDelete={handleAreaDelete}/>)}
                    {people !== '' &&
                    (<Chip size="small" label={<span>{people}</span>} onDelete={handlePeopleDelete}/>)}
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
                    areaOnClose={areaHandleClose}
                    peopleOnClose={peopleHandleClose}
                    area={area}
                    people={people}
                />
        </div>
    );
}