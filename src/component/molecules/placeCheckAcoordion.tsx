import {ChangeEvent, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchCheckbox from "../atoms/searchCheckbox";

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

interface PlaceCheckAccordionProps {
    items: {id: string, name: string}[];
    parentItem: {id: string, name: string};
    childItems: {id: string, name: string}[];
    checkedParent: (children: any[]) => (item: any) => void,
    checkedChild: (parent: any, children: any[]) => (item: any) => void,
    unCheckedParent: (children: any[]) => (item: any) => void,
    unCheckedChild: (parent: any) => (item: any) => void,
}

export default function PlaceCheckAccordion(props: PlaceCheckAccordionProps) {
    const [expanded, setExpanded] = useState<string | false>();
    const {items, parentItem, childItems, checkedParent, checkedChild, unCheckedParent, unCheckedChild} = props;

    const handleChange = (panel: string) => (event: ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Accordion square expanded={expanded === `panel-${parentItem.id}`} onChange={handleChange(`panel-${parentItem.id}`)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                              aria-controls={`panel-${parentItem.id}-content`}
                              id={`panel-${parentItem.id}-header`}>
                <SearchCheckbox item={parentItem} itemName={parentItem.name} key={parentItem.id} pref
                                checked={items.includes(parentItem)}
                                itemChecked={checkedParent(childItems)} itemUnChecked={unCheckedParent(childItems)}/>

            </AccordionSummary>
            <AccordionDetails>
                {
                    childItems.map((childItem) => (
                        <SearchCheckbox item={childItem} itemName={childItem.name} key={childItem.id}
                                        checked={items.map((item) => item.id).includes(childItem.id)}
                                        itemChecked={checkedChild(parentItem, childItems)}
                                        itemUnChecked={unCheckedChild(parentItem)}/>
                    ))
                }
            </AccordionDetails>
        </Accordion>
    );
}
