import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordion from "@material-ui/core/Accordion";
import React from "react";

const useStyles = makeStyles(() =>
    createStyles({
        width: {
            width: '100%',
        },
        root: {
            padding: '4px 8px'
        }
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
    },
})(MuiAccordionDetails);

const FormControlLabel = withStyles( {
    label: {
        color: '#5A4628',
        fontSize: 12,
        padding: 0,
        minWidth: 60
    },
})(MuiFormControlLabel);

export default function CityAccordion() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className={classes.width}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox size='small'
                                           className={classes.root}
                            />}
                        label='東京都'
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <FormControlLabel
                        control={<Checkbox size='small'
                                           className={classes.root}
                                           checked={state.checkedA}
                                           onChange={handleChange}
                                           name='checkedA'/>}
                        label="渋谷区"
                    />
                    <FormControlLabel
                        control={<Checkbox size='small'
                                           className={classes.root}
                                           checked={state.checkedB}
                                           onChange={handleChange}
                                           name='checkedB'/>}
                        label="新宿区"
                    />
                    <FormControlLabel
                        //aria-label="Acknowledge"
                        //onClick={(event) => event.stopPropagation()}
                        //onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox size='small'
                                           className={classes.root}
                                           checked={state.checkedC}
                                           onChange={handleChange}
                                           name='checkedC'/>}
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
                        control={<Checkbox size='small' className={classes.root}/>}
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
                        control={<Checkbox size='small' className={classes.root}/>}
                        label="埼玉県"
                    />
                </AccordionSummary>
                <AccordionDetails>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
