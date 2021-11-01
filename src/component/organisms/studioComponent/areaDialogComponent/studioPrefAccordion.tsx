import {withStyles} from '@material-ui/core/styles';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordion from "@material-ui/core/Accordion";
import React from "react";
import StudioCheckbox from "../../searchCheckbox";

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

interface StudioPrefAccordionProps{
    pref: string;
    items: string[];
}

export default function StudioPrefAccordion(props: StudioPrefAccordionProps) {

    return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`additional-actions-${props.pref}-content`}
                    id={`additional - actions-${props.pref}-header`}
                >
                    <StudioCheckbox item={props.pref} pref />
                </AccordionSummary>
                <AccordionDetails>
                    {
                        props.items.map((item) => (
                        <StudioCheckbox item={item}/>
                    ))
                    }
                </AccordionDetails>
            </Accordion>
    );
}
