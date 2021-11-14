import React from 'react';
import {makeStyles, createStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import AreaTabs from "./areaDialogComponent/areaTabs";
import StudioAreaAccordions from "./areaDialogComponent/studioAreaAccordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import NewSearchCheckbox from "./newSearchCheckbox";
import {prefItems} from "./areaDialogComponent/prefItems";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: 4,
        },
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
            padding: 0,
            boxShadow: '0px 4px 8px -2px rgba(0, 0, 0, 0.1)inset'
        },
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center',
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
        menuPaper: {
            maxHeight: 300
        },
        width: {
            width: '100%',
        },
    }));

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles( {
    root: {
        paddingLeft: 8,
        minHeight: 16,
        color: '#5A4628',
        borderTop: '1px solid #D7D2C8',
        '&$expanded': {
            minHeight: 16,
        }
    },
    content: {
        margin: 0,
        '&$expanded': {
            margin: 0
        }
    },
    expandIcon: {
        color: '#5A4628',
        padding: '5px',
        margin: '0 -5px 0 0'
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles( {
    root: {
        padding: '0 24px',
        display: 'flex',
        flexWrap: 'wrap',
    },
})(MuiAccordionDetails);

interface AreaDialogRawProps {
    classes: Record<'paper', string>;
    id: string;
    keepMounted: boolean;
    area: string[];
    open: boolean;
    areaOnClose: (value?: any) => void;
}

export default function NewAreaDialogRaw(props: AreaDialogRawProps) {
    const classes = useStyles()
    const { areaOnClose, area: areaProp, open, ...other } = props;
    const [area, setArea] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (!open) {
            setArea([...areaProp])
        }
    }, [areaProp, open]);

    const handleCancel = () => {
        areaOnClose();
    };

    const handleOk = () => {
        areaOnClose(area)
    };

    const areaChecked = (newArea?: string) : void => {
        if (newArea) {
            setArea(prevState => (
                [newArea, ...prevState]
            ))
        }
    };
    const areaUnChecked = (newArea?: string) : void => {
        if (newArea) {
            setArea(prevState => (
                prevState.filter((element: string) => {
                    return element !== newArea
                })
            ))
        }
    };

    return (
        <Dialog PaperProps={{style: {flexGrow: 1}}}
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
                <AreaTabs
                    area={
                        prefItems.map((areaItem) =>
                            <StudioAreaAccordions area={areaItem.area} key={areaItem.area}>
                                <div className={classes.width}>
                                    {
                                        areaItem.items.map((item) =>
                                            <Accordion key={item.pref.id}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`additional-actions-${item.pref.id}-content`}
                                                id={`additional - actions-${item.pref.id}-header`}
                                                >
                                                <NewSearchCheckbox
                                                    item={item.pref.name}
                                                    itemName={item.pref.name}
                                                    key={item.pref.id}
                                                    pref
                                                    group={item.cities}
                                                    checked={
                                                        area.includes(item.pref.name) ||
                                                        !(item.cities.map((city) => area.includes(city.name)).includes(false))
                                                    }
                                                    open={open}
                                                    itemChecked={areaChecked}
                                                    itemUnChecked={areaUnChecked}
                                                />
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {
                                                        item.cities.map((city) => (
                                                        <NewSearchCheckbox
                                                            item={city.name}
                                                            itemName={city.name}
                                                            key={city.id}
                                                            group={[item.pref.name]}
                                                            checked={area.includes(city.name) || area.includes(item.pref.name)}
                                                            open={open}
                                                            itemChecked={areaChecked}
                                                            itemUnChecked={areaUnChecked}/>
                                                        ))
                                                    }
                                                </AccordionDetails>
                                            </Accordion>
                                        )
                                    }
                                </div>
                            </StudioAreaAccordions>
                        )
                    }
                 line={<div>a</div>}/>
            </DialogContent>
        </Dialog>
    );
}
