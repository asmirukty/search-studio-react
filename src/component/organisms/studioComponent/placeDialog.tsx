import React, {useEffect, useState} from 'react';
import AreaTabs from "./areaDialogComponent/areaTabs";
import LineAccordions from "./areaDialogComponent/lineAccordions";
import StudioAreaAccordions from "./areaDialogComponent/studioAreaAccordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NewSearchCheckbox from "./newSearchCheckbox";
import {areaItems} from "./newAreaDialogRaw";
import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import {Close} from "@material-ui/icons";
import {Dialog, DialogContent} from "@material-ui/core";
import MuiChip from "@material-ui/core/Chip";
import useCheckGroup from "../use-check-group";
import useDialogOpen from "../use-dialog-open";

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

const Chip = withStyles({
    root: {
        textTransform: 'none',
        color: '#5A4628',
        backgroundColor: '#e7e1d8',
        marginRight: 4,
    },
    deleteIcon: {
        color: '#9B8C7D'
    }
})(MuiChip);

interface PlaceDialogProps {
    pref: any[],
    city: any[],
    line: any[],
    station: any[],
    changePref: (value: any[]) => void;
    changeCity: (value: any[]) => void;
    changeLine: (value: any[]) => void;
    changeStation: (value: any[]) => void;
    deletePref: (value: any) => void;
    deleteCity: (value: any) => void;
    deleteLine: (value: any) => void;
    deleteStation: (value: any) => void;
}

export default function PlaceDialog(props: PlaceDialogProps) {
    const classes = useStyles()
    const [pref, city, checkedPref, checkedCity, unCheckedPref, unCheckedCity, deletePref, deleteCity] = useCheckGroup(props.pref, props.city, props.deletePref, props.deleteCity)
    const [line, station, checkedLine, checkedStation, unCheckedLine, unCheckedStation, deleteLine, deleteStation] = useCheckGroup(props.line, props.station, props.deletePref, props.deleteCity)
    const [open, dialogOpen, handleCancel, handleOk] = useDialogOpen(false, [props.changePref, props.changeCity, props.changeLine, props.changeStation], [pref, city, line, station]);

    return (
        <div>
            <div>
                <Button fullWidth variant="outlined" className={classes.btn} onClick={dialogOpen}>
                    {
                        pref.length === 0  && city.length === 0 ? 'エリア/沿線、駅を選択' :
                            areaItems.map((areaItem) =>
                                areaItem.items.map((item) =>
                                    pref.includes(item.pref) ?
                                        <Chip size='small' key={item.pref} label={item.pref} onDelete={deletePref(item.pref, item.cities)}/>
                                        :
                                        item.cities.map((c) =>
                                            city.includes(c) &&
                                            <Chip size='small' key={c} label={c} onDelete={deleteCity(c)}/>
                                        )
                                )
                            )
                    }
                </Button>
            </div>
            <Dialog PaperProps={{style: {margin: 12, flexGrow: 1}}} keepMounted open={open} aria-labelledby="confirmation-dialog-title">
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
                            areaItems.map((areaItem) =>
                                <StudioAreaAccordions area={areaItem.area} key={areaItem.area}>
                                    <div className={classes.width}>
                                        {
                                            areaItem.items.map((item) =>
                                                <Accordion key={item.pref}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls={`additional-actions-${item.pref}-content`}
                                                        id={`additional - actions-${item.pref}-header`}
                                                    >
                                                        <NewSearchCheckbox
                                                            item={item.pref}
                                                            key={item.pref}
                                                            pref
                                                            checked={pref.includes(item.pref)}
                                                            open={open}
                                                            itemChecked={checkedPref(item.cities)}
                                                            itemUnChecked={unCheckedPref(item.cities)}
                                                        />
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        {
                                                            item.cities.map((c) => (
                                                                <NewSearchCheckbox
                                                                    item={c}
                                                                    key={c}
                                                                    checked={city.includes(c)}
                                                                    open={open}
                                                                    itemChecked={checkedCity(item.pref, item.cities)}
                                                                    itemUnChecked={unCheckedCity(item.pref)}/>
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
                        line={<LineAccordions/>}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}