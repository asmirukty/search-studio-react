import React from 'react';
import {makeStyles, createStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import {Close} from "@material-ui/icons";
import AreaTabs from "./areaDialogComponent/areaTabs";
import LineAccordions from "./areaDialogComponent/lineAccordions";
import StudioAreaAccordions from "./areaDialogComponent/studioAreaAccordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StudioCheckbox from "../searchCheckbox";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import NewSearchCheckbox from "./newSearchCheckbox";

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

const itemsA = [
    {pref: '北海道', cities: ['札幌市']}
]

const itemsB = [
    {pref: '東京都', cities: ['渋谷区', '新宿区', '豊島区', '練馬区', '中央区']},
    {pref: '神奈川県', cities: ['横浜市',]},
    {pref: '千葉県', cities: ['千葉市',]},
    {pref: '埼玉県', cities: ['さいたま市', '所沢市', '川越市',]},
]

const itemsC = [
    {pref: '愛知県', cities: ['名古屋市']}
]

const itemsD = [
    {pref: '大阪府', cities: ['大阪市']}
]

const itemsE = [
    {pref: '広島県', cities: ['広島市']}
]

const itemsF = [
    {pref: '沖縄県', cities: ['那覇市']}
]

const areaItems = [
    {area: '北海道・東北', items: itemsA},
    {area: '関東', items: itemsB},
    {area: '中部', items: itemsC},
    {area: '関西', items: itemsD},
    {area: '中国・四国', items: itemsE},
    {area: '九州・沖縄', items: itemsF}
]

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
    const [chipArea, setChipArea] = React.useState<string[]>([]);

    React.useEffect(() => {
        if (!open) {
            setArea([...areaProp])
            setChipArea([...areaProp]);
        }
        else {
            return () => areaOnClose(chipArea)
        }
    }, [areaProp, open, chipArea]);

    const handleCancel = () => {
        areaOnClose(chipArea);
    };

    const handleOk = () => {
        setChipArea([])
        areaItems.map((areaItem) => {
            areaItem.items.map((item) => {
                if (area.includes(item.pref)) {
                    setChipArea(prevState =>
                    [...prevState, item.pref])
                }
                else {
                    item.cities.map((city) => {
                        if (area.includes(city)) {
                            setChipArea(prevState =>
                                [...prevState, city])
                        }
                    })
                }
            })
        })
    };

    const areaChecked = (newArea?: string) : void => {
        if (newArea && !area.includes(newArea)) {
            setArea(prevState => (
                [newArea, ...prevState]
            ))
        }
    };
    const areaUnChecked = (newArea?: string) : void => {
        if (newArea) {
            setArea((prevState => (
                prevState.filter((element: string) => {
                    return element != newArea
                })
            )))
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
                        areaItems.map((areaItem) =>
                            <StudioAreaAccordions area={areaItem.area}>
                                <div className={classes.width}>
                                    {
                                        areaItem.items.map((item) =>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls={`additional-actions-${item.pref}-content`}
                                                id={`additional - actions-${item.pref}-header`}
                                                >
                                                <NewSearchCheckbox
                                                    item={item.pref}
                                                    pref={item.pref}
                                                    checked={
                                                        area.includes(item.pref) ||
                                                        !(item.cities.map((city) => area.includes(city)).includes(false))
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
                                                            item={city}
                                                            pref={item.pref}
                                                            checked={area.includes(city) || area.includes(item.pref)}
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
                 line={<LineAccordions/>}/>
            </DialogContent>
        </Dialog>
    );
}
