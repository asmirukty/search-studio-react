import {createStyles, makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import SelectOption from "../atoms/selectOption";

const useStyles = makeStyles(() =>
    createStyles({
        select: {
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'center'
        }
    }));

interface MinMaxSelectProps {
    minLabel?: string, maxLabel?: string,
    min: any, max: any,
    minOptions: any[], maxOptions: any[], unit?: string,
    minNullValue: number, maxNullValue: number, disableEqual?: boolean,
    changeMin: (event: any) => void, changeMax: (event: any) => void
}

export default function MinMaxSelect(props: MinMaxSelectProps) {
    const classes = useStyles()
    const {minLabel, maxLabel, min, max, minOptions, maxOptions, unit, minNullValue, maxNullValue, disableEqual} = props;

    return (
        <div className={classes.select}>
            <SelectOption label={minLabel} value={min} nullValue={minOptions[minNullValue]} onChange={props.changeMin}>
                {
                    minOptions.map((option: any, index) => (
                        <MenuItem value={option} key={index}
                                  disabled={index !== minNullValue && max && (disableEqual ? index >= maxOptions.indexOf(max) : index > maxOptions.indexOf(max))}>
                            {option}{unit && index !== minNullValue && unit}
                        </MenuItem>
                    ))
                }
            </SelectOption>
            <p>~</p>
            <SelectOption label={maxLabel} value={max} nullValue={maxOptions[maxNullValue]} onChange={props.changeMax}>
                {
                    maxOptions.map((option: any, index) => (
                        <MenuItem value={option} key={index}
                                  disabled={index !== maxNullValue && min && (disableEqual ? index <= minOptions.indexOf(min) : index < minOptions.indexOf(min))}>
                            {option}{unit && index !== maxNullValue && unit}
                        </MenuItem>
                    ))
                }
            </SelectOption>
        </div>
    )
}