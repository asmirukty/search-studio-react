import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '100%',
        },
}));

const AccordionSummary = withStyles( {
    root: {
        height: '16px',
        color: '#5A4628',
    },
    expandIcon: {
        color: '#5A4628',
        padding: '5px',
        margin: '0 -5px 0 0'
    },
})(MuiAccordionSummary);

const AccordionDetails = withStyles( {
    root: {
        padding: '0 16px'
    },
})(MuiAccordionDetails);

const FormControlLabel = withStyles( {
    label: {
        color: '#5A4628',
        fontSize: '12px',
        padding: 0
    },
})(MuiFormControlLabel);

export default function CityAccordion() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label='東京都'

                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="渋谷区"
                    />
                </AccordionDetails>
                <AccordionDetails>
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="新宿区"
                    />
                </AccordionDetails>
                <AccordionDetails>
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="豊島区"
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="神奈川県"
                    />
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="埼玉県"
                    />
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
