import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import React from "react";
import Button from "@material-ui/core/Button";
import MuiChip from "@material-ui/core/Chip";
import NewAreaDialogRaw from "./newAreaDialogRaw";

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
        btnChip: {
            borderColor: '#D7D2C8',
            color: '#9B8C7D',
            fontSize: '14px',
            justifyContent: 'start',
            padding: '0 5px'
        },
        wrapChip: {
            overflow: 'scroll',
            display: 'flex',
            padding: 5
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

interface AreaDialogProps {
    children?: React.ReactNode;
    label: string;
    addItems: (value?: any) => void;
    deleteItems: (value?: any) => void;
}

export default function NewAreaDialog(props: AreaDialogProps) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [area, setArea] = React.useState<string[]>([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const areaHandleClose = (newArea?: string[]) => {
        setOpen(false);
        if (newArea) {
            setArea(newArea)
            props.addItems(newArea)
        }
    };

    const handleAreaDelete = (item: string) => () => {
        setArea(prevState => (
            prevState.filter((element: string) => element != item)
        ))
        props.deleteItems(item)
    }

    return (
        <div>
            {
                area.length === 0 ?
                <Button fullWidth variant="outlined" className={classes.btn} onClick={handleClickOpen}>
                    {props.label}
                </Button> :
                <Button fullWidth variant="outlined" className={classes.btnChip} onClick={handleClickOpen}>
                    <div className={classes.wrapChip}>
                        {area.map((item) => (
                            <Chip size="small" label={item} onDelete={handleAreaDelete(item)}/>
                        ))}
                    </div>
                </Button>
            }
            <NewAreaDialogRaw
                classes={{
                    paper: classes.paper,
                }}
                id="ringtone-menu"
                keepMounted
                open={open}
                areaOnClose={areaHandleClose}
                area={area}
            />
        </div>
    );
}