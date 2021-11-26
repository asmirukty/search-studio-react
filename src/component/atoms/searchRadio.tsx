import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Typography} from "@material-ui/core";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        content: {
            color: "#5A4628",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        root: {
            padding: 4,
        },
        label: {
            margin: '0 4px',
            '&.MuiTypography' :{
                fontSize: 10
            }
        }
    }));

interface SearchRadioProps {
    beforeTyp?: string,
    afterTyp?: string,
    value: any,
    options: string[],
    handleChange: (event: any) => void
}

export default function SearchRadio(props: SearchRadioProps) {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            {
                props.beforeTyp && <Typography variant={'caption'}>{props.beforeTyp}</Typography>
            }
            <FormControl component="fieldset" style={{marginRight: 8}}>
                <RadioGroup row aria-label="dateMatch" name="dateMatch" value={props.value} onChange={props.handleChange}>
                    {
                        props.options.map((option) =>
                            <FormControlLabel value={option}
                                              control={<Radio className={classes.root} color={'primary'} size={'small'}/>}
                                              label={<Typography variant="body2">{option}</Typography>}
                                              className={classes.label}
                            />
                        )
                    }
                </RadioGroup>
            </FormControl>
            {
                props.afterTyp && <Typography variant={'caption'}>{props.afterTyp}</Typography>
            }
        </div>
    );
}
