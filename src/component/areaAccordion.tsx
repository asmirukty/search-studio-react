import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import CityAccordion from "./cityAccordion";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
    root: {
        width: '100%',
        border: '1px solid',
        borderColor: '#D7D2C8',
        boxShadow: 'none',
        height: 'fit-content',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
            height: 'fit-content'
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        fontSize: '14px',
        color: '#5A4628',
        backgroundColor: '#F9F5F0',
        height: '25px',
        '&$expanded': {
            height: '16px',
        },
    },
    content: {
        margin: 0,
        '&$expanded': {
            margin: 0,
        },
    },
    expandIcon: {
        color: '#5A4628',
        padding: '5px',
        margin: '0 -5px 0 0'
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles({
    root: {
        padding: 0,
    },
})(MuiAccordionDetails);

export default function AreaAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>();

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                  aria-label="Expand"
                                  aria-controls="panel1d-content"
                >
                    <Typography variant='subtitle2'>北海道・東北</Typography>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                  aria-label="Expand"
                                  aria-controls="panel2d-content" id="panel2d-header">
                    <Typography variant='subtitle2'>関東</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CityAccordion/>
                </AccordionDetails>
            </Accordion>
            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                  aria-label="Expand"
                                  aria-controls="panel3d-content" id="panel3d-header">
                    <Typography variant='subtitle2'>中部</Typography>
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
