import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

interface StudioPlaceSubAccordionProps {
    parentId: string;
    parent: React.ReactNode;
    children: React.ReactNode;
}

export default function StudioPlaceSubAccordion(props: StudioPlaceSubAccordionProps) {
    const [expanded, setExpanded] = React.useState<string | false>();
    const {parentId, parent, children} = props;

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
            <Accordion square expanded={expanded === `panel-${parentId}`} onChange={handleChange(`panel-${parentId}`)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                  aria-controls={`panel-${parentId}-content`}
                                  id={`panel-${parentId}-header`}>
                    {parent}
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
    );
}
