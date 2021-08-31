import React from 'react';
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
            padding: 4
        },
        label: {
            '&.MuiTypography' :{
                fontSize: 10
            }
        }
    }));

export default function DateMatchRadio() {
    const classes = useStyles()
    const [value, setValue] = React.useState('part');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className={classes.content}>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="dateMatch" name="dateMatch" value={value} onChange={handleChange}>
                    <FormControlLabel value="part"
                                      control={<Radio
                                          className={classes.root} color={'primary'} size={'small'}/>}
                                      label={<Typography variant="body2">いずれか</Typography>}
                                      className={classes.label}
                    />
                    <FormControlLabel value="all"
                                      control={<Radio
                                          className={classes.root} color={'primary'} size={'small'}/>}
                                      label={<Typography variant="body2">すべて</Typography>}
                    />
                </RadioGroup>
            </FormControl>
            <Typography　variant={'caption'}>の日時で空いている</Typography>
        </div>
    );
}
